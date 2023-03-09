import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { logout } from '~/lib/utils/session.server';

export let action: ActionFunction = ({ request }) => logout(request);

export let loader: LoaderFunction = () => redirect('/');
