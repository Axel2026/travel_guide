import attractionDAO from "../DAO/attractionDAO.js";


function attractionManager() {

    function getAttractionsByCityId(cityId, response) {
        attractionDAO.model.find({cityId: cityId})
            .then((data) => {
                response.json(data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    function addClickToAttraction(attractionId, response) {
        attractionDAO.model.updateOne(
            {"_id": attractionId},
            {$inc: {"clicks": 1}})
            .then((data) => {
                response.json("Clicks updated: " + data.acknowledged);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    return {
        getAttractionsByCityId: getAttractionsByCityId,
        addClickToAttraction: addClickToAttraction
    };
}

export default {
    attractionManager: attractionManager
};
