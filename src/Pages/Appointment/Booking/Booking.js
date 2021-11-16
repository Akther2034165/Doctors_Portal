import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const HandleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption">Price ${price}</Typography> <br />
          <Typography variant="caption">{space} SPACES AVAILABE</Typography>
          <br />
          <Button onClick={HandleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        date={date}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Booking;
