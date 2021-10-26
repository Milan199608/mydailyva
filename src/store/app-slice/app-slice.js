import {createSlice} from "@reduxjs/toolkit";

/** Redux slice name for app */
const name = "app";

/*********************************/
/***                           ***/
/***       async actions       ***/
/***                           ***/
/*********************************/

export const actions = {};

/*********************************/
/***                           ***/
/***       reducer slice       ***/
/***                           ***/
/*********************************/

/**
 * Redux initial state object for app
 * @type {object}
 * @property {object} flags miscellaneous flags/info
 * @property {object} isLoading loading flags/info
 * @property {object} isLoaded loaded flags/info
 * @property {object} isError error flags/info
 */
const initialState = {
  flags: {},
  isLoading: {},
  isLoaded: {application: false},
  isError: {}
};

export default createSlice({
  name,
  initialState,
  reducers: { // standard actions - createAction called for us
    // `${name}/loaded` - mark application as fully loaded
    loaded: state => {
      state.isLoaded.application = true;
    }
  },
  extraReducers: { // async actions
    // user actions
    // [userActions.loginFailed.rejected]: state => {
    //   state.isLoaded.application = true;
    // },
    // [userActions.loginStarted.rejected]: state => {
    //   state.isLoaded.application = true;
    // }
  }
});