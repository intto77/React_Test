import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cs = classNames.bind(styles); //미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  return (
    <div className={cs("wrapper", "inverted")}>
      안녕하세요 저는 <span className="something">CSS module</span>
    </div>
  );
};

export default CSSModule;
