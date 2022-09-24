import { Form, Stack } from "react-bootstrap";

function BlockViewer(props) {
  const blockData = props.blockData;
  console.log(blockData);

  const toDec = (num) => {
    return parseInt(num, 16);
  };

  const blockHeight = toDec(blockData.number);
  const status = 0;
  const timestamp = new Date(blockData.timestamp * 1000).toLocaleDateString();
  const transactions = blockData.transactions.length;
	const contracts = 0;
	const difficulty = toDec(blockData.difficulty);
	const totalDifficulty = toDec(blockData.totalDifficulty);
  const minedBy = blockData.miner;
	const blockReward = 0;
	const unclesReward = 0;
	const size = toDec(blockData.size);
	const gasLimit = toDec(blockData.gasLimit);
	const gasUsed = toDec(blockData.gasUsed);
	const extraData = blockData.extraData;
	const etherPrice = 0;

  return (
    <Form>
      <Stack gap={2}>
        <Stack direction="horizontal" gap={3}>
          <div>Block Height</div>
          <div>{blockHeight}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Status</div>
          <div>{status}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Timestamp</div>
          <div>{timestamp}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Transactions</div>
          <div>{transactions}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Mined by</div>
          <div>{minedBy}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Block Reward</div>
          <div>{blockReward}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Uncles Reward</div>
          <div>{unclesReward}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Difficulty</div>
          <div>{difficulty.toLocaleString()}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Total Difficulty</div>
          <div>{totalDifficulty.toLocaleString()}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Size</div>
          <div>{size}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Gas used</div>
          <div>{gasUsed.toLocaleString()}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Gas limit</div>
          <div>{gasLimit}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Extra Data</div>
          <div>{extraData}</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Ether Price</div>
          <div>{etherPrice}</div>
        </Stack>
      </Stack>
    </Form>
  );
}

export default BlockViewer;
