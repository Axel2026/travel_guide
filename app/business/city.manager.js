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

    return {
        getCities: getCities
    };
}

export default {
    cityManager: cityManager
};
