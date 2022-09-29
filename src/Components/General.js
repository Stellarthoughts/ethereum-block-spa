import { Button } from "react-bootstrap";

export function ClickToCopy(props) {
  const text = props.text;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    props.action();
  };

  return (
    <Button style={{ width: "100%" }} onClick={copy}>
			{props.truncate ? 
        (props.text.length > props.amount ? 
          `${props.text.substring(0,props.amount)}..` 
          : props.text) 
        : props.text}
    </Button>
  );
}