import React, {useState} from "react";
import DatePicker from "./DatePicker";
import BookingDetails from "./BookingDetails";
export default function Booking(props) {

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <BookingDetails {...props} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    </>
  );
}
