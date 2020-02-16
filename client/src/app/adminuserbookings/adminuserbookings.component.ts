import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-adminuserbookings',
  templateUrl: './adminuserbookings.component.html',
  styleUrls: ['./adminuserbookings.component.css']
})
export class AdminuserbookingsComponent implements OnInit {

  // Get All Booking details
  bookings = null;
  constructor(private bookService: BookingService) { 
    bookService
    .getAllBookings()
    .subscribe((response) => {
        this.bookings = response.json();
   });
  }

  ngOnInit() {
  }

}
