import React from "react";
import Header from "./header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap py-4">
          <Header />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
