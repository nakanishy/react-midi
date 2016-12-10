import ACTION_TYPES from '../constants/ActionTypes';

/**
 * When a key is down
 *
 * @param {number} note
 */
export function keyDown(note) {
  return {
    type: ACTION_TYPES.KEY_DOWN,
    note
  }
}

/**
 * When a key is up
 *
 * @param {number} note
 */
export function keyUp(note) {
  return {
    type: ACTION_TYPES.KEY_UP,
    note
  }
}
