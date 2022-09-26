import { Button } from "react-bootstrap";

export function ClickToCopy(props) {
  const text = props.text;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied!");
  };

  return (
    <Button style={{ width: "100%" }} onClick={copy}>
			{props.truncate ? `${props.text.substring(0,props.amount)}..` : props.text}
    </Button>
  );
}