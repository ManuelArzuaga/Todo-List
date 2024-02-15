const express = require("express")
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/Test2")
.then(()=>{
  console.log("conectado")
})

app.use(express.static("public")) //usa el archivo que esta en public

app.use(express.json())
app.use(bodyparser.json())

app.listen(port,()=>{
  console.log("server running")
})

let esquema = mongoose.Schema({ //se establece el esquema
  title:String,
  description:String

  
})
const model = mongoose.model("Test2",esquema); //se usa para crear, eliminar,actualizar y leer


app.post("/",(req,res)=>{
  res.status = 200
  res.send({status:"recieved"})
  const newesquema = new model({//creo un nuevo esquema
    title:req.body.title,//se le asigna el req.body.titulo al nombre del esquema
    // description:req.body.description
  })

  newesquema.save() //se guarda el esquema en la db
    .then(()=>{
     console.log("guardado")
    })
    .catch((err) =>{
    console.log(err)
    })
})