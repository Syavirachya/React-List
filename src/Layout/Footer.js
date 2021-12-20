import * as React from 'react';
import Link from '@material-ui/core/Link';
import LayoutStyles from './LayoutStyle'
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://prosigmaka.com/">
          PT. Pro Sigmaka Mandiri
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = LayoutStyles();
    return (
        <>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Created by Syavira 
        </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Powered by React App
        </Typography>
                <Copyright />
            </footer>
        </>
    );
};
export default Footer;
