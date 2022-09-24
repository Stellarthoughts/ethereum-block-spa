import { useLoaderData } from 'react-router-dom';
import BlockSelector from '../BlockSelector/BlockSelector';
import BlockViewer from '../BlockViewer/BlockViewer';

function BlockPage() {
	const loaderData = useLoaderData();

	return (
		<div>
			<BlockSelector/>
			<BlockViewer blockData={loaderData.result}/>
		</div>
	);
}

export default BlockPage;
