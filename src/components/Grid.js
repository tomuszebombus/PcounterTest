import React from 'react'
import { Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomButton from './customButton'

const styles = makeStyles({
    wrapper:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem 0 1rem"
    },
    item:{
        paddingTop: "0rem"       
    }
})

function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
    <div className={classes.wrapper}>
        <div className={classes.wrapper}>{icon}</div>
        <Typography className={classes.item} variant="h5">{title}</Typography>
        <div className={classes.item}>
            <CustomButton txt={btnTitle}/>
        </div>
    </div>
    )
}

export default Grid