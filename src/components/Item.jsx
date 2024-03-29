import { useState } from 'react';
import axios from 'axios';
import UpdateForm from './FormUpdate';

export default function BookingItem({ booking, fetchBookings }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = async () => {
    const { booking_id } = booking;
    try {
      await axios.delete(`https://a8c86673-0caf-425c-846d-1e9d616ac739-00-2ngxxji9ce5fv.kirk.replit.dev/bookings/${booking_id}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isUpdating ? (
        <UpdateForm booking={booking} fetchBookings={fetchBookings} setIsUpdating={setIsUpdating} />
      ) : (
        <div>
          <strong>Booking ID:</strong> {booking.booking_id}, <strong>Fullname:</strong> {booking.fullname}<strong> Date:</strong> {booking.booking_date}, <strong> Time:</strong> {booking.booking_time}
        </div>
      )}
      <div>
        <button className="btn btn-warning mx-4" onClick={handleUpdate}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

