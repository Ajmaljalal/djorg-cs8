import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    notes: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api-auth/notes/');
      const notes = await res.json();
      console.log(notes);
      this.setState({
        notes
      });
      
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className = 'container'>
       <h2>Sample notes app</h2>
       <div className = 'notes'>
        {this.state.notes.map(item => (
          <div key={item.id} className = 'note'>
            <h3>{item.title}</h3>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default App;
