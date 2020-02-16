import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-photographerbookings',
  templateUrl: './photographerbookings.component.html',
  styleUrls: ['./photographerbookings.component.css']
})
export class PhotographerbookingsComponent implements OnInit 
{

  // Get Booking details for respective Photographer
  bookings = null;
  constructor(private bookService: BookingService) { 
    bookService
    .getPhotographerBookings()
    .subscribe((response) => {
        this.bookings = response.json();
   });
  }

  ngOnInit() {
  }

}
