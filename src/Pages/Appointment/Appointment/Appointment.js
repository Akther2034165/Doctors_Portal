import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
