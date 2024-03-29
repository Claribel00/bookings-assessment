import { useState } from 'react';
import axios from 'axios';
import { Button, Form } from "react-bootstrap";

export default function UpdateForm({ booking, fetchBookings, setIsUpdating }) {
  const [formData, setFormData] = useState({
    booking_id: booking.id,
    fullname: booking.fullname,
    email: booking.email,
    phone_num: booking.phone_num,
    description: booking.description,
    booking_date: booking.booking_date,
    booking_time: booking.booking_time
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { booking_id } = booking;
    try {
      await axios.put(`https://a8c86673-0caf-425c-846d-1e9d616ac739-00-2ngxxji9ce5fv.kirk.replit.dev/bookings/${booking_id}`, formData);
      fetchBookings();
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  }

  return (
    <div className="mt-4">
      <h2>Update Booking</h2>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            placeholder="Enter fullname"
            required
          />
        </div>
        <div className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="form-group">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            name="phone_num"
            value={formData.phone_num}
            onChange={handleInputChange}
            placeholder="Enter Contact Number"
            required
          />
        </div>
        <div className="form-group">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            name="booking_date"
            value={formData.booking_date}
            onChange={handleInputChange}
            placeholder="Enter Time"
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="text"
            className="form-control"
            name="booking_time"
            value={formData.booking_time}
            onChange={handleInputChange}
            placeholder="Enter Time"
            required
          />
        </div>
        <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Confirm Booking
        </Button>
      </Form>
    </div>
  );
}


