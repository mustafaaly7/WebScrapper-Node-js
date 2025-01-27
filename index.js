import getResults from "./utils/scrapper.js";

import express from "express";
const app = express()

app.use(express.json())

app.get("/get-data" ,async (req,res)=>{
    try {
        const getData = await getResults()
        res.status(200).json({getData})

    } catch (error) {
        res.send(error.message)
    }

})


app.listen(4444,(req,res)=>{
    console.log("App is running on port" );
    
})

// getResults()