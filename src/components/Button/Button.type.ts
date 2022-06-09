import { ImageProps } from 'next/image';
export type ButtonProps = {
    title: string,
    image: ImageProps,
    children?: JSX.Element,
    onClick: () => void,
};