import React from 'react';
import { Counter } from './Counter.jsx';
export const Counters = ({ OnAddCant, items, OnRemoveCant, OnDeleteElement, OnRevertAllChanes}) => {

   return (
      <>
         <main className="container">
            <button 
               className={items.length > 0 ? "clr-success disabled": "clr-success"}
               disabled = {items.length > 0 ? true: false}
               onClick={()=>window.location.reload()}
               
            >
            
               <i className="fas fas-reload"></i>
            </button>
            <button onClick={()=>OnRevertAllChanes()} className="clr-warning"><i className="fas fas-recycle"></i></button>
            {
               items.length > 0 ? (
                  items.map((n) => {
                     return (<Counter
                        key={n.id}
                        OnAddCant={OnAddCant}
                        id={n.id}
                        cant={n.cant}
                        OnRemoveCant={OnRemoveCant}
                        OnDeleteElement={OnDeleteElement}
                     />)
                  })
               ):
               (
                  <div className="row clr-info notElements">NOT ELEMENTS</div>
               )
            }
            
         </main>
      </>
   )


}