import { Component } from 'react';

class Titre2 extends Component {

  constructor() {
    super();
    this.state = {
      numero: 0,
      texte: ''
    };
  }

  ajouter = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  changer = (e) => {
    this.setState({
      texte: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.numero}</h1>
        <button onClick={this.ajouter}>Click here</button>
        <h1>{this.state.texte}</h1>
        <input type="text" onChange={this.changer} />
      </div>
    );
  }
}

export default Titre2;