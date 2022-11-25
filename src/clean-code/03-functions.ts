(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllActorsFromMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    // Crear una película
    function createMovie(movie: Movie ) {
        console.log(movie);
    }

    interface Actor {
        fullName: string;
        birthdate: Date;
    }
    function checkFullName( fullName: string ) {
        return fullName === 'fernando';
    }
    // Crea un nuevo actor
    function createActor(actor: Actor): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(actor.fullName)) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;
    }


})();