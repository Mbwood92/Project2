import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/characters">
        <div>Characters</div>
      </Link>
      <Link to="/episodes">
        <div>Episodes</div>
      </Link>
      </div>
  );
};