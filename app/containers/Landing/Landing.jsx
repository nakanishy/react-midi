import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import _ from 'lodash';
import * as KeyboardActions from '../../actions/KeyboardActions';
import BaseComponent from '../../components/base';
import MIDIController from '../../components/organisms/MIDIController';

export class Landing extends BaseComponent {

  static propTypes = {
    actions: React.PropTypes.object,
    keyboard: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <MIDIController 
          actions={ this.props.actions }
          keys={ this.props.keyboard.pressedKeys } />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    keyboard: state.keyboard,
    routing: state.routing
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, KeyboardActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
