import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { seats } from "../utils/data";

const LastBooking = () => {
  const [data, setData] = useState({});

  const getLastBooking = async () => {
    await axios
      .get("http://localhost:8080/booking")
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    getLastBooking();
  }, [data]);

  return (
    <div className="border text-xl  p-8 rounded-lg shadow-lg">
      <h6 className="font-bold">Last Booking Details:</h6>
      <p className="mt-4">
        <b>Movie:</b> {data.movie}
      </p>
      <p className="mt-2">
        <b>Time :</b> {data.slot}
      </p>
      <div>
        <p className="mt-4 text-xl font-bold">Seats :</p>
        <div className="mt-4 [&>span]:text-xl flex flex-wrap text-nowrap gap-2 [&>span]:bg-orange-200 [&>span]:p-2 [&>span]:rounded-lg">
          <span>
            <b>A1 : </b>
            {data.seats?.A1}
          </span>
          <span>
            <b>A2 : </b>
            {data.seats?.A2}
          </span>
          <span>
            <b>A3 : </b>
            {data.seats?.A3}
          </span>
          <span>
            <b>A4 : </b>
            {data.seats?.A4}
          </span>
          <span>
            <b>D1 : </b>
            {data.seats?.D1}
          </span>
          <span>
            <b>D2 : </b>
            {data.seats?.D2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LastBooking;
