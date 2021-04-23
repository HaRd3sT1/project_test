import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "../../assets/img/logo.svg"
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {onChange, searchData} from "../../state/actions/dashboard"
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const dispatch = useDispatch();
    const [perPage, perPageSet] = useState(7);
    const { search} = useSelector(
      (state) => ({ 
        search: state.dashboard.search ? state.dashboard.search : ""
      }), shallowEqual
    );
    return (
        <div className={styles.header}>
            <AppBar position="absolute" className={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <NavLink to="/" className={styles.logo} >
                        <img src={Logo} alt="" />
                    </NavLink>
                    <div className={styles.search}>
                        <SearchIcon onClick={(e) => dispatch(searchData(perPage))} />
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: styles.inputRoot,
                            input: styles.input,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                dispatch(searchData(perPage))
                                ev.preventDefault();
                            }
                        }}
                        onChange={(e) => dispatch(onChange("search", e.target.value))}
                        value={search}
                        />
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <NavLink to="/bookmarks">
                                <BookmarkBorderIcon />
                                <span>Bookmarks</span>
                            </NavLink>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>

    );
};

export default Header;
