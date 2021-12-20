import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import LayoutStyles from './LayoutStyle'
import { Route } from 'react-router-dom';
import Input_Form from '../Components/Input_Form'
import Home from "../Components/Home";

//Halaman base untuk layout
const Base = ({ match }) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        // console.log("this")
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header toggleDrawer={toggleDrawer} open={open} />
            <Sidebar toggleDrawer={toggleDrawer} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/form`} component={Input_Form} />
                               <Footer />
            </main>
        </div>
    )
};

export default Base;
