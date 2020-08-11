import { Component, OnInit } from '@angular/core';
import {Movie} from './movie'
import { empty } from 'rxjs';
import {MovieService} from './movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

movie:Movie;
movies:Movie[];
//movieSer:MovieService;
showToggle:boolean;
  constructor(private movieSer:MovieService) {
    this.movie= new Movie();
  //  this.movieSer= new MovieService();
    this.movies=this.movieSer.getMovies();
    this.showToggle=true;
   }

  ngOnInit(): void {
  }

displayDetails()
{
this.movieSer.addMovie(this.movie);
this.movie=new Movie();
this.showToggle=false;
}

incrLikes()
{
  
  this.movie.likeStatus++;
}
}
