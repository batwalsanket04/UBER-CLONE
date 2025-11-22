
const mongoose=require('mongoose')

const connection=async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("DB connected  Successfully..")
        console.log(mongoose.connection.readyState)
        
    } catch (error) {
        console.log("Error:",error);
        console.log("DB Connected to failed..")
    }
}
connection();

module.exports=connection;