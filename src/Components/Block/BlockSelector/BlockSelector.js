import { useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function BlockSelector(props) {
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
		navigate(`../${blockNum}`, {relative:"path"});
	}

	return (
		<Container fluid>
			<Form onSubmit={handleOnSubmit}>
				<Form.Group>
					<Form.Label>Enter the required ETH block number to view</Form.Label>
					<Stack gap={3} direction="horizontal">
						<Form.Control 
							type="number"
							className="me-auto"
							placeholder="Block number" 
							onChange={handleOnChange}
							/>
						<Link to={`../${blockNum}`} relative="path"><Button>View</Button></Link>
						<div className="vr"/>
						<Link to="../latest" relative="path"><Button>Latest</Button></Link>
					</Stack>
					<Form.Text>Then submit, or view the latest block instead</Form.Text>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default BlockSelector;