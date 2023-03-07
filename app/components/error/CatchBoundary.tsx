import { useCatch } from '@remix-run/react';

export const CatchBoundary = () => {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = <p>oops, you shouldn&apos;t be here (No access)</p>;
      break;
    case 404:
      message = <p>oops, you shouldn&apos;t be here (Page doesn&apos;t exist)</p>;
      break;
    case 429:
      message = <p>oops, API suspended (too many requests)</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <>
      <header>
        {caught.status}: {caught.statusText}
      </header>
      <p>{message}</p>
    </>
  );
};
