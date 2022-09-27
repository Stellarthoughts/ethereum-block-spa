import { Container,Table } from "react-bootstrap";

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
			<tr xs={1} md={2}>
				<td className="no-left-pad"><strong>{props.name}</strong></td>
				<td>{props.value}</td>
			</tr>
		);
	}

  return (
		<Container fluid className="container-pad">
			<Table responsive size="md">
				<tbody>
					<GenericRow name="Block Height" value={blockHeight}/>
					<tr xs={1} md={2}>
						<td className="no-left-pad"><strong>Block Hash</strong></td>
						<td>{blockHash}</td>
					</tr>
					<GenericRow name="Timestamp" value={timestamp}/>
					<GenericRow name="Transactions" value={transactions}/>
					<GenericRow name="Mined by" value={minedBy}/>
					<GenericRow name="Difficulty" value={difficulty.toLocaleString()}/>
					<GenericRow name="Total Difficulty" value={totalDifficulty.toLocaleString()}/>
					<GenericRow name="Size" value={size}/>
					<GenericRow name="Gas used" value={gasUsed.toLocaleString()}/>
					<GenericRow name="Gas limit" value={gasLimit.toLocaleString()}/>
					<GenericRow name="Extra Data" value={extraData}/>
				</tbody>
			</Table>
		</Container>
  );
}

export default BlockViewer;
