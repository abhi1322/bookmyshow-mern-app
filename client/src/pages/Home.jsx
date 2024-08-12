import { useState } from "react";
import LastBooking from "../components/LastBooking";
import SelectMovie from "../components/SelectMovie";
import SelectSeat from "../components/SelectSeat";
import SelectTiming from "../components/SelectTiming";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const getToast = () => {
    // toast.success("Ticket booked successfully!");
    const request = {
      movie: movie,
      time: time,
      selectedSeats: selectedSeats,
    };

    console.log(request);
  };

  const [movie, setMovie] = useState(null);
  const [time, setTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});

  return (
    <div className="p-16">
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
      mt-28 text-neutral-800 font-bold px-8 py-4 bg-orange-400 rounded-lg active:scale-95 transition-transform ease-out"
        onClick={getToast}
      >
        Book my ticket
      </button>
    </div>
  );
};

export default Home;
