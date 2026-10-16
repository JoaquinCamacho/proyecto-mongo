import mongoose from "mongoose"

const cuidadorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        minlength: 2,
        trim: true
    } ,
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true  
    },
    zona:{
        type:String,
        required:true,
        trim:true
    },
    especialidad:{
        type:String,
        required: true,
        enum:['mandados', 'cuidados','compania']
    },
    disponible:{
        type:Boolean,
        default:true
        
    },
    edad:{
        type: Number,
        required:true,
        min:18,
        max:100
    },
    tarifaPorHora:{
        type:Number,
        required:true,
        min:1
    },
    
},
{
        
        timestamps:true,
        toJSON:{
            transform(doc,ret){
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
},

)


const Cuidador = mongoose.model('Cuidador', cuidadorSchema)

export default Cuidador;