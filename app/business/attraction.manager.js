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

    function addAttraction(attractionDetails, response){
        const newAttractionModel = new attractionDAO.model({
            name: attractionDetails.body.name,
            coordinates: attractionDetails.body.coordinates,
            description: attractionDetails.body.description,
            cityId: attractionDetails.body.cityId,
            image: attractionDetails.body.image,
            type: attractionDetails.body.type,
            address: attractionDetails.body.address,
            phone_number: attractionDetails.body.phone_number,
            website: attractionDetails.body.website,
            clicks: 0,
        });

        newAttractionModel.save((error) => {
            if (error) {
                console.log(error)
                response.status(500).json({msg: 'Sorry, internal server errors'});
                return;
            }
            console.log("Successfully added a post!")
            return response.json({
                msg: 'Your data has been saved!'
            });
        });
    }

    return {
        getAttractionsByCityId: getAttractionsByCityId,
        addClickToAttraction: addClickToAttraction,
        addAttraction: addAttraction
    };
}

export default {
    attractionManager: attractionManager
};
