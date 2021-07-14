import React from 'react';

export const Counter = ({ OnAddCant, id, cant, OnRemoveCant, OnDeleteElement}) => {
   return (
      <div className="row">
         <div className="col-md-1">
            <span className = "clr-warning">{cant > 0 ? cant:"ZERO"}</span>
         </div>
         <div className="col-md-4">
            <button onClick={()=>OnAddCant(id)} className="clr-success">
               <i className="fas fas-plus" />
            </button>
            <button onClick={() => OnRemoveCant(id)} disabled={cant > 0 ? false : true} className={cant > 0 ? "clr-warning" : "clr-warning disabled"}>
               <i className="fas fas-minus" />
            </button>
            <button onClick={() => OnDeleteElement(id)} className="clr-danger">
               <i className="fas fas-del" />
            </button>
         </div>
      </div>
   );
};
