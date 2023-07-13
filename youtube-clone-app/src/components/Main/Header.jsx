import {Link} from 'react-router-dom';
import {BiSearch} from "react-icons/bi";
import styles from './Header.module.css';

export default () => {
 
    return (
        <div className={styles.headerContainer}>
            <Link to={'/'} className={styles.logo}>
                <img className={styles.logoImg} src='./img/youtube.png'/>
            </Link>
            <div className={styles.searchContainer}>
                <input placeholder='검색해주세요' className={styles.searchInput}/>
                <button className={styles.searchButton}type='button'>
                    <BiSearch size={25} color='white'/>
                </button>
            </div>
        </div>
    )
}