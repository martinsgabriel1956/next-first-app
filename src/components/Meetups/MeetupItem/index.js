import { Container, Image, Content, Actions } from './styles';
import { Card } from '../../UI/Card';

export function MeetupItem(props) {
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
          <button>Show Details</button>
        </Actions>
      </Card>
    </Container>
  );
};