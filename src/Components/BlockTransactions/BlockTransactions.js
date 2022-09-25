import { Container, Table, Button } from "react-bootstrap";
import "./BlockTransactions.css";

function ClickToCopy(props) {
	const text = props.text;
	
	const copy = async () => {
    await navigator.clipboard.writeText(text);
		alert("Text copied!");
  }

  return (
      <Button onClick={copy}>
        {props.text}
      </Button>
  );
}

function BlockTransactions(props) {

	return (
		<Container fluid>
			<h4>Block Transactions</h4>
			<Table bordered fluid>
				<thead>
					<tr>
						<th>From</th>
						<th>To</th>
						<th>Transaction hash</th>
					</tr>
				</thead>
				<tbody>
				{
					props.blockData.transactions.map(x => {
						return (
							<tr key={x.hash}>
								<td >{x.from}</td>
								<td >{x.to}</td>
								<td><ClickToCopy text={x.hash}/></td>
							</tr>
						);
					})
				}
				</tbody>
			</Table>
		</Container>
	);
}

export default BlockTransactions;