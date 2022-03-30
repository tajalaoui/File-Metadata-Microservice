var express = require("express")
var cors = require("cors")
require("dotenv").config()
const multer = require("multer")

var app = express()

app.use(cors())
app.use("/public", express.static(process.cwd() + "/public"))

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file

  res.json({
    name: originalname,
    type: mimetype,
    size: size,
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + process.env.PORT)
})
