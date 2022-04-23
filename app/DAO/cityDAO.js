import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const citySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: false},
    coordinates: {type: Object, required: true, unique: false},
}, {
    collection: 'City'
});

citySchema.plugin(uniqueValidator);

const CityModel = mongoose.model('City', citySchema);

export default {
    model: CityModel
};
