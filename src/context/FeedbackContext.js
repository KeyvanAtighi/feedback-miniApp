import { createContext } from "react";
import { useState, useEffect } from "react";
// import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [edit, setEdit] = useState({
    item: {},
    edit: false,
  });

  // fetch data
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }, []);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    {
      setEdit({
        item,
        edit: true,
      });
    }
  };

  const updateFeedback = (newFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === edit.item.id
          ? { rating: newFeedback.rating, text: newFeedback.text }
          : item
      )
    );
    setEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        edit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
