import * as React from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ location, children }: any) => {
  let pathName: any = null;
  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (location.pathname !== pathName) scrollToTop();
  });

  return children;
};

export default withRouter(ScrollToTop);
