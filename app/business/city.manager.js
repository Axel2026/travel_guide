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
                response.json(data);
            })
            .catch((error) => {
                console.log('error:  ', error);
            });
    }

    return {
        getCities: getCities,
        getOneCity: getOneCity
    };
}

export default {
    cityManager: cityManager
};
