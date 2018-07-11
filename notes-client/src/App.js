import React, { Component } from 'react';


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
      const res = await fetch('http://127.0.0.1:8000/admin/notes/note/');
      const notes = await res.json();
      this.setState({
        notes
      });
      console.log(this.state.notes);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.notes.map(item => (
          <div key={item.id}>
            <h1>{item.Title}</h1>
            <span>{item.Content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
