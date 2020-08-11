import {Movie} from './movie';

export class MovieService{
    private movies:Movie[];
    cart:Movie[];
    constructor()
    {   this.cart=[];
        this.movies=[];
        var movie1, movie2;
        movie1=new Movie();
        movie1.name="The A team";
        movie1.duration=120.3;
        movie1.pic="assets/images/car.jpg";
        movie1.count=3;
        movie1.likeStatus=1;
        movie2=new Movie();
        movie2.name="Expandables";
        movie2.duration=110.2;
        movie2.pic="assets/images/extramile.png";
        movie2.count=4;
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
getmovietocart()
{
    return this.cart;
}
addcart(f:Movie)
{
    var present: Boolean=false;
    for(let index=0; index<this.movies.length; index++)
    {
        if(this.movies[index].name==f.name)
        {
            this.movies[index].count--;
            for(let i=0; i<this.cart.length;i++)
            {
                if(f.name==this.cart[i].name)
                {
                    this.cart[i].count++;
                    present=true;
                    break;
                }
            }
            if(present==false)
            {
            var f1:Movie;
            f1=new Movie();
            f1.name=f.name;
            f1.duration=f.duration;
            f1.likeStatus=f.likeStatus;
            f1.pic=f.pic
            f1.count=1;
            this.cart.push(f1);
            }   
            break;
        }
    }
}
}
