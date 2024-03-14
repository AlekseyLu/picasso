import { FC } from "react";
import { Link } from "react-router-dom";

interface ICustomLink {
  link: string;
  text: string;
}
export const CustomLink: FC<ICustomLink> = ({ link, text }) => {
  return <Link to={link}>{text}</Link>;
};
