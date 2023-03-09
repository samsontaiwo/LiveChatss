import { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getUser } from '~/lib/utils/session.server';

const Home = () => {
  const { user } = useLoaderData();
  return <>Welcome {user ? <Link to="/logout">logout</Link> : <Link to="/login">login</Link>}</>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return { user };
};

// export const action: ActionFunction = async ({ request }: ActionArgs) => {
//   const data = await request.formData(); // from database
// };

export default Home;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';
