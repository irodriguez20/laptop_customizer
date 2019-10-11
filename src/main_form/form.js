import React from 'react';
import './form.css'
import Fieldset from '../main_Feature/fieldset';

class Form extends React.Component {

    render() {
  
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return (
          <Fieldset
            feature={feature}
            options={this.props.features[feature]}
            key={featureHash}
            selectedFeatures={this.props.selectedFeatures}
            updateFeature={this.props.updateFeature}
            formatUSCurrency={this.props.formatUSCurrency}
          />
        )
      });
  
      return(
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
      )
    }
  }
  
  Form.defaultProps = {
    features: []
  };
  
  export default Form;
  