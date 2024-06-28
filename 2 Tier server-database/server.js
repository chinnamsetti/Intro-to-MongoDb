const mongoose=require("mongoose");

let connectToMDB=async()=>{

   try{
    await mongoose.connect("mongodb+srv://akhilchinnamsetti:akhilch1405@batch2403.derqdcc.mongodb.net/Batch2403?retryWrites=true&w=majority&appName=batch2403");
    console.log(`Successfully connected to MDB`);
   }catch(err){
                console.log( `Unable to connect to MDB`);
   }
   };
connectToMDB();

