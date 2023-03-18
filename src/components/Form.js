import { useState, useContext, useEffect } from "react";
import Rating from "./Rating";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { FeedbackContext } from "../context/FeedbackContext";

function Form() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, updateFeedback, edit } = useContext(FeedbackContext);

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
    // putting value instead of text, for sync assignment; useState is asunc and change text variable on next fn call
    if (value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("please enter at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  useEffect(() => {
    if (edit) {
      setText(edit.item.text);
      setRating(edit.item.rating);
      setBtnDisabled(false);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    if (rating && text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };

      if (edit.edit === true) {
        updateFeedback(newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setBtnDisabled(true);
    } else {
      if (!rating) {
        setMessage("Please choose a rating");
      } else {
        setMessage("Please enter at least 10 characters");
      }
    }
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>put some feedback for us please..</h4>
        <Rating setRating={setRating} rating={rating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Enter your review"
            value={text}
          />
          <Button type="submit" isDisabled={BtnDisabled}>
            <h4>send</h4>
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default Form;
