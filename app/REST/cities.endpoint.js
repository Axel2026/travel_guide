import business from '../business/business.container.js';

const citiesEndpoint = (router) => {

    router.get('/api/cities', (req, res) => {
        business.getCitiesManager().getCities(res)
    });

    router.get('/api/cities/attractions/city/:cityId', (req, res) => {
        business.getAttractionManager().getAttractionsByCityId(req.params.cityId, res)
    });

    router.get('/api/cities/attractions/type/:type', (req, res) => {
        business.getAttractionManager().getAttractionsByCityType(req.params.type, res)
    });
};

export default citiesEndpoint;
