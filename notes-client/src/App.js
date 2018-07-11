import React, { Component } from 'react';
import './App.css';


const notes = [
  {
    'id': 1,
    'title': '1st Item',
    'description': 'Description here.'
  },
  {
    'id': 2,
    'title': '2nd Item',
    'description': 'Another description here.'
  },
  {
    'id': 3,
    'title': '3rd Item',
    'description': 'Third description here.'
  }
];

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
