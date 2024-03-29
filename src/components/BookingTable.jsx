import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingItem from './Item';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {


      const response = await axios.get(`https://a8c86673-0caf-425c-846d-1e9d616ac739-00-2ngxxji9ce5fv.kirk.replit.dev/bookings`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {

    fetchBookings('1');
  }, []);

  return (
    <div className="mt-4">
      <h2 className='text-center'>Booking List</h2>
      <ul className="list-group">
        {bookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} fetchBookings={() => fetchBookings('1')} />
        ))}
      </ul>
    </div>
  );
}