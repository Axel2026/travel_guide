import business from '../business/business.container.js';

const attractionsEndpoint = (router) => {

    router.get('/api/cities/attractions/city/:cityId', (req, res) => {
        business.getAttractionManager().getAttractionsByCityId(req.params.cityId, res)
    });

    router.put('/api/cities/attractions/addclick/:attractionId', (req, res) => {
        business.getAttractionManager().addClickToAttraction(req.params.attractionId, res)
    });

    router.post('/api/attractions', (req, res) => {
        console.log(req.body)
        business.getAttractionManager().addAttraction(req, res)
    });
};

export default attractionsEndpoint;
