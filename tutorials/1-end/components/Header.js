import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import { styleToolbar } from './SharedStyles';

const styleAnchor = {
  margin: '0px 20px 0px auto',
};

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item sm={10} xs={9} style={{ textAlign: 'left' }}>
            <Link prefetch href="/">
              <Link prefetch href="/subscribe" as="/subscribe">
                <a>Add email to Mailchimp list</a>
              </Link>
            </Link>
          </Grid>
          <Grid item sm={1} xs={3} style={{ textAlign: 'right' }}>
            <a
              href="https://builderbook.org/book"
              target="_blank"
              rel="noopener noreferrer"
              style={styleAnchor}
            >
              Our book
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

export default Header;
