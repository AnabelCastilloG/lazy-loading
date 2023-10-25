import './Links.css';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <ul>
      <li>
        <Link to={'/users'}>Users</Link>
      </li>
      <li>
        <Link to={'/counter'}>Counter</Link>
      </li>
      <li>
        <Link to={'/car'}>car</Link>
      </li>
      <li>
        <Link to={'/NoMatch'}>NoMatch</Link>
      </li>
    </ul>
  );
};
