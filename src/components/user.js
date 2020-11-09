import React from 'react';
import styles from '../styles/user.module.css';

const User = (props) => {
    return (
        <div className={styles.user}>
            <img src={props.avatar} className={styles.avatar} alt="" />
            <div className={styles.description}>
                <h2 className={styles.username}>{props.username}</h2>
                <p className={styles.excerpt}>{props.excerpt}</p>
            </div>
        </div>
    );
}
 
export default User;