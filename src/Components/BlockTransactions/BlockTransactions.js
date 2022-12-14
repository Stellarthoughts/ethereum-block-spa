import { useState } from "react";
import { Container, Pagination, Table } from "react-bootstrap";
import { ClickToCopy } from "../General";

function TransactionTable(props) {
	return (
		<Table bordered responsive>
			<thead>
				<tr>
					<th>From</th>
					<th>To</th>
					<th>Transaction Hash</th>
				</tr>
			</thead>
			<tbody>
				{props.items.map((x) => {
					return (
						<tr key={x.hash}>
							<td>
								<ClickToCopy truncate amount={25} text={x.from} action={props.action}/>
							</td>
							<td>
								<ClickToCopy truncate amount={25} text={x.to} action={props.action}/>
							</td>
							<td>
								<ClickToCopy truncate amount={15} text={x.hash} action={props.action}/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	)
}

function BlockTransactions(props) {
	const [active, setActive] = useState(1);
	const pagenationItems = [];

	const items = props.blockData.transactions;
	const perPage = 12;
	const numPages = Math.ceil(items.length / perPage);

	for(let number = 1; number <= numPages; number++)
	{
		pagenationItems.push(
			<Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
      	{number}
    	</Pagination.Item>,
		);
	}

  if (props.show) {
    return (
      <Container className="container-pad" fluid>
				<Pagination className="flex-wrap">
					{pagenationItems}
				</Pagination>
				<TransactionTable items={items.slice((active - 1) * perPage, active * perPage)} action={props.showModal}/>
      </Container>
    );
  } else return <></>;
}

export default BlockTransactions;
