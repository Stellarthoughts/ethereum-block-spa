import { Form, Stack } from "react-bootstrap";

function BlockViewer(props) {
    const blockData = props.blockData;
    console.log(blockData);

    const toDec = (num) => {return parseInt(num,16);}
    const blockHeight = toDec(blockData.number);
    const status = 0;
    const timestamp = 0;
    const transactions = 0;
    const minedBy = blockData.miner;

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
                    <div></div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Uncles Reward</div>
                    <div></div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Difficulty</div>
                    <div>{toDec(blockData.difficulty)}</div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Total Difficulty</div>
                    <div>{toDec(blockData.totalDifficulty)}</div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Size</div>
                    <div></div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Gas used</div>
                    <div>{toDec(blockData.gasUsed)}</div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Gas limit</div>
                    <div></div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Extra Data</div>
                    <div></div>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <div>Ether Price</div>
                    <div></div>
                </Stack>
            </Stack>
        </Form>
    );
}

export default BlockViewer;