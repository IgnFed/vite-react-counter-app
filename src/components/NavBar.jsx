import React from 'react';

export const NavBar = ({ totalCounter }) => {
   return (
      <>
         <nav className="nav">
            <div className="logoContainer">
               <i className="fas fa-shopping-cart" />
            </div>
            <div className="counter clr-info">{totalCounter}</div>
            <div>
               <h3>Items</h3>
            </div>
         </nav>
      </>
   );
};
