import mongoose,{Schema} from "mongoose";

const UsersSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please enter your Name"]
    },
    email:{
        type : String ,
        unique : true,
        required:true
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("users",UsersSchema)

