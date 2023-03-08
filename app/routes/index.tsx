import { redirect } from '@remix-run/node';

const Index = () => {
  // @todo landing page
  return null;
};

export const loader = async () => {
  return redirect('/login');
};

export default Index;

export { CatchBoundary } from '~/components/error/CatchBoundary';
export { ErrorBoundary } from '~/components/error/ErrorBoundary';
