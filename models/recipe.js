var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    steps: {
        type: []
    },
    ingredients: {
        type: []
    },
    image: {
        imgUri: String,
        files: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        body: {
            type: String,
            default: ''
        },
        user: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],

});

mongoose.model('Recipe', RecipeSchema);
