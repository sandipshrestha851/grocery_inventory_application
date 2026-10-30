const express = require("express")
const app = express()
const PORT = 3000

//middlewares
app.use(express.static('public'));

app.listen(PORT,(error)=>{
    if(error){
        throw error;
    }else{
        console.log(`App is running on the port ${PORT}`)
    }
})