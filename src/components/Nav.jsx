import { Link } from "react-router-dom";
//nav bar at top of screen for each link 
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