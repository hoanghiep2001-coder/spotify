import { Link } from "react-router-dom";

function Button({ to, href, primary, onClick, children, ...passProps }) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  return <Component {...props}>{children}</Component>;
}

export default Button;
