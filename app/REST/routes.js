import citiesEndpoint from './cities.endpoint.js';
import attractionsEndpoint from "./attractions.endpoint.js";

const routes = function (router) {
    citiesEndpoint(router);
    attractionsEndpoint(router);
};

export default routes;
