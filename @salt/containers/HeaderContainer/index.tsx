import * as React from "react";
import Navbar from "../../components/Navbar";

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
