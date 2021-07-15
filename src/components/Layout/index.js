import { Container } from "./styles";
import MainNavigation from "./MainNavigation";

function Layout({ children }, ...props) {
  return (
    <>
      <MainNavigation />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;