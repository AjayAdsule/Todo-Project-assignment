import mongoose,{Schema} from "mongoose";

const TodoSchema= new Schema({
    task:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model("todo",TodoSchema)