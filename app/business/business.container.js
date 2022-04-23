import cityManager from './city.manager.js';
import attractionManager from './attraction.manager.js';

function getCitiesManager(request) {
    return function () {
        return cityManager.cityManager(request, this);
    };
}

function getAttractionManager(request) {
    return function () {
        return attractionManager.attractionManager(request, this);
    };
}

export default {
    getCitiesManager: getCitiesManager(),
    getAttractionManager: getAttractionManager(),
};
