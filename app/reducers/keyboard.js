import ACTION_TYPES from '../constants/ActionTypes';

const initialState = {
  pressedKeys: []
};

export default function keyboardReducer(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.KEY_DOWN:
      return Object.assign({}, state, {
        pressedKeys: [
          ...state.pressedKeys,
          action.note
        ]
      });
    case ACTION_TYPES.KEY_UP:
      return Object.assign({}, state, {
        pressedKeys: state.pressedKeys.filter(note => note !== action.note)
      });
    default:
      return state;
  };
}
