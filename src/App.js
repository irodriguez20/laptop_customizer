import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import Form from './main_form/form'
import './App.css';
import Totals from './main_summary/Totals';



class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  formatUSCurrency = (amount) => {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return USCurrencyFormat.format(amount);  
  }
  
  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form 
          features={this.props.features}
          selectedFeatures={this.state.selected}
          updateFeature={this.updateFeature}
          formatUSCurrency={this.formatUSCurrency}
          />
          <Totals 
            selectedFeatures={this.state.selected}
            formatUSCurrency={this.formatUSCurrency}
          />
        </main>
      </div>
    );
  }
}

export default App;
