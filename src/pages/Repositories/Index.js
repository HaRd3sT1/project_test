import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import { useParams } from 'react-router-dom';
import screen_search from "../../assets/img/icons/screen_search.svg"
import {repositoriesDetail} from "../../state/actions/repositories"
import MarkdownIt from "markdown-it";
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
import ForkIcon from "../../assets/img/icons/git-fork.svg"
import BranchesIcon from "../../assets/img/icons/git-branch.svg"
import PullRequestIcon from "../../assets/img/icons/git-pull-request.svg"
import EyeIcon from "../../assets/img/icons/eye.svg"
import StarIcon from "../../assets/img/icons/star.svg"
import IssueIcon from "../../assets/img/icons/issue.svg"
import LinkIcon from '@material-ui/icons/Link';
// import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {addBookmark} from "../../state/actions/bookmarks"
import {floatNumber} from "../../Hooks"
const Index = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      });
  const {repositories} = useSelector(
    (state) => ({ 
      repositories: state.repositories.details,
    }), shallowEqual
  );
  useEffect(() => {
      console.log(id);
      dispatch(repositoriesDetail(id))
      // eslint-disable-next-line
  }, [dispatch]);
  var result =repositories.readMe ?  md.render(window.atob(repositories.readMe)) : "";
  if(document.getElementById("markdown-body")){
      document.getElementById("markdown-body").innerHTML = result
  }
  return (
    <div id="repositories" className={styles.repositories}>
        <div className={styles.sidebar}>
            <img className={styles.logo} src={BookIcon} alt="" />
            <h1>{repositories.full_name}</h1>
            <p>{repositories.description}</p>
            <a href={repositories.url} className={styles.link} target="_blank">
                <LinkIcon style={{ color: "#24292E"}} />
                {repositories.full_name}
            </a>
            <ul>
                <li>
                    <img src={EyeIcon} alt="" /> Watch <b>{floatNumber(repositories.subscribers_count)}</b>
                </li>
                <li>
                    <img src={StarIcon} alt="" /> Star <b>{floatNumber(repositories.stargazers_count)}</b>
                </li>
                <li>
                    <img src={ForkIcon} alt="" /> Fork <b>{floatNumber(repositories.forks)}</b>
                </li>
            </ul>
            <ul>
                <li>
                    <img src={BranchesIcon} alt="" /> Branches <b>{floatNumber(repositories.branches)}</b>
                </li>
                <li>
                    <img src={IssueIcon} alt="" /> Issues <b>{floatNumber(repositories.open_issues)}</b>
                </li>
                <li>
                    <img src={PullRequestIcon} alt="" /> Pull Requests <b>{floatNumber(repositories.pulls)}</b>
                </li>
            </ul>
            <button onClick={(e) => dispatch(addBookmark(repositories))}><BookmarkBorderIcon /> <span>Add to Bookmarks</span></button>
        </div>
        <div className={styles.content} id="markdown-body"></div>
    </div>
  );
};

export default Index;
