import { useContext, useEffect } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function Rating({ setRating, rating }) {
  const { edit } = useContext(FeedbackContext);
  const handleChange = (e) => {
    setRating(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index + 1}>
          <input
            type="radio"
            id={index + 1}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={rating === index + 1}
          />
          <label htmlFor={index + 1}>{index + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default Rating;
