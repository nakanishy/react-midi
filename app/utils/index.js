import { NOTES, BLACK_KEYS } from '../constants';

/**
 * 
 *
 * @param {number} key
 */
export function isBlackKey(key) {
  let note = key % 12;
  return BLACK_KEYS.indexOf(note) > -1;
}


/**
 * Get a note name from a key number
 *
 * @param {number} key
 */
export function getNoteName(key) {
  return NOTES[key % 12];
}

/**
 * Get a chord name from keys
 *
 * @param {number[]} kyes
 */
export function getChordName(kyes) {

}
