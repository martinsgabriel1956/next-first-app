import { Container } from "./styles";
import { MainNavigation } from "./MainNavigation";

export function Layout({ children }, ...props) {
  return (
    <>
      <MainNavigation />
      <Container>{children}</Container>
    </>
  );
}
