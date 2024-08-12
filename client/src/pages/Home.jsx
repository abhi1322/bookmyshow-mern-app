import { useState } from "react";
import LastBooking from "../components/LastBooking";
import SelectMovie from "../components/SelectMovie";
import SelectSeat from "../components/SelectSeat";
import SelectTiming from "../components/SelectTiming";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [time, setTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});

  const sendData = async () => {
    const request = {
      movie: movie,
      slot: time,
      seats: selectedSeats,
    };

    if (
      request.movie === "" ||
      request.slot === "" ||
      request.movie === null ||
      request.slot === null
    )
      return toast.error("Please select a movie or time");

    console.log(request);

    await axios
      .post("http://localhost:8080/booking", request)
      .then(() => {
        toast.success("Ticket booked");
      })
      .catch((err) => {
        toast.error("Failed to book ticket");
        console.error(err);
      });

    setMovie(null);
    setTime(null);
    setSelectedSeats({});
  };

  return (
    <div className="p-4 sm:p-16 border-2 rounded-2xl flex flex-col">
      <Toaster reverseOrder={true} position="top-center" />
      <div className="flex flex-wrap gap-8 justify-between mb-7">
        <SelectMovie setMovie={setMovie} selectedMovie={movie} />
        <LastBooking />
      </div>
      <SelectTiming setTime={setTime} selectedTime={time} />
      <SelectSeat
        setSelectedSeats={setSelectedSeats}
        selectedSeats={selectedSeats}
      />

      <button
        className="
      mt-28  text-neutral-800 font-bold px-8 py-4 bg-orange-400 rounded-lg active:scale-95 transition-transform ease-out"
        onClick={sendData}
      >
        Book my ticket
      </button>
    </div>
  );
};

export default Home;
