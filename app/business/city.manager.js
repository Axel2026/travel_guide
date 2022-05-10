import cityDAO from "../DAO/cityDAO.js";


function cityManager() {

    function getCities(response) {
        cityDAO.model.find({})
            .then((data) => {
                response.json(data);
            })
            .catch((error) => {
                console.log('error:  ', error);
            });
    }

    function getOneCity(cityId, response) {
        cityDAO.model.find({"_id": cityId})
            .then((data) => {
                console.log("Test4")
                response.json(data);
            })
            .catch((error) => {
                console.log('error:  ', error);
            });
    }

    function addCity(cityDetails, response){
        const newCityModel = new cityDAO.model({
            name: cityDetails.body.name,
            image: cityDetails.body.image,
            coordinates: cityDetails.body.coordinates,
        });

        newCityModel.save((error) => {
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
        getCities: getCities,
        getOneCity: getOneCity,
        addCity: addCity
    };
}

export default {
    cityManager: cityManager
};
