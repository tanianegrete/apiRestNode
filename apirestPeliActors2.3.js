const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Professional = require("./professional");
const Movie = require("./clasepeliculas.js");
const { send } = require("process");
const { kMaxLength } = require("buffer");


app.use(bodyParser.json());


var profesionales = []




let actors = []




var peliculas = [];

var pelicula = new Movie("Mi amado", 2002, "Spain", "Romantica");

pelicula.actors = [];
pelicula.director = Object;
pelicula.writer = "Armando";
pelicula.language = "Spanish";
pelicula.plataform = "Netflix";
pelicula.isMCU = true;
pelicula.mainCharacterName = "Martin";
pelicula.producer = "sfads";
pelicula.distributor = "DHL";
pelicula.guionista = Object;




//obtienen datos de una pelicula

app.get("/peliculas", function(request, response) {
    response.send(pelicula)


});


//crea una pelicula
app.post("/peliculas", function(request, response) {
    var pelicula = new Movie(request.body.title,
        request.body.releaseYear,
        request.body.actors,
        request.body.nationality,
        request.body.director,
        request.body.writer,
        request.body.language,
        request.body.plataform,
        request.body.isMCU,
        request.body.mainCharacterName,
        request.body.producer,
        request.body.distributor,
        request.body.genre)

    peliculas.push(pelicula)
    response.send("Pelicula creada")
});


//actualiza una pelicula

/*app.put("/peliculas", function(request, response) {



    pelicula[request.body.id].title = request.body.title;
    pelicula[request.body.id].releaseYear = request.body.releaseYear;
    pelicula[request.body.id].actors = request.body.actors;
    pelicula[request.body.id].nationality = request.body.nationality;
    pelicula[request.body.id].director = request.body.director;
    pelicula[request.body.id].writer = request.body.writer;
    pelicula[request.body.id].language = request.body.language;
    pelicula[request.body.id].plataform = request.body.plataform;
    pelicula[request.body.id].isMCU = request.body.isMCU;
    pelicula[request.body.id].mainCharacterName = request.body.mainCharacterName;
    pelicula[request.body.id].producer = request.body.producer;
    pelicula[request.body.id].distributor = request.body.distributor;
    pelicula[request.body.id].genre = request.body.genre;

    response.send(peliculas)


});*/

//elimina una pelicula

app.delete("/peliculas", function(request, response) {

    peliculas.splice(request.body.id, 1);
    response.send("Pelicula eliminada");

});



app.get("/peliculas:id", function(request, response) {

    if (pelicula.actors[request.params.id] > actors.length) {
        response.send("Pelicula no encontrada")
    } else {
        response.send(pelicula.actors[request.params.id])
    }
})


app.post("/peliculas/director", function(request, response) {
    var director1 = new Professional(request.body.name,
        request.body.age, request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber)


    pelicula.director = director1;

    response.send("Director creado");


})
app.get("/peliculas/director", function(request, response) {
    response.send(pelicula.director)
})

app.post("/pelicula", function(request, response) {
    var pelicula = new Movie(request.body.title,
        request.body.releaseYear,
        request.body.actors,
        request.body.nationality,
        request.body.director,
        request.body.writer,
        request.body.language,
        request.body.plataform,
        request.body.isMCU,
        request.body.mainCharacterName,
        request.body.producer,
        request.body.distributor,
        request.body.genre)

    peliculas.push(pelicula)
    response.send("Pelicula creada")
});

app.put("/pelicula", function(request, response) {



    peliculas[request.body.id].title = request.body.title;
    peliculas[request.body.id].releaseYear = request.body.releaseYear;
    peliculas[request.body.id].actors = request.body.actors;
    peliculas[request.body.id].nationality = request.body.nationality;
    peliculas[request.body.id].director = request.body.director;
    peliculas[request.body.id].writer = request.body.writer;
    peliculas[request.body.id].language = request.body.language;
    peliculas[request.body.id].plataform = request.body.plataform;
    peliculas[request.body.id].isMCU = request.body.isMCU;
    peliculas[request.body.id].mainCharacterName = request.body.mainCharacterName;
    peliculas[request.body.id].producer = request.body.producer;
    peliculas[request.body.id].distributor = request.body.distributor;
    peliculas[request.body.id].genre = request.body.genre;

    response.send(peliculas)


});

app.delete("/peliculas", function(request, response) {

    peliculas.splice(request.body.id, 1);
    response.send("Pelicula eliminada");

});





//------------------------/

app.get("/peliculas/actor", function(request, response) {
    response.send(pelicula.actors)


});




app.get("/peliculas/actor/:id", function(request, response) {

    if (pelicula.actors[request.params.id] > actors.length) {
        response.send("Pelicula no encontrada")
    } else {
        response.send(pelicula.actors[request.params.id])
    }
})


app.post("/peliculas/director", function(request, response) {
    var director1 = new Professional(request.body.name,
        request.body.age, request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber)


    pelicula.director = director1;

    response.send("Director creado");


})
app.get("/peliculas/director", function(request, response) {
    response.send(pelicula.director)
})

app.post("/peliculas", function(request, response) {
    var pelicula = new Movie(request.body.title,
        request.body.releaseYear,
        request.body.actors,
        request.body.nationality,
        request.body.director,
        request.body.writer,
        request.body.language,
        request.body.plataform,
        request.body.isMCU,
        request.body.mainCharacterName,
        request.body.producer,
        request.body.distributor,
        request.body.genre)

    peliculas.push(pelicula)
    response.send("Pelicula creada")
});

/*
app.put("/pelicula", function(request, response) {

    pelicula[request.body.id].title = request.body.title;
    pelicula[request.body.id].releaseYear = request.body.releaseYear;
    pelicula[request.body.id].actors = request.body.actors;
    pelicula[request.body.id].nationality = request.body.nationality;
    pelicula[request.body.id].director = request.body.director;
    pelicula[request.body.id].writer = request.body.writer;
    pelicula[request.body.id].language = request.body.language;
    pelicula[request.body.id].plataform = request.body.plataform;
    pelicula[request.body.id].isMCU = request.body.isMCU;
    pelicula[request.body.id].mainCharacterName = request.body.mainCharacterName;
    pelicula[request.body.id].producer = request.body.producer;
    pelicula[request.body.id].distributor = request.body.distributor;
    pelicula[request.body.id].genre = request.body.genre;

    response.send(pelicula);


});*/

app.delete("/peliculas", function(request, response) {

    peliculas.splice(request.body.id, 1);
    response.send("Pelicula eliminada");

});




app.get("/peliculas/guionista", function(request, response) {
    response.send(pelicula.guionista)
});



app.post("/peliculas/actors", function(request, response) {
    var actor = new Professional(request.body.name,
        request.body.age, request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber)


    pelicula.actors.push(actor);

    response.send("Profesional de actors creado");


});


app.post("/peliculas/guionista", function(request, response) {
    var guionista1 = new Professional(request.body.name,
        request.body.age, request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber)

    pelicula.guionista = guionista1;

    response.send("Guionista creado");

});



app.put("/peliculas/actors", function(request, response) {
    actors[request.body.id].name = request.body.name;
    actors[request.body.id].age = request.body.age;
    actors[request.body.id].isRetired = request.body.isRetired;
    actors[request.body.id].nationality = request.body.nationality;
    actors[request.body.id].oscarsNumber = request.body.oscarsNumber;

    response.send(actors)
});


app.put("/peliculas/director", function(request, response) {
    director.name = request.body.name;
    director.age = request.body.age;
    director.isRetired = request.body.isRetired;
    director.nationality = request.body.nationality;
    director.oscarsNumber = request.body.oscarsNumber;
    response.send(director)
});


app.put("/peliculas/guionista", function(request, response) {
    guionista.name = request.body.name;
    guionista.age = request.body.age;
    guionista.isRetired = request.body.isRetired;
    guionista.nationality = request.body.nationality;
    guionista.oscarsNumber = request.body.oscarsNumber;
    response.send(guionista)
});

app.delete("/peliculas/actors", function(request, response) {

    actors.splice(request.body.id, 1);
    response.send("Actor eliminado");

});

app.delete("/peliculas/director", function(request, response) {

    pelicula.splice(director);
    response.send("Director eliminado");

});

app.delete("/peliculas/guionista", function(request, response) {

    pelicula.splice(guionista);
    response.send("Guionista eliminado");

});


app.listen(2500);