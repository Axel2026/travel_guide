import business from '../business/business.container.js';

const citiesEndpoint = (router) => {

    router.get('/api/cities', (req, res) => {
        business.getCitiesManager().getCities(res)
    });

};

export default citiesEndpoint;
