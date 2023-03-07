import type { ReactNode } from 'react';

import Nav from './Nav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[600px] border">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
