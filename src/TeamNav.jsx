import { Link } from "react-router-dom";

export function TeamNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="joe">Team - Joe</Link>
        </li>
        <li>
          <Link to="sally">Team - Sally</Link>
        </li>
      </ul>
    </nav>
  );
}
