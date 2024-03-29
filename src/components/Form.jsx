import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


export default function CreateBookingForm({ fetchBookings }) {
  const [bookingFormData, setBookingFormData] = useState({
    fullname: '',
    email: '',
    phone_num: '',
    description: '',
    booking_date: '',
    booking_time: ''
  });


  const handleInputChange = (e) => {
    setBookingFormData({ ...bookingFormData, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://a8c86673-0caf-425c-846d-1e9d616ac739-00-2ngxxji9ce5fv.kirk.replit.dev/bookings', bookingFormData);
      fetchBookings();
      setBookingFormData({
        fullname: '',
        email: '',
        phone_num: '',
        description: '',
        booking_date: '',
        booking_time: ''
      });


    } catch (error) {
      console.error('Error submitting booking:', error)
    }
  };

  return (
    <div className="mt-4">
      <h2 className="m-4">Booking Form</h2>
      <Form className="m-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullname">
          <Form.Label>Fullname</Form.Label>
          <Form.Control type="text" placeholder="Enter your fullname" name="fullname" value={bookingFormData.fullname} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={bookingFormData.email} onChange={handleInputChange} required />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="number" placeholder="Enter your phone number" name="phone_num" value={bookingFormData.phone_num} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="List down for any special requests" name="description" value={bookingFormData.description} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date (YYYY-MM-DD)</Form.Label>
          <Form.Control type="text" placeholder="Enter the date for your booking" name="booking_date" value={bookingFormData.booking_date} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Time (HH:MM:SS) in 24 hour system</Form.Label>
          <Form.Control type="text" placeholder="Enter the time for your booking" name="booking_time" value={bookingFormData.booking_time} onChange={handleInputChange} />
        </Form.Group>
        <Button type="submit" className="btn btn-primary" onClick={handleSubmit} >
          Submit Booking
        </Button>
      </Form>
    </div>
  );
}
