import { Link } from "react-router-dom";
import Card from "../shared/Card";
function About() {
  return (
    <Card>
      <h4>About</h4>
      <p>this is a mini aplication for user-feedback</p>
      <p>version 1.0.0</p>
      <Link to="/">back to home</Link>
    </Card>
  );
}

export default About;
