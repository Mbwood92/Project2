import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Characters</div>
      </Link>
     <Link to="/episodes">
        <div>Episodes</div>
      </Link>
      <Link to="/location">
        <div>Location</div>
      </Link>
      </div>
  );
};