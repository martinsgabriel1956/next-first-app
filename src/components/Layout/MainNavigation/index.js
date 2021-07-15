import { Container } from './styles';
import { Link } from 'next/link';

export function MainNavigation() {
  return (
    <Container>
      <Logo>React Meetups</Logo>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};