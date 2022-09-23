import { Button, Form } from "react-bootstrap";

function BlockSelector() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Enter the required ETH block number to view</Form.Label>
                <Form.Control placeholder="Block number"/>
                <Form.Text>Then submit, or view the latest block instead</Form.Text>
            </Form.Group>
            <Form.Group>
                <Button>View this block</Button>
                <Button>Latest</Button>
            </Form.Group>
        </Form>
    );
}

export default BlockSelector;