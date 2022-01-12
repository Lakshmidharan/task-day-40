const fs = require("fs");
const express = require("express");
const app = express();
const cors=require("cors")

let date= new Date();
let time=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`
let filename=`${time}.txt`
let timestamp=date.getTime().toString();


let option={
    origin:"*"
}
app.use(cors(option))

    app.get("/", function (req, res) {
        let date= new Date();
        let time=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`
        let filename=`${time}.txt`
        let timestamp=date.getTime().toString();
        res.json(
            fs.writeFile(`./folder/${filename}`,timestamp ,function (err, data) {
                if (err) throw err;
                console.log("File Created");

            })

        )
    });

    app.get("/", function (req, res) {
        res.json(
            fs.readdir("./folder" ,function (err,data) {
                if (err) throw err;
                console.log(data);

            })

        )
    });
app.listen(3000)