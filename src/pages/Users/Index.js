import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import { useParams } from 'react-router-dom';
import ListContent from "../../components/List/Index"
import BookIcon from "../../assets/img/icons/book.svg"
import {userRepositories} from "../../state/actions/users"
const Index = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
  const {userDetails, repositories} = useSelector(
    (state) => ({ 
        userDetails: state.userDetails,
        repositories: state.users.repositories ? state.users.repositories : [],
    }), shallowEqual
  );
  useEffect(() => {
      dispatch(userRepositories(id))
      // eslint-disable-next-line
  }, [dispatch]);
  if(!userDetails[id]){
      return null
  }
  return (
    <div id="users" className={styles.users}>
        <div className={styles.sidebar}>
            <img className={styles.logo} src={userDetails[id].avatar_url} alt="" />
            <h1>{userDetails[id].name}</h1>
            <small>{userDetails[id].login}</small>
            <p>{userDetails[id].bio}</p>
        </div>
        <div className={styles.content}>
              <h3 className={styles.title}>Repositories <span>{repositories.length}</span></h3>
            {repositories.map((doc, index) => {
            return <ListContent key={index} link={"/repositories/"+doc.id} icon={BookIcon} iconStyle={{}} title={doc.full_name} desc={doc.description} />
            })}
        </div>
    </div>
  );
};

export default Index;
