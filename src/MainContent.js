import Modal from "./Modal";
import GetImages from "./GetImages";
import { Container } from "semantic-ui-react";

export default function MainContent() {
  return (
    <Container>
      <Modal />
      <GetImages />
    </Container>
  );
}
