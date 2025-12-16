const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({

     userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",       
    
    },
    fullName:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 character']
        },
        lastname:{
            type:String,
            minlength:[3,'last name must be at least 3 characters']
        }
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    minlength:[5,'email must be at least character'],
    },
    password:{
        type:String,
        required:true,
       
    },
    socketId:{
        type:String,
    }
    
},
{timestamps:true}
)


const UserModel=mongoose.model('User',UserSchema,'User')

module.exports=UserModel;