import React from 'react';
import classNames from 'classnames';
import { isBlackKey } from '../../../utils';
import BaseComponent from '../../base';
import styles from './index.css';

export default class Keyboard extends BaseComponent {

  static propTypes = {
    actions: React.PropTypes.object,
    pressedKeys: React.PropTypes.array
  }

  renderKeyboard() {
    let keys = Array(128).fill(0).map((element, index) => {
      let keyTypeStyle = isBlackKey(index)
        ? styles['black-key']
        : styles['white-key'];

      if (this.props.pressedKeys.indexOf(index) > -1) {
        const pressedKeyClass = classNames(keyTypeStyle, styles['pressed-key']);
        return (
          <div key={ index } className={ styles.bar }>
            <div className={ class } />
          </div>
        );
      }

      return (
        <div key={ index } className={ keyTypeStyle } />
      );
    });

    return (
      <div className={ styles.keys }>
        { keys }
      </div>
    );
  }

  render() {
    return (
      <div className={ styles.keyboard }>
        { this.renderKeyboard() }
      </div>
    );
  }
}
