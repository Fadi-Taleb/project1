import React from 'react'
import Paragraph from './components/Text';
import Bouton from './components/Fonction';
import Animal from './components/Tableau';
import Produit from './components/Object';
import Message from './components/Message';
import Composant from './components/composant';
import './App.css'
import Foto from './components/Foto';

function App() {
   const animaux=["chien","chat","lapin"]
  return (
    <div>
      <h1 className='bg-red-400'>Calculatrice</h1> 
      <Calculatrice/> 
       <Composant/>
       <Message nom="fadi"/> 
      <Produit mystyle={{color:'red',}} informations={{nom:"sucre",prix:15.45}} />
      <Animal items={animaux}/> 
      <Bouton click={()=>alert("bien")}/> 
       <Bouton click={()=>alert("tres bien")}/> 
       <Bouton click={()=>alert("cv")}/> 
     <Paragraph/>
     <Foto/>
    </div>
  );
}
export default App;