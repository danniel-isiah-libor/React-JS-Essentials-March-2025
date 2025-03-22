function Button(props) {
  return <button onClick={props.clickEvent}>{props.label}</button>;
}

export default Button;
