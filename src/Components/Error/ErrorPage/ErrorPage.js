import { useRouteError } from "react-router-dom";
import BlockSelector from "../../Block/BlockSelector/BlockSelector";

function ErrorPage() {
  let error = useRouteError();
  console.error(error);

  return (
	<div>
	  <BlockSelector />
	  <div>Упс!</div>
	</div>
  );
}

export default ErrorPage;
