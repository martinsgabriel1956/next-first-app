import { Container } from './styles';

export function MeetupDetail() {
  return (
    <Container>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Container>
  );
};


