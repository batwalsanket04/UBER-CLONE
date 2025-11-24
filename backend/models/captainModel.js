const mongoose=require('mongoose')


const captainSchema=new mongoose.Schema({
    fullname:{
        fisrtname:{
            type:String,
            required:true,
            minlength:[3,'firstname must be at least 3 characters long'],
        },
        lastname:{
           type:String, 
           minlength:[3,"Lastname must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
     
     
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be at least 3 character long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"Plate must be at least 3 character long"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity must be at least 1']
        },
        vehicalType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
        type:Number
        }
    }
})
const captainModel=mongoose.model('captain',captainSchema)

module.exports=captainModel;
