import PropTypes from "prop-types";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function Stats() {
  const { feedback } = useContext(FeedbackContext);

  const averageRating =
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>
        average ratings:{" "}
        {isNaN(averageRating)
          ? 0
          : averageRating.toFixed(1).replace(/[.,]0$/, "")}
      </h4>
    </div>
  );
}

Stats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default Stats;
