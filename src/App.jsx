import CreateBookingForm from "./components/Form"
import BookingList from "./components/BookingTable"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ControlledCarousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const fetchBookings = async () => {
  };
  return (
    <>
      <Header />
      <ControlledCarousel />
      <Router>
        <Routes>
          <Route
            path="/bookings"
            element={<BookingList fetchBookings={fetchBookings} />}
          />
          <Route
            path="/"
            element={<CreateBookingForm fetchBookings={fetchBookings} />}
          />
        </Routes>
      </Router >
      <Footer />
    </>
  )
}

export default App
