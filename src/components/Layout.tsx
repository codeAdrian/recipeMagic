import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router';
import { Header, Footer } from 'components';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
}

const Layout: any = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Layout);
