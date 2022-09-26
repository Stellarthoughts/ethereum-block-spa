import { Container, Row, Col } from "react-bootstrap";

function BlockViewer(props) {
  const blockData = props.blockData;

  const toDec = (num) => {
    return parseInt(num, 16);
  };

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
	
	function GenericRow(props)
	{
		return (
			<Row xs={1} md={2}>
				<Col><strong>{props.name}</strong></Col>
				<Col>{props.value}</Col>
			</Row>
		);
	}

  return (
    <Container className="container-pad" style={{marginLeft:0, marginRight: 0}}>
			<GenericRow name="Block Height" value={blockHeight}/>
			<Row xs={1} md={2}>
				<Col><strong>Block Hash</strong></Col>
				<Col>{blockHash}</Col>
			</Row>
			<GenericRow name="Timestamp" value={timestamp}/>
			<GenericRow name="Transactions" value={transactions}/>
			<GenericRow name="Mined by" value={minedBy}/>
			<GenericRow name="Difficulty" value={difficulty.toLocaleString()}/>
			<GenericRow name="Total Difficulty" value={totalDifficulty.toLocaleString()}/>
			<GenericRow name="Size" value={size}/>
			<GenericRow name="Gas used" value={gasUsed.toLocaleString()}/>
			<GenericRow name="Gas limit" value={gasLimit.toLocaleString()}/>
			<GenericRow name="Extra Data" value={extraData}/>
    </Container>
  );
}

export default BlockViewer;
