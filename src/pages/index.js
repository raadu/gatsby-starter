import { Link } from 'gatsby';
import React from "react";
import Header from '../components/header';

export default function Home() {
  return (
    <div style={{
      color: `purple`,
      fontSize: `72px`,
    }}>
      <Link to="/contact/">
        <Header 
          headerText="Contact Header"
        />
      </Link>
      <p>This is so fast</p>
      <img 
        src="https://source.unsplash.com/random/400x200" 
        alt="Random"
      />
    </div>
  );
}
