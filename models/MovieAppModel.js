import mongoose, { Mongoose, now } from "mongoose";

const MovieSchema = new mongoose.Schema({
    user_name :{
        type : String,
        required : true
    },
    film_name:{
        type : Number,
        required : true
    },
    film_date:{
        type : Date,
        required : true
    },
    film_price:{
        type : Number,
        required : true
    },
    chair_number: {
        type : Number,
        required : true
    },
    status :{
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

export default mongoose.model('MovieApp', MovieSchema)