import React from 'react';
import Counter from './Counter';

function Header(props) {
  return (
    <div>
      <h1 className="heading">ISP HackerEarth</h1>
      <span className="subheading">- searching ISP made easy!</span>
      <Counter total={props.total} apihits={props.apihits} />
    </div>
  );
}

export default Header;
