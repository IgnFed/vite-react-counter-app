import React, { useState } from 'react';
import { Counters } from './components/Counters.jsx';
import { NavBar } from './components/NavBar.jsx';

export const App = () => {
   const [items, setItems] = useState([
      {id: 1, cant: 0},
      {id: 2, cant: 0},
      {id: 3, cant: 0},
      {id: 4, cant: 0 }
   ]);

   const OnAddCant =(id)=> {
      const it = [...items]
      const idx = it.findIndex(el => el.id == id)
      it[idx].cant++ 
      setItems(it)

   }
   const OnRemoveCant = (id) => {
      const it = [...items]
      const idx = it.findIndex(el => el.id == id)
      it[idx].cant--
      setItems(it)
   }
   const OnDeleteElement = (id)=>{
      const it = items.filter(n => n.id != id)
      setItems(it)
   }
   const OnRevertAllChanes =()=>{
      const it = items.map(n =>{
         n.cant=0
         return n
      })
      setItems(it)
   }

   return (
      <>
         <div className="app">
            <div>
               <NavBar totalCounter={items.filter(n => n.cant > 0).length} />
            </div>
            <div>
               <Counters OnAddCant={OnAddCant} OnRemoveCant={OnRemoveCant} OnDeleteElement={OnDeleteElement} OnRevertAllChanes={OnRevertAllChanes} items = {items}/>
            </div>
         </div>
      </>
   );
};
