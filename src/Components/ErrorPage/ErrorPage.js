import { Container, Alert } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import BlockSelector from "../BlockSelector/BlockSelector";

function ErrorPage() {
  const error = useRouteError();

  return (
    <Container className="container-pad" fluid>
      <h2 className="container-adjust-pad">ETH Block Viewer</h2>
      <BlockSelector />
      <Container className="container-pad" fluid>
        <Alert style={{ maxWidth: 680 }} variant="danger">
          <Alert.Heading>It looks like something went wrong!</Alert.Heading>
          <p>
            We sure hope that you feel okay. Here is the error so you can figure
            it out:
            <br />
            <br />
            {error.data}
            <br />
            Code {error.status}
          </p>
        </Alert>
      </Container>
    </Container>
  );
}

export default ErrorPage;
