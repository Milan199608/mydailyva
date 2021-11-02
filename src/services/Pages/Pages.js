import axios from "axios";
import * as configSettings from "../../../config";
const {REACT_APP_MYDAILYVA_API_PROTOCOL: API_PROTOCOL, REACT_APP_MYDAILYVA_API_URL: API_URL, REACT_APP_MYDAILYVA_API_PORT: API_PORT} = configSettings;


export const getPages = async =>{
    const REQUEST_ENDPOINT = "exams";
    const request_url = `${API_PROTOCOL}://${API_URL}${API_PORT ? `:${API_PORT}` : ""}/${REQUEST_ENDPOINT}`;


    const config = {
        method: "get",
        url: request_url,
};
pages = await axios(config);
return pages;
}