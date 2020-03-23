import React, {Component} from 'react';
import style from "./App.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Redirect, Route} from "react-router-dom";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import ProductContainer from "./components/ProductInfo/ProductContainer";

 const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
        marginTop: '15px'
    },
}));


const App = ()=>{

    let classes = useStyles();

    return (
        <div className={style.appWrapper}>
            <Container fixed>

                <Header/>
                <Grid container spacing={1} className={style.mainContent}>
                    <Grid item  xs={12} md={12} lg={3} >
                        <Paper className={classes.paper}>
                            <NavbarContainer/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={12} lg={9}>
                        <Paper className={classes.paper}>

                            <Route  path='/catalog/:productId' render={() => { return <ProductContainer /> }} />
                            <Redirect from="/" to="/catalog" />
                            <Route exact path='/catalog' render={() => { return <CatalogContainer/> }} />

                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>

    );
}



export default App

