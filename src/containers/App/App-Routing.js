import PropTypes from "prop-types";
import React  from "react";
//import {useSelector, useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {Pages} from "../";


//import {useLocalStorage} from "../../hooks";
//import {PageLoadingSpinner} from "../../components";
import {applicationConstants} from "../../constants";
const {ROUTES} = applicationConstants;
import {Nav,TopFooter,BottomFooter,BlogDetails} from '../../components';


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

/*    useEffect(() => {
     if (currentUserToken) {
       dispatch(getInfo(currentUserToken));
     }
   }, [currentUserToken]); */
   const list = [
    {
        id: 1,
        image: "https://www.ibuildsite.com/upload/article/16281592780f09698c0b.jpg",
        text: "Key Reasons To Choose CodeIgniter Framework For Your Next Web Development Project",
        author: "Administrator",
        date: "September 21 , 2021",   
    },
    {
        id: 2,
        image: "https://www.ibuildsite.com/upload/article/1627714738ce6d72142e.jpg",
        text: "Reasons to Use Shopify for eCommerce Alcoburner",
        author: "Subhasish K",
        date: "September 20 , 2021",
    },
    {
        id: 3,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects",
        author: "Subhasish K",
        date: "September 21 , 2021",
       
    },
    {
        id: 4,
        image: "https://www.ibuildsite.com/upload/article/1626156407dbec194094.jpg",
        text: "Reasons to Use Shopify for eCommerce Alcoburner?",
        author: "Subhasish  K",
        date: "18th August",
      
    },
    {
        id: 5,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
       
    },
    {
        id: 6,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
      
    },
    {
        id: 7,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    },
    {
        id: 8,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 9,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 10,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 11,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 12,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 13,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 14,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What Are URL Redirects And Why Use URL Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
    ,
    {
        id: 15,
        image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
        text: "What-Are-URL-Redirects-And-Why-Use-URL-Redirects?",
        author: "Administrator",
        date: "25th August",
        href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
    }
  
];

  

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
        <Route exact path={`/${ROUTES.BLOG}`}>
        <Nav/>
        <Pages.Blog list={list}/>
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
        <Route exact path="/blog/:text">
        <Nav/>
       <BlogDetails list={list}/>
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
