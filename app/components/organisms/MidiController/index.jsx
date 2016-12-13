import React from 'react';
import { EVENT_TYPES } from '../../../constants';
import { getNoteName } from '../../../utils';
import BaseComponent from '../../base';
import Keyboard from '../../molecules/Keyboard';

export default class MIDIController extends BaseComponent {

  static propTypes = {
    actions: React.PropTypes.object,
    pressedKeys: React.PropTypes.array
  }

  state = {
    isDevicesNotFound: false,
    midi: {
      inputs: []
    }
  }

  componentDidMount() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({ sysex: false })
        .then(this.onMIDISuccess, this.onMIDIFailure);
    }
  }

  onMIDISuccess(midiAccess) {
    console.log('MIDI Access Success', midiAccess);

    let inputsArray = this.state.midi.inputs;
    let inputIterator = midiAccess.inputs.values();
    for (let o = inputIterator.next(); !o.done; o = inputIterator.next()) {
      inputsArray.push(o.value);
    }

    this.setState({
      midi: {
        inputs: inputsArray
      }
    });

    if (inputsArray.length < 1) {
      this.setState({
        isDevicesNotFound: true
      });
      return;
    }

    let self = this;

    inputsArray[0].onmidimessage = (event) => {
      switch (event.data[0]) {
        case 144:
          self.props.actions.keyDown(event.data[1]);
          break;
        case 128:
          self.props.actions.keyUp(event.data[1]);
          break;
      }
    };
  }

  onMIDIFailure(err) {
    console.error(err);
  }

  render() {
    let notFoundMessage = this.state.isDevicesNotFound
      ? <div>No devices found.</div> : null;

    let pressedKyes = this.props.pressedKeys.map((element, index) => {
      return (
        <span key={index}>{ `${getNoteName(element)}(${element}) ` }</span>
      );
    });

    return (
      <div>
        <Keyboard
          pressedKeys={ this.props.pressedKeys }/>
        { pressedKyes }
        { notFoundMessage }
      </div>
    );
  }
}
