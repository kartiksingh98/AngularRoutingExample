import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:Movie[];
  constructor(private movieSer:MovieService) 
  {
    this.cart=[];
    this.cart=this.movieSer.getmovietocart();
  }

  ngOnInit(): void {
  }

}
