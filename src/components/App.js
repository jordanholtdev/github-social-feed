import React from 'react'
import logo from '../logo.svg';
import Header from './Header';
import IssueList from './IssueList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aws: [] };
  }
  componentDidMount() {
    fetch('./issues.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ aws: data.aws })
        console.log(this.state)
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h3>Issues:</h3>
        <IssueList issues={this.state.aws} />
      </div>
    );
  }
}

export default App;
