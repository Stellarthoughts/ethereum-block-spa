import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function BlockSelector() {
	const navigate = useNavigate();
	const [blockNum, changeBlockNum] = useState(0);

	const handleOnChange = e => {
		let val = e.target.value;
		if(val === '')
			val = 0;
		changeBlockNum(val);
	}

	const handleOnSubmit = e => {
		e.preventDefault();
		console.log("here");
		navigate(`../${blockNum}`);
	}

	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Group>
				<Form.Label>Enter the required ETH block number to view</Form.Label>
				<Form.Control 
					placeholder="Block number" 
					onChange={handleOnChange}
					/>
				<Form.Text>Then submit, or view the latest block instead</Form.Text>
			</Form.Group>
			<Link to={`../${blockNum}`} relative="path"><Button>View this block</Button></Link>
			<Link to="../latest" relative="path"><Button>Latest</Button></Link>
		</Form>
	);
}

export default BlockSelector;