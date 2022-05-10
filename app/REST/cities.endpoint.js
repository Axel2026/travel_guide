import business from '../business/business.container.js';

const citiesEndpoint = (router) => {

    router.get('/api/cities', (req, res) => {
        business.getCitiesManager().getCities(res)
    });

    router.post('/api/cities', (req, res) => {
        console.log(req.body)
        business.getCitiesManager().addCity(req, res)
    });

    router.get('/api/cities/:cityId', (req, res) => {
        console.log(req.params.cityId)
        business.getCitiesManager().getOneCity(req.params.cityId, res)
    });

};

export default citiesEndpoint;
