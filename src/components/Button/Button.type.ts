export type ButtonProps = {
    title: string,
    image?: string,
    children?: JSX.Element,
    onClick: () => void,
    className?: string,
};