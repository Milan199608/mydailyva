/*
This configuration currently only supports local development and the serverless secrets provide params based on envs
 */

const {hostname} = window.location;
let REACT_APP_MYDAILYVA_API_PORT = undefined;

const REACT_APP_MYDAILYVA_API_PROTOCOL = process.env.REACT_APP_MYDAILYVA_API_PROTOCOL ? process.env.REACT_APP_MYDAILYVA_API_PROTOCOL : "https";
const REACT_APP_MYDAILYVA_API_URL = process.env.REACT_APP_MYDAILYVA_API_URL ? process.env.REACT_APP_MYDAILYVA_API_URL:'www.mydailyva.com';

// try {
//   REACT_APP_REMOTEI_API_PORT = process?.env?.REACT_APP_REMOTEI_API_PORT ? process?.env?.REACT_APP_REMOTEI_API_PORT : hostname === "www.mydailyva.com" ? 3001 : undefined;
// } catch (e) {
//   // console.log("REACT_APP_REMOTEI_API_PORT not defined!");
// }

export {
  REACT_APP_MYDAILYVA_API_PROTOCOL,
  REACT_APP_MYDAILYVA_API_URL,
  REACT_APP_MYDAILYVA_API_PORT
};
