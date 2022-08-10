const express = require("express");
const connection = require("./server/db");
const UserRoute = require("./routes/UserRoute");
const FlatRoute = require("./routes/FlatRoute");
const ResidentRoute = require("./routes/ResidentRoute");
const cors = require("cors");

//App creation
const App = express();

//middlewares
App.use(
    cors({
      origin: ["http://localhost:3000","http://localhost:3001"],
    })
  );
App.use(express.urlencoded({extended:true}));
App.use(express.json());

//Manager Route (login)
App.use("/user",UserRoute);
App.use("/flats",FlatRoute);
App.use("/resident",ResidentRoute);

//checking if backend is working
App.get("/",(req,res)=>{
    res.send("placement_evaluation backend working");
})

//starting server and connecting to db
const port = process.env.PORT || 7080;
App.listen(port, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("Backend is working at http://localhost:7080");
  });