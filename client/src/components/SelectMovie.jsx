import { movieList } from "../utils/data";
import RadioComponent from "./RadioComponent";

const SelectMovie = ({ setMovie, selectedMovie }) => {
  const handleRadioClick = (movie) => {
    setMovie(movie);
  };

  return (
    <div>
      <h6 className="font-semibold text-2xl">Select a Movie:</h6>
      <div className="mt-3 flex flex-wrap gap-2">
        {movieList.map((movie, i) => (
          <RadioComponent
            text={movie}
            key={i}
            sendDataToParent={handleRadioClick}
            selected={selectedMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectMovie;
