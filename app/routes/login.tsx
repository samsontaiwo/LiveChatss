import LoginForm, { ActionData } from '~/components/LoginForm';
import { prisma } from '~/services/db.server';
import { type ActionArgs, ActionFunction } from '@remix-run/node';
import { createUserSession, login, register } from '~/lib/utils/session.server';

const Login = () => {
  return <LoginForm />;
};

export const action: ActionFunction = async ({
  request,
}: ActionArgs): Promise<Response | ActionData> => {
  const data = await request.formData();

  const username = data.get('username') as string;
  const password = data.get('password') as string;
  const loginType = data.get('loginType') as string;

  if (!username || !password) {
    return {
      formError: 'form not submitted correctly',
    };
  }

  const fields = { loginType, username, password };

  switch (loginType) {
    case 'login': {
      let user = await login({ username, password });
      if (!user) {
        return {
          fields,
          formError: `Username/Password combination is incorrect`,
        };
      }
      return createUserSession(user.id, '/home');
    }
    case 'register': {
      let userExists = await prisma.user.findFirst({
        // check if user exists
        where: { username },
      });
      if (userExists) {
        // if user exists return error
        return {
          fields,
          formError: `User with username ${username} already exists`,
        };
      }
      const user = await register({ username, password });
      if (!user) {
        return {
          fields,
          formError: `Something went wrong trying to create a new user.`,
        };
      }
      return createUserSession(user.id, '/home');
    }
    default: {
      return { fields, formError: `Login type invalid` };
    }
  }
};

export default Login;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';
