import { Button, Container, Modal, Stack } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import BlockSelector from "../BlockSelector/BlockSelector";
import BlockViewer from "../BlockViewer/BlockViewer";
import BlockTransactions from "../BlockTransactions/BlockTransactions";
import { useState, useRef } from "react";

function BlockPage() {
  const loaderData = useLoaderData();
	const refShow = useRef(false);
  const [showTransactions, setShowTransactions] = useState(refShow.current);

	const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

	const handleOnClick = () => {
		refShow.current = !showTransactions;
		setShowTransactions(!showTransactions);
	}

  return (
    <Container className="container-pad">
      <h1 className="container-adjust-pad">ETH Block Viewer</h1>
      <BlockSelector />
      <h4 className="container-adjust-pad">
        Block #{parseInt(loaderData.result.number, 16)}
      </h4>
      <BlockViewer blockData={loaderData.result} />
      <Stack direction="horizontal" gap={3}>
        <h4 className="container-adjust-pad">Block Transactions</h4>
        <Button onClick={handleOnClick}>{!showTransactions ? "Show" : "Hide"}</Button>
      </Stack>
			<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Copy successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hash copied!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <BlockTransactions blockData={loaderData.result} show={showTransactions} showModal={handleShowModal}/>
    </Container>
  );
}

export default BlockPage;
