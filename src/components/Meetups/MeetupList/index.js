import { Container } from './styles';

export function MeetupList() {
  return (
    <Container>
      {props.meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </Container>
  );
};