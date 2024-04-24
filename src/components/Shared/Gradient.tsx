import "./gradient.scss";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export const Gradient = ({ children }: Props) => {
  return <span className="gradient">{children}</span>;
};
