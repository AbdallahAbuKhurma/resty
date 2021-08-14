import React from 'react';
import { BeatLoader } from 'react-spinners';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/Headers';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      loading: true,
      history: false,
    };
  }

  callApi = (requestParams) => {
    // mock output
    const data = {
      headers: {
        'content-type': 'string application/json',
      },
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({
      data,
      requestParams,
      loading: false,
      history: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <h3>History</h3>
        {this.state.history &&
          <div className = 'history'>
            <button>{this.state.requestParams.method}</button>
            <h4>URL: {this.state.requestParams.url}</h4>
          </div>
        }
        <Form handleApiCall={this.callApi} />
        {this.state.loading ? <BeatLoader loading/> : <Results data={this.state.data} />}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
