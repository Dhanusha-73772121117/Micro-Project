import { Component } from '@angular/core';
import { Booking } from './model/TableBooking';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Table Booking System';
  booking: Booking;
  result: string;
  bookingArr: Booking[];
  flag: boolean;

  constructor(private service: BookingService) {
    this.booking = new Booking();
    this.result = '';
    this.bookingArr = [];
    this.flag = false;
  }

  insertBooking(data: any) {
    this.booking.id = data.tableId;
    this.booking.customerName = data.customerName;
    this.booking.cuisinePreferred = data.cuisinePreferred;
    this.booking.bookingTime = data.bookingTime;

    this.result = this.service.insertBooking(this.booking);
  }

  cancelBooking(data: any) {
    this.result = this.service.cancelBooking(data.tableId);
  }

  updateBooking(data: any) {
    this.booking.id = data.tableId;
    this.booking.customerName = data.customerName;
    this.booking.cuisinePreferred = data.cuisinePreferred;
    this.booking.bookingTime = data.bookingTime;

    this.result = this.service.updateBooking(this.booking);
  }

  findBooking(data: any) {
    this.booking = this.service.findBooking(data.tableId);
    this.result = `${this.booking.id} ${this.booking.customerName} ${this.booking.cuisinePreferred} ${this.booking.bookingTime}`;
  }

  findAllBookings() {
    this.bookingArr = this.service.findAllBookings();
    this.flag = true;
  }
}
