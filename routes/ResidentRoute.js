const Resident = require("../models/ResidentSchema");
const express = require("express");
const Router = require("express");

const ResidentRoute = Router();

ResidentRoute.get("/all", async(req,res)=>{
    const flats = await Flat.find();
    res.send(flats);
});

ResidentRoute.get("/singleflatresident/:id", async(req,res)=>{
    const singleflat = await Resident.find({"flat_id":req.params.id});
    res.send(singleflat);
})

module.exports=ResidentRoute;