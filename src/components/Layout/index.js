import { Container } from './styles';

export function Layout({ children }, ...props) {
  return (
    <Container>
     {children}
    </Container>
  );
};

