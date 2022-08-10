const { Schema, model} = require("mongoose");

const ResidentSchema = ({
   flat_id:String,
   name:String,
   gender:String,
   age:String,
});

const Resident = model("residents",ResidentSchema);

module.exports = Resident;