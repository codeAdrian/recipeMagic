import React from 'react';
import { ToastContainer } from 'react-toastify';
import { withRouter } from 'react-router';
import { Header, Footer } from 'components';
import { ApiTimer } from 'modules';

interface Props {
  children: React.ReactNode;
}

const Layout: any = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <ToastContainer />
        <ApiTimer />
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Layout);
