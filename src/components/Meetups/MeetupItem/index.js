import { useRouter } from 'next/router';

import { Container, Image, Content, Actions } from './styles';
import Card from '../../UI/Card';

function MeetupItem(props) {
  const router = useRouter();

  function handleShowDetails() {
    router.push('/' + props.id);
  }

  return (
    <Container>
      <Card>
      <Image>
          <img src={props.image} alt={props.title} />
        </Image>
        <Content>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </Content>
        <Actions>
          <button onClick={handleShowDetails}>Show Details</button>
        </Actions>
      </Card>
    </Container>
  );
};

export default MeetupItem;