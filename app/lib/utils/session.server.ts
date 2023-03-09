import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { prisma } from '~/services/db.server';
import bcrypt from 'bcrypt';

type LoginType = {
  username: string;
  password: string;
};

export async function register({ username, password }: LoginType) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, passwordHash },
  });
  return user;
}

export async function login({ username, password }: LoginType) {
  const existingUser = await prisma.user.findFirst({ where: { username } });
  if (!existingUser) return null;

  const passwordsMatch = await bcrypt.compare(password, existingUser.passwordHash);
  if (!passwordsMatch) return null;

  return existingUser;
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('Must set environment variable SESSION_SECRET');
}

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: 'lc_session',
    secure: true,
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export function getUserSession(request: Request) {
  return getSession(request.headers.get('Cookie'));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'string') return null;
  return userId;
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: { 'Set-Cookie': await commitSession(session) },
  });
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (!userId) return null;
  return prisma.user.findUnique({ where: { id: userId } });
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect(`/`, {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}
