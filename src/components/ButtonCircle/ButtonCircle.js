import "./ButtonCircle.css";
import {ReactComponent as SvgPlus } from "../../assets/plus.svg";

export const ButtonCircle = ({ onclick }) => {
    return <span className="button-circle" onclick={ onclick }>
        <SvgPlus className="button-circle__icon" />
    </span>
}