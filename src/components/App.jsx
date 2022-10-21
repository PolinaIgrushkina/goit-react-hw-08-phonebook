import { nanoid } from "nanoid";
import { Component } from "react";
import Contact from './Contact/Contact';
import Form from "./Form/Form";

export class App extends Component  {
  state = {
  contacts: [],
  name: '',
  number: '',
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid(), }
        ]
      }
    });
 
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  render() {
    return <div>

      <section>
      <h2>Phonebook</h2>
        <Form number={this.state.number} name={this.state.name} handleSubmit={this.handleSubmit} handleChangeInput={this.handleChangeInput}/>
      </section>
      
      <section>
      <h2>Contacts</h2>
      <ul>
        <Contact contacts={this.state.contacts} />
      </ul>
      </section>
    </div>
  }
};

