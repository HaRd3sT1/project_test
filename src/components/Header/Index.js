import React from 'react';
import styles from './Styles.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "../../assets/img/logo.svg"
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <AppBar position="absolute" className={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <img className={styles.logo} src={Logo} alt="" />
                    <div className={styles.search}>
                        <SearchIcon />
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: styles.inputRoot,
                            input: styles.input,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <BookmarkBorderIcon />
                            <span>Bookmarks</span>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>

    );
};

export default Header;
