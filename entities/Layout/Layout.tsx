import { ReactNode } from "react";
import { Header } from "../Header/Header";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => (
  <main>
    <div className="container">
      <Header />
      {children}
    </div>
  </main>
);
