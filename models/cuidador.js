import mongoose from "mongoose"

const cuidadoreSchema = new mongoose.Schema({
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
        default:true,
        
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
},

)



const Cuidador = mongoose.model('Cuidador', cuidadoreSchema)

export default Cuidador;