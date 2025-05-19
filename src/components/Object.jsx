import React from "react";
function Produit({informations ,mystyle}) {
    return(
        <div>
            <h2>designation produit: {informations.nom}</h2> 
            <h2>prix du produit: {informations.prix}</h2> 
            
            <h2 style={mystyle}> designation produit :{informations.nom} </h2>
        </div>
    ) 
}
export default Produit;