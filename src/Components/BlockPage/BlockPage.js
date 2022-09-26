import { Button, Container, Stack } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import BlockSelector from "../BlockSelector/BlockSelector";
import BlockViewer from "../BlockViewer/BlockViewer";
import BlockTransactions from "../BlockTransactions/BlockTransactions";
import { useState } from "react";

function BlockPage() {
  const loaderData = useLoaderData();
  const [show, setShow] = useState(false);

  return (
    <Container className="container-pad" fluid>
      <h2 className="container-adjust-pad">ETH Block Viewer</h2>
      <BlockSelector />
      <h4 className="container-adjust-pad">
        Block #{parseInt(loaderData.result.number, 16)}
      </h4>
      <BlockViewer blockData={loaderData.result} />
      <Stack direction="horizontal" gap={3}>
        <h4 className="container-adjust-pad">Block Transactions</h4>
        <Button onClick={() => setShow(!show)}>{!show ? "Show" : "Hide"}</Button>
      </Stack>
      <BlockTransactions blockData={loaderData.result} show={show} />
    </Container>
  );
}

export default BlockPage;
