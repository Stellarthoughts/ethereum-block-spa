import { Container, Row, Col } from "react-bootstrap";

function BlockViewer(props) {
  const blockData = props.blockData;
  console.log(blockData);

  const toDec = (num) => {
    return parseInt(num, 16);
  };

	const firstColXS = 2;

  const blockHeight = toDec(blockData.number);
	const blockHash = blockData.hash;
  const timestamp = new Date(blockData.timestamp * 1000).toLocaleDateString();
  const transactions = blockData.transactions.length;
	const difficulty = toDec(blockData.difficulty);
	const totalDifficulty = toDec(blockData.totalDifficulty);
  const minedBy = blockData.miner;
	const size = toDec(blockData.size);
	const gasLimit = toDec(blockData.gasLimit);
	const gasUsed = toDec(blockData.gasUsed);
	const extraData = blockData.extraData;

  return (
    <Container className="container-pad" fluid>
			<Row>
				<Col xs={firstColXS}>Block Height</Col>
				<Col>{blockHeight}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Block Hash</Col>
				<Col>{blockHash}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Timestamp</Col>
				<Col>{timestamp}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Transactions</Col>
				<Col>{transactions}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Mined by</Col>
				<Col>{minedBy}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Difficulty</Col>
				<Col>{difficulty.toLocaleString()}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Total Difficulty</Col>
				<Col>{totalDifficulty.toLocaleString()}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Size</Col>
				<Col>{size} bytes</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Gas used</Col>
				<Col>{gasUsed.toLocaleString()}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Gas limit</Col>
				<Col>{gasLimit.toLocaleString()}</Col>
			</Row>
			<Row>
				<Col xs={firstColXS}>Extra Data</Col>
				<Col>{extraData}</Col>
			</Row>
    </Container>
  );
}

export default BlockViewer;
