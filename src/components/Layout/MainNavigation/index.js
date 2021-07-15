import { Link } from 'next/link';

import { Container, Logo } from './styles';

function MainNavigation() {
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

export default MainNavigation;