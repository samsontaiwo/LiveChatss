import { Form, Link, useActionData, useSearchParams } from '@remix-run/react';

export type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

const LoginForm = () => {
  const actionData = useActionData<ActionData | undefined>();
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col items-center justify-center rounded-t-md border-2 border-black p-8">
      <div className="flex max-h-full w-[400px] flex-col items-center justify-center rounded-t p-4">
        <h1>Login</h1>
        <Form
          className="flex w-full flex-col justify-center gap-4"
          method="post"
          aria-describedby={actionData?.formError ? 'form-error-message' : undefined}
        >
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <fieldset className="flex justify-center">
            <legend className="sr-only">Login or Register?</legend>
            <label className="mr-8">
              <input
                className="mr-2"
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.fields?.loginType || actionData?.fields?.loginType === 'login'
                }
              />
              Login
            </label>
            <label>
              <input
                className="mr-2"
                type="radio"
                name="loginType"
                value="register"
                defaultChecked={actionData?.fields?.loginType === 'register'}
              />
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              className="h-6 w-full border-2"
              type="text"
              id="username-input"
              name="username"
              defaultValue={actionData?.fields?.username}
              aria-invalid={Boolean(actionData?.fieldErrors?.username)}
              aria-describedby={actionData?.fieldErrors?.username ? 'username-error' : undefined}
            />
            {actionData?.fieldErrors?.username ? (
              <p className="form-validation-error" role="alert" id="username-error">
                {actionData?.fieldErrors.username}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              className="h-6 w-full border-2"
              id="password-input"
              name="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={Boolean(actionData?.fieldErrors?.password) || undefined}
              aria-describedby={actionData?.fieldErrors?.password ? 'password-error' : undefined}
            />
            {actionData?.fieldErrors?.password ? (
              <p className="form-validation-error" role="alert" id="password-error">
                {actionData?.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div id="form-error-message">
            {actionData?.formError ? (
              <p className="form-validation-error" role="alert">
                {actionData?.formError}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </div>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default LoginForm;
