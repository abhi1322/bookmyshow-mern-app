const LastBooking = () => {
  return (
    <div className="border text-xl  p-8 rounded-lg shadow-lg">
      <h6 className="font-bold">Last Booking Details:</h6>
      <p className="mt-4">
        <b>Movie:</b> Movie Name
      </p>
      <p className="mt-2">
        <b>Time :</b> 00:00:PM{" "}
      </p>
      <div>
        <p className="mt-4 text-xl font-bold">Seats :</p>
        <div className="mt-4 [&>span]:text-xl flex flex-wrap text-nowrap gap-2 [&>span]:bg-cyan-100 [&>span]:p-2 [&>span]:rounded-lg">
          <span className="text-[10px]">Seat 1 : 0</span>
          <span className="text-[10px]">Seat 2 : 0</span>
          <span className="text-[10px]">Seat : 0</span>
          <span className="text-[10px]">Seat 4 : 0</span>
        </div>
      </div>
    </div>
  );
};

export default LastBooking;
