import { Container } from './styles';
import { MeetupItem } from '../MeetupItem';

export function MeetupList(props) {
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