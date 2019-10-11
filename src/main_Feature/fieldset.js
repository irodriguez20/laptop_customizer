import React, { Component } from 'react';
import './feature';
import slugify from 'slugify';
import Feature from './feature';

class Fieldset extends Component {
    render() {
  
      const options = this.props.options.map((item, idx) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Feature
            id={itemHash}
            key={itemHash}
            feature={this.props.feature}
            item={item}
            selectedFeatures={this.props.selectedFeatures}
            updateFeature={this.props.updateFeature}
            formatUSCurrency={this.props.formatUSCurrency}
          />
        )
      });
  
      return (
        <fieldset className="feature" >
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
    }
  }
  
  
  export default Fieldset;