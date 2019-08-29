import React from 'react';
import { withRouter } from 'react-router';
import { Header, Footer } from 'components';
interface Props {
  children: React.ReactNode;
}

const Layout: any = ({ children, location }: any) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Layout);
