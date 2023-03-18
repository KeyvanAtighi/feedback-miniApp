import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Form from "./components/Form";
import FeedbackList from "./components/FeedbackList";
import Stats from "./components/Stats";
import AboutIconLink from "./components/AboutIconLink";

import FeedbackProvider from "./context/FeedbackContext";
import About from "./pages/About";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <Stats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
