import classNames from "classnames/bind";
import Button from "~/Components/Button";
import styles from "./WidgetItem.module.scss";
const cb = classNames.bind(styles);

function WidgetItem({ title, icon, link }) {
  return (
    <Button className={cb("widget-link")} href={link}>
      <div className={cb("widget-wrapper")}>
        <h3 className={cb("widget-title")}>{title}</h3>
      </div>
      <div className={cb("widget-wrapper")}>{icon}</div>
    </Button>
  );
}

export default WidgetItem;
