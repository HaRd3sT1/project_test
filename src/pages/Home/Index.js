import React, {useState} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './Style.module.scss';
import screen_search from "../../assets/img/icons/screen_search.svg"
import ListContent from "../../components/List/Index"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MoodIcon from '@material-ui/icons/Mood';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NumberFormat from 'react-number-format';
import BookIcon from "../../assets/img/icons/book.svg"
const Index = () => {
  const {repositories, bookmarks, users, userDetails} = useSelector(
    (state) => ({ 
      repositories: state.repositories,
      bookmarks: state.bookmarks.search ? state.bookmarks.search : [],
      userDetails: state.userDetails,
      users: state.users ? state.users : [],
    }), shallowEqual
  );
  const [tab, tabSet] = useState(0);
  return (
    <div id="home" className={styles.home}>
      {repositories.total_count || bookmarks.total_count || users.total_count ? 
      <div className={styles.searchResult}>
        <div className={styles.sidebar}>
          <List className={styles.list} component="nav" aria-label="main mailbox folders">
            <ListItem 
            button
            selected={tab === 0}
            onClick={(event) => tabSet(0)}
            classes={{ selected: styles.active }}
            >
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Repositories" />
              <span>{repositories.total_count ? <NumberFormat value={repositories.total_count} displayType={'text'} thousandSeparator={true} /> : 0}</span>
            </ListItem>
            <ListItem 
            button
            selected={tab === 1}
            onClick={(event) => tabSet(1)}
            classes={{ selected: styles.active }}
            >
              <ListItemIcon>
                <MoodIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
              <span>{users.total_count ? <NumberFormat value={users.total_count} displayType={'text'} thousandSeparator={true} /> : 0}</span>
            </ListItem>
            <ListItem 
            button
            selected={tab === 2}
            onClick={(event) => tabSet(2)}
            classes={{ selected: styles.active }}
            >
              <ListItemIcon>
                <BookmarkBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarked" />
              <span>{bookmarks.total_count ? <NumberFormat value={bookmarks.total_count} displayType={'text'} thousandSeparator={true} /> : 0}</span>
            </ListItem>
          </List>
        </div>
        <div className={styles.content}>
          {tab === 0 ? 
            <div classes={styles.tabContent}>
              <h3 className={styles.title}>{repositories.total_count ? <NumberFormat value={repositories.total_count} displayType={'text'} thousandSeparator={true} /> : 0} Repository Results</h3>
              {repositories.items ? repositories.items.map((doc, index) => {
                return <ListContent key={index} link={"/repostories/"+doc.id} icon={BookIcon} iconStyle={{}} title={doc.full_name} desc={doc.description} />
              }) : ""}
            </div> : 
            tab === 1 ? 
            <div classes={styles.tabContent}>
              <h3 className={styles.title}>{users.total_count ? <NumberFormat value={users.total_count} displayType={'text'} thousandSeparator={true} /> : 0} User Results</h3>
              {users.items ? users.items.map((doc, index) => {
                if(userDetails[doc]){
                  return <ListContent key={index} link={"/users/"+doc} icon={userDetails[doc].avatar_url} iconStyle={{borderRadius:24, height:24, width:24}} title={userDetails[doc].name} desc={userDetails[doc].bio} />
                }
              }) : ""}
            </div> :
            tab === 2 ? 
            <div classes={styles.tabContent}>
              
            </div> : 
            "Not Result."
          }
        </div>
      </div> : <div className={styles.noResult}>
        <img src={screen_search} alt="" />
        <p>Search results will appear here</p>
      </div>}
    </div>
  );
};

export default Index;
