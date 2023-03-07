import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-[600px] border">{children}</div>;
};

export default Layout;
