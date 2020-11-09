import React from 'react';
import containerStyle from '../styles/container.module.css';

const Container = ({children}) => {
    return (
        <div className={containerStyle.container}> 
            {children}
        </div>
    );
}
 
export default Container;