import {Movie} from './movie';

export class MovieService{
    private movies:Movie[];
    constructor()
    { 
        this.movies=[];
        var movie1, movie2;
        movie1=new Movie();
        movie1.name="The A team";
        movie1.duration=120.3;
        movie1.pic="assets/images/car.jpg";
        movie1.likeStatus=2;
        
        movie2=new Movie();
        movie2.name="Expandables";
        movie2.duration=110.2;
        movie2.pic="assets/images/extramile.png";
        movie2.likeStatus=4;
        this.movies.push(movie1);
        this.movies.push(movie2);
    }
getMovies():Movie[]
{
    return this.movies;
}
addMovie(m:Movie)
{
    this.movies.push(m);
}
}
