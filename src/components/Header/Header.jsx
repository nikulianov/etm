import React from 'react';
import Grid from "@material-ui/core/Grid";
import style from "./Header.module.scss"


const Header = () => {

    return (

        <Grid container spacing={1} direction="row"
              justify="space-between" className={style.header}>
            <Grid item xs={12}>
                <div className={style.headerContent}>
                    <div className={style.logo}>
                        ETM
                    </div>
                </div>

            </Grid>


        </Grid>


    );
}


export default Header
