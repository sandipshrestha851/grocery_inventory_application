const express = require("express")
const path = require("path")
const app = express()
const productRouter = require("./routes/productRoutes")

const PORT = 3000

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//middlewares
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/products",productRouter)


app.listen(PORT,(error)=>{
    if(error){
        throw error;
    }else{
        console.log(`App is running on the port ${PORT}`)
    }
})