import React, {Component} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouting from "./App-Routing";
// import {applicationConstants} from '../../constants';
import initializeStore from "../../store";

// const {MAIN_CONTENT_ID} = applicationConstants;

export class AppEntry extends Component {

  /**
   * component constructor
   * @param {object} props props passed in to component
   */
  constructor(props) {
    super(props);

    /**
     * internal state
     * @type {object}
     * @property {string|object} error stack trace for unhandled, uncaught error
     */
    this.state = {error: undefined};

  }

  static getDerivedStateFromError(error) {
    // will persist until site refresh for now
    return {error};
  }

  /**
   * renders component
   * @return {ReactElement} HTML markup
   */
  render() {
    const {error} = this.state;

    return (
      <Provider store={initializeStore()}>
        <BrowserRouter>
          {/*<div id='global-header' class='global-header'>*/}
          {/*  /!* eslint-disable-next-line react/jsx-no-undef *!/*/}
          {/*  <span>GLOBAL HEADER</span>*/}
          {/*</div>*/}
          <div id="app" class="app">
            <AppRouting errorThrown={error} />
          </div>
          {/*<div id='global-footer' class='global-footer'>*/}
          {/*  <span>GLOBAL FOOTER</span>*/}
          {/*  /!* eslint-disable-next-line react/jsx-no-undef *!/*/}
          {/*</div>*/}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppEntry;
