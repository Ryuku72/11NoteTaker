const notesDB = require("../database/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesDB)
    });

    app.post("/api/notes", function(req, res) {
        
        if(notesDB.length === 0) {
          req.body.id = 0;
        }else{
          req.body.id = notesDB[notesDB.length - 1].id + 1;
        }
        res.json(notesDB)
        notesDB.push(req.body)

        fs.writeFile((path.join(__dirname, "../database/db.json")), JSON.stringify(notesDB), function (err) {
            if (err) return console.log(err);
        })
    })

    app.delete("/api/notes/:id", function (req, res) {
        const noteBody = req.params.id;
        //console.log(noteBody)
        for (let i = 0; i < notesDB.length; i++) {
            if (noteBody == notesDB[i].id) {
                notesDB.splice(i, 1);
            }
        }
        res.json(notesDB)
    });
}