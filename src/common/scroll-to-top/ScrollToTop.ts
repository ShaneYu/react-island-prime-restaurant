import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ScrollToTopProps {
  children?: React.ReactNode;
}

type Props = ScrollToTopProps & RouteComponentProps<{}>;

class ScrollToTop extends React.PureComponent<Props, {}> {
  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;
    // TODO: Restore scroll position on browser back button etc.
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default withRouter<Props, typeof ScrollToTop>(ScrollToTop);
