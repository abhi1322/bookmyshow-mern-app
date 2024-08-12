import { useState } from "react";
import { seats } from "../utils/data";

const SelectSeat = ({ setSelectedSeats }) => {
  const [seatsData, setSeatsData] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });

  const handleSeats = (e) => {
    const { name, value } = e.target;
    setSeatsData((prev) => ({ ...prev, [name]: parseInt(value) }));
    setSelectedSeats(() => seatsData);
  };

  return (
    <div>
      <h6 className="font-semibold text-2xl mt-8">Select Seat :</h6>
      <div className="mt-6 flex flex-wrap gap-4">
        {seats.map((seat, i) => (
          <div
            key={i}
            className="flex bg-gray-50 font-semibold rounded-md border gap-2 p-2 active:ring-1 "
          >
            {/* Add seat selection options */}
            <label htmlFor="seat" className="text-bold">
              {seat}
            </label>
            <input
              type="number"
              name={seat}
              id={seat}
              placeholder="0"
              min={0}
              max={10}
              className="w-10 border text-center rounded"
              onChange={handleSeats}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSeat;
