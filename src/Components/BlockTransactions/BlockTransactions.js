import { Container, Table, Button } from "react-bootstrap";

function ClickToCopy(props) {
	const text = props.text;
	
	const copy = async () => {
    await navigator.clipboard.writeText(text);
		alert("Text copied!");
  }

  return (
      <Button style={{width:"100%"}} onClick={copy}>
        {props.text}
      </Button>
  );
}

function BlockTransactions(props) {

	if(props.show){
		return (
			<Container className="container-pad" fluid>
				<Table bordered responsive>
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
									<td><ClickToCopy text={x.from}/></td>
									<td><ClickToCopy text={x.to}/></td>
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
	else return (<></>);
	
}

export default BlockTransactions;