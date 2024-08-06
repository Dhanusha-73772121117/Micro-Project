
export class Booking {
  id: number;
  customerName: string;
  cuisinePreferred: string;
  bookingTime: string;

  constructor() {
    this.id = 0;
    this.customerName = '';
    this.cuisinePreferred = '';
    this.bookingTime = '';
  }
}
