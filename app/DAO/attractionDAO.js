import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const attractionSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    coordinates: {type: Object, required: true, unique: false},
    description: {type: String, required: true, unique: false},
    cityId: {type: String, required: true, unique: false},
    image: {type: String, required: true, unique: false},
    type: {type: String, required: true, unique: false},
}, {
    collection: 'Attraction'
});

attractionSchema.plugin(uniqueValidator);

const AttractionModel = mongoose.model('Attraction', attractionSchema);

export default {
    model: AttractionModel
};
