const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://givan:givan@foodmern.rpks96n.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = () => {
  // NO LONGER ACCEPTS CALLBACK FUNCTION..
  //   mongoose.connect(mongoUrl,{ useNewUrlParser:true },(err,result)=>{
  //     if(err) console.log("---",err);
  //     else {
  //         console.log("connected");
  //     }
  //   });
  mongoose.connect(mongoUrl, { useNewUrlParser: true });
  console.log("connected!!");
};

module.exports = mongoDB;
