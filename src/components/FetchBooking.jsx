import { useEffect, useState } from 'react';
import axios from 'axios';
import BookingList from './BookingTable';
import CreateBookingForm from './Form';



function YourComponent() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://a8c86673-0caf-425c-846d-1e9d616ac739-00-2ngxxji9ce5fv.kirk.replit.dev/bookings/');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <CreateBookingForm fetchBookings={fetchBookings} />
      { }
      <BookingList bookings={bookings} />
    </div>
  );
}

export default YourComponent;