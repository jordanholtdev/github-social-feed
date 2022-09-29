import React from 'react'
import Header from './Header';
import Footer from './Footer';
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
        const { aws, react, linux, next } = data
        const allIss = [aws, react, linux, next]
        const flat = allIss.flat()
        const sorted_by_date = flat.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB - dateA
        });
        this.setState({ all: sorted_by_date })
      })
      .catch(e => console.log(e))
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <TabNav tabs={['all repos', 'facebook/react', 'vercel/next.js', 'torvalds/linux', 'aws/aws-cli']} selected={this.state.selected} setSelected={this.setSelected} >
            <Tab isSelected={this.state.selected === 'facebook/react'}>
              <IssueList issues={this.state.react} />
            </Tab>
            <Tab isSelected={this.state.selected === 'all repos'}>
              <IssueList issues={this.state.all} />
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
        <Footer />
      </div>
    );
  }
}

export default App;
