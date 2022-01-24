const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const Movie = require("./clasepeliculas.js");
const { send } = require("process");
const { kMaxLength } = require("buffer");
const { strict } = require("assert");


app.use(bodyParser.json());


var peliculas = [];



app.get("/pelicula", function(request, response) {
    if (peliculas[request.body.id] > peliculas.length) {
        response.send("Pelicula no encontrada")
    } else {
        response.send(peliculas[request.body.id])
    }
});


app.get("/peliculas", function(request, response) {
    response.send(peliculas);
});


app.post("/pelicula", function(request, response) {
    var pelicula = new Movie(request.body.title,
        request.body.releaseYear,
        request.body.nationality,
        request.body.genre)


    peliculas.push(pelicula);

    response.send("Pelicula añadida");


});

app.put("/pelicula", function(request, response) {
    peliculas[request.body.id].title = request.body.title;
    peliculas[request.body.id].releaseYear = request.body.releaseYear;
    peliculas[request.body.id].nationality = request.body.nationality;
    peliculas[request.body.id].genre = request.body.genre;

    response.send(peliculas)
});

app.delete("/pelicula", function(request, response) {

    peliculas.splice(request.body.id, 1);
    response.send("Actor eliminado");

});


app.listen(1000);