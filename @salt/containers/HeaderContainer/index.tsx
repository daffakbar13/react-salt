import * as React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import Navbar from "../../components/Navbar";

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Breadcrumbs>
      asd
      </Breadcrumbs>
      {children}
    </>
  );
}
