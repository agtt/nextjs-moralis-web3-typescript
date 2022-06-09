import { ButtonProps } from './Button.type';

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className="button">
            <span className="button__text">{props.title}</span>
        </button>
    );
}
export default Button;