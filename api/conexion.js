import mongoose from "mongoose";

export default async function conectarDB(){
    
    await mongoose.connect(process.env.MONGODB_URI)
    
    console.log('Conexión exitosa con MongoDB');
        
}

