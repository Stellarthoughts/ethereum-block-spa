import { Container } from 'react-bootstrap';
import { useLoaderData, useRouteError } from 'react-router-dom';
import BlockSelector from '../BlockSelector/BlockSelector';
import BlockViewer from '../BlockViewer/BlockViewer';
import BlockTransactions from '../../BlockTransactions/BlockTransactions';

function ErrorElement(props) {
	const error = props.error;

	return (
		<Container fluid>

		</Container>
	);
}

function BlockPage(props) {
	const loaderData = useLoaderData();
	const errorData = useRouteError();

	return (
		<Container fluid>
			<h2>ETH Block Viewer</h2>
			<BlockSelector/>
			{!props.error ? 
				<div>
					<BlockViewer blockData={loaderData.result}/>
					<BlockTransactions blockData={loaderData.result}/>
				</div>
				 :
				<ErrorElement error={errorData}/>
			}
		</Container>
	);
}

export default BlockPage;
