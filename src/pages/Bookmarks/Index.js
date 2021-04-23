import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import ListContent from "../../components/List/Index"
import NumberFormat from 'react-number-format';
import BookIcon from "../../assets/img/icons/book.svg"
const Index = () => {
    const dispatch = useDispatch();
  const {bookmarks} = useSelector(
    (state) => ({ 
        bookmarks: state.bookmarks.items ? state.bookmarks.items : [],
    }), shallowEqual
  );
  useEffect(() => {
      // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div id="bookmarks" className={styles.bookmarks}>
        <div className={styles.sidebar}>
            <img className={styles.logo} src={BookIcon} alt="" />
            <h1>Bookmarks</h1>
            <p>You have {bookmarks.length ? <NumberFormat value={bookmarks.length} displayType={'text'} thousandSeparator={true} /> : 0} bookmarks</p>
        </div>
        <div className={styles.content}>
            {bookmarks.map((doc, index) => {
            return <ListContent key={index} link={"/repositories/"+doc.id} icon={BookIcon} iconStyle={{}} title={doc.full_name} desc={doc.description} />
            })}
        </div>
    </div>
  );
};

export default Index;
