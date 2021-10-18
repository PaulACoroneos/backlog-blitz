import React from "react";
import Header from "./header";


const Layout: React.FC = ({ children }) => {
  return <><div className="container mx-auto">
    <div className="flex flex-col flex-wrap py-4"><Header />
      <main className="w-full sm:w-2/3 md:w-3/4 pt-12 px-2">{children}</main></div></div></>
}

export default Layout;