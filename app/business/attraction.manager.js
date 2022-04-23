import attractionDAO from "../DAO/attractionDAO.js";


function attractionManager() {

    function getAttractionsByCityId(cityId, response){
        attractionDAO.model.find({cityId: cityId})
            .then((data) => {
                response.json(data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    function getAttractionsByCityType(type, response){
        attractionDAO.model.find({type: type})
            .then((data) => {
                response.json(data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    return {
        getAttractionsByCityId: getAttractionsByCityId,
        getAttractionsByCityType: getAttractionsByCityType
    };
}

export default {
    attractionManager: attractionManager
};
