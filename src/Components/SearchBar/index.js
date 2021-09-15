import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import notification from '../../Assets/Images/notification.svg';
import profile from '../../Assets/Images/alex.jpg';
import downArrow from '../../Assets/Images/down.svg';

import styles from './styles.module.css'; 



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        background: '#F5F5F7',
        borderRadius: '8px',
        boxShadow:"none"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: '7px 5px',
      color:'black'
    }
  }));
  
export default function SearchBar() {
    const classes = useStyles();
    return (
        <div className={styles.searchHeader}>
            <Paper component="form" className={classes.root}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
            <img className={styles.icon} src={notification} alt='' />
            <div className={styles.profileContainer}>
                <img src={profile} className={styles.profileIcon} alt='' />
                <img src={downArrow} className={styles.downArrow} alt='' />
            </div>
        </div>
    )
}
