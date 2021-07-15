import { Container } from "./styles";
import { MainNavigation } from "./MainNavigation";

export function Layout({ children }, ...props) {
  return (
    <Container>
      <MainNavigation />
      {children}
    </Container>
  );
}
