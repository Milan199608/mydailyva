import PropTypes from "prop-types";
import React  from "react";
//import {useSelector, useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {Pages} from "../";

//import {useLocalStorage} from "../../hooks";
//import {PageLoadingSpinner} from "../../components";
import {applicationConstants} from "../../constants";
const {ROUTES} = applicationConstants;
import {Nav,TopFooter,BottomFooter, Banner} from '../../components';


//import {appActions} from "../../store";
//const {getInfo} = userActions;

/**
 * manages routing
 * @param {object} props object containing all component props
 * @param {string|object} props.errorThrown stack trace for unhandled, uncaught error
 * @return {ReactElement} HTML markup
 */
export const AppRouting = ({errorThrown}) => {
  //const [currentUserToken] = useLocalStorage("uexams-client-requestor-token");

  //const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentUserToken) {
  //     dispatch(getInfo(currentUserToken));
  //   }
  // }, [currentUserToken]);

  

  return (
    <>

      <Switch>       
        <Route  exact path ="/"  >
        <Nav />
       <Pages.Home/>
        <TopFooter />
        <BottomFooter />
        </Route>
        <Route exact path={`/${ROUTES.ABOUTUS}`}>
        <Nav/>
      
        <Pages.About/>
        <BottomFooter />
        </Route>
        <Route exact path={`/${ROUTES.CONTACTUS}`}>
        <Nav/>
        <Pages.Contact/>
       
        <BottomFooter />
        </Route>
        <Route exact path={`/${ROUTES.PRIVACY}`}>
          <Nav/>
          <Pages.Privacy/>
       
        <BottomFooter />
        </Route>
        <Route exact path={`/${ROUTES.TERM}`}>
        <Nav/>
        <Pages.Term/>
       
        <BottomFooter />
        </Route>
      </Switch>

    </>
  );
};

AppRouting.propTypes = {
  errorThrown: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default AppRouting;
