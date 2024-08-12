import { slotTime } from "../utils/data";
import RadioComponent from "./RadioComponent";

const SelectTiming = ({ setTime, selectedTime }) => {
  const handleRadioClick = (time) => {
    setTime(time);
  };

  return (
    <div>
      <h6 className="font-semibold text-2xl">Select Time :</h6>
      <div className="mt-4 flex flex-wrap gap-4">
        {slotTime.map((time, i) => (
          <RadioComponent
            text={time}
            key={i}
            sendDataToParent={handleRadioClick}
            selected={selectedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectTiming;
