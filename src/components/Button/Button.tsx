import Image from 'next/image';
import { ButtonProps } from './Button.type';

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={props.className}>
            <span>{props.title}</span>
        </button>
    );
}
export default Button;