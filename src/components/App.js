import React, { lazy, Suspense } from 'react'
import Header from './Header';
import Footer from './Footer';
import TabNav from './TabNav';
import Tab from './Tab';
import './App.css';
import Loader from './Loader';
const IssueList = lazy(() => import('./IssueList'));


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { aws: [], react: [], selected: 'facebook/react' };
  }
  componentDidMount() {
    fetch('./issues.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ aws: data.aws, react: data.react, ansible: data.ansible, next: data.next })
        const { aws, react, ansible, next } = data
        const allIss = [aws, react, ansible, next]
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
          <TabNav tabs={['all repos', 'facebook/react', 'vercel/next.js', 'ansible/ansible', 'aws/aws-cli']} selected={this.state.selected} setSelected={this.setSelected} >
            <Tab isSelected={this.state.selected === 'facebook/react'}>
              <Suspense fallback={<Loader />}>
                <IssueList issues={this.state.react} />
              </Suspense>
            </Tab>
            <Tab isSelected={this.state.selected === 'all repos'}>
              <Suspense fallback={<Loader />}>
                <IssueList issues={this.state.all} />
              </Suspense>
            </Tab>
            <Tab isSelected={this.state.selected === 'vercel/next.js'}>
              <Suspense fallback={<Loader />}>
                <IssueList issues={this.state.next} />
              </Suspense>
            </Tab>
            <Tab isSelected={this.state.selected === 'ansible/ansible'}>
              <Suspense fallback={<Loader />}>
                <IssueList issues={this.state.ansible} />
              </Suspense>
            </Tab>
            <Tab isSelected={this.state.selected === 'aws/aws-cli'}>
              <Suspense fallback={<Loader />}>
                <IssueList issues={this.state.aws} />
              </Suspense>
            </Tab>
          </TabNav>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
