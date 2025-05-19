import React from "react";
function Animal({items}) {
    return (
        <div>
    <h3>liste des animaux</h3>
    <ul> {items.map((item, index) => (<li key={index} > {item}</li>))}
    </ul>
        </div>
    )  
}
export default Animal;