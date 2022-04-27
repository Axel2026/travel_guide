import business from '../business/business.container.js';

const citiesEndpoint = (router) => {

    router.get('/api/cities', (req, res) => {
        business.getCitiesManager().getCities(res)
    });

    router.get('/api/cities/:cityId', (req, res) => {
        business.getCitiesManager().getOneCity(req.params.cityId, res)
    });

};

export default citiesEndpoint;
