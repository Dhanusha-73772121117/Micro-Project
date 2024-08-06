import { Injectable } from '@angular/core';
import { Booking } from './model/TableBooking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url: string;
  bookingArr: Booking[];
  booking: Booking;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3004/bookings';
    this.booking = new Booking();
    this.bookingArr = [];
  }

  insertBooking(booking: Booking) {
    this.http.post<Booking>(this.url, booking).subscribe();
    return 'Booking added successfully';
  }

  cancelBooking(tableId: number) {
    this.http.delete<Booking>(this.url + '/' + tableId).subscribe();
    return 'Booking deleted successfully';
  }

  updateBooking(booking: Booking) {
    this.http.put<Booking>(this.url + '/' + booking.id, booking).subscribe();
    return 'Booking updated successfully';
  }

  findBooking(tableId: number) {
    this.http.get<Booking>(this.url + '/' + tableId).subscribe(data => this.booking = data);
    return this.booking;
  }

  findAllBookings() {
    this.http.get<Booking[]>(this.url).subscribe(data => this.bookingArr = data);
    return this.bookingArr;
  }
}
