import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';

import stylesheet from '~/lib/styles/tailwind.css';

import Layout from './components/Layout';
import { iosSplashScreens } from './lib/utils/utils';

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

export const meta: MetaFunction = () => {
  const description = 'remix chat';

  return {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    charset: 'utf-8',
    description,
    keywords: 'remix live chat, live chat, chat, chatr',
    'og:description': description,
    // 'og:image': '/meta-image.png',
    'og:image:alt': 'chatr',
    // 'og:image:height': '630',
    // 'og:image:type': 'image/png',
    // 'og:image:width': '1200',
    'og:title': 'chatr',

    // 'twitter:card': 'summary_large_image',
    'twitter:description': description,
    // 'twitter:image': '/meta-image.png',
    'twitter:title': 'chatr',
    viewport: 'width=device-width,initial-scale=1,user-scalable=no',
  };
};

export let links: LinksFunction = () => {
  return [
    { as: 'style', href: stylesheet, rel: 'stylesheet' },
    { as: 'preconnect', href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    { as: 'preconnect', href: 'https://fonts.gstaticom', rel: 'preconnect' },
    {
      as: 'font',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap',
      media: 'all',
      rel: 'stylesheet',
    },
    {
      as: 'font',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      media: 'all',
      rel: 'stylesheet',
    },
    {
      as: 'font',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;700;800;900&display=swap"',
      media: 'all',
      rel: 'stylesheet',
    },
    {
      as: 'manifest',
      href: '/manifest.json',
      rel: 'manifest',
    },
    // {
    //   href: '/apple-touch-icon.png',
    //   rel: 'apple-touch-icon',
    // },
    ...iosSplashScreens,
  ];
};

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

const Document = ({ children, title = 'chatr' }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  console.error(error);
  return (
    <Document title="chatr - Error">
      <Layout>
        <header>Oops, unhandled error</header>
        <p>Trace(for debug): {error.message}</p>
      </Layout>
    </Document>
  );
};

export const CatchBoundary = () => {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops, you shouldn&apos;t be here (No access)</p>;
      break;
    case 404:
      message = <p>Oops, you shouldn&apos;t be here (Page doesn&apos;t exist)</p>;
      break;

    default:
      // throw new Error(caught.data || caught.statusText);
      message = <p>Oops, this definitely shouldn&apos;t have happened</p>;
  }
  return (
    <Document title="chatr - Error">
      <Layout>
        <header>
          {caught.status}: {caught.statusText}
        </header>
        <p>{message}</p>
      </Layout>
    </Document>
  );
};

export default App;
