import React from 'react';
import Header from '../components/header';

const About = () => {
    return (
        <div style={{
            color: `teal`,
        }}>
            <Header 
                headerText="About Gatsby"
            />
            <Header 
                headerText="Another Header Component"
            />
            <p>Gatsby is interesting</p>
        </div>
    );
}
 
export default About;