import React from 'react'
import Header from './Header';
import TabNav from './TabNav';
import Tab from './Tab';
import IssueList from './IssueList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aws: [], react: [], selected: 'facebook/react' };
  }
  componentDidMount() {
    fetch('./issues.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ aws: data.aws, react: data.react, linux: data.linux, next: data.next })
      })
      .catch(e => console.log(e))
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div class="ui container">
          <TabNav tabs={['facebook/react', 'vercel/next.js', 'torvalds/linux', 'aws/aws-cli']} selected={this.state.selected} setSelected={this.setSelected} >
            <Tab isSelected={this.state.selected === 'facebook/react'}>
              <IssueList issues={this.state.react} />
            </Tab>
            <Tab isSelected={this.state.selected === 'vercel/next.js'}>
              <IssueList issues={this.state.next} />

            </Tab>
            <Tab isSelected={this.state.selected === 'torvalds/linux'}>
              <IssueList issues={this.state.linux} />

            </Tab>
            <Tab isSelected={this.state.selected === 'aws/aws-cli'}>
              <IssueList issues={this.state.aws} />
            </Tab>
          </TabNav>
        </div>
      </div>
    );
  }
}

export default App;
