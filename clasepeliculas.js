module.exports = class Movie {
    title;
    releaseYear;
    actors;
    nationality;
    director;
    writer;
    language;
    plataform;
    isMCU;
    mainCharacterName;
    producer;
    distributor;
    genre;






    constructor(title, releaseYear, nationality, genre) {

        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;

    }
}