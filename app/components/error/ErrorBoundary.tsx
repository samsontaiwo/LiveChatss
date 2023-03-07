export const ErrorBoundary = ({ error }: { error: Error }) => {
  console.log('index -> ErrorBoundary', error, error.message, error.stack);
  return (
    <>
      <div>
        <header>500 - </header>
        <p>oops something broke :3</p>
      </div>
      <p>Trace(for debug): {error.message}</p>
    </>
  );
};
