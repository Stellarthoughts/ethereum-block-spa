import { Container, Table } from "react-bootstrap";
import { ClickToCopy } from "../General";

function BlockTransactions(props) {
  if (props.show) {
    return (
      <Container className="container-pad" style={{ marginLeft: 0 }} fluid>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Transaction Hash</th>
            </tr>
          </thead>
          <tbody>
            {props.blockData.transactions.map((x) => {
              return (
                <tr key={x.hash}>
                  <td>
                    <ClickToCopy truncate amount={25} text={x.from} />
                  </td>
                  <td>
                    <ClickToCopy truncate amount={25} text={x.to} />
                  </td>
                  <td>
                    <ClickToCopy truncate amount={15} text={x.hash} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  } else return <></>;
}

export default BlockTransactions;
