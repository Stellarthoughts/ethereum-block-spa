import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlockSelector() {
    const [blockNum, changeBlockNum] = useState(0);

    return (
        <Form>
            <Form.Group>
                <Form.Label>Enter the required ETH block number to view</Form.Label>
                <Form.Control placeholder="Block number" onChange={(e) => changeBlockNum(e.target.value)}/>
                <Form.Text>Then submit, or view the latest block instead</Form.Text>
            </Form.Group>
            <Form.Group>
                <Link to={`../${blockNum}`} relative="path"><Button>View this block</Button></Link>
                <Link to="../latest" relative="path"><Button>Latest</Button></Link>
            </Form.Group>
        </Form>
    );
}

export default BlockSelector;