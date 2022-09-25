import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
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
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div class="ui grid">
          <div class="four wide column">
            <Sidebar />
          </div>
          <div class="nine wide column">
            <h2 class="ui header">
              <i class="bug icon"></i>
              <div class="content">
                Issues
              </div>
            </h2>
            <IssueList issues={this.state.aws} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
