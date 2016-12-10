import { NOTES } from '../constants';

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
