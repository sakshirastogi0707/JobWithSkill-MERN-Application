import React from "react";
import Button from "../../Common/Button";
import Header from "../../Common/Header/Header";
export default function Home() {
  return (
    <div>
      <Header
        title="Welcome"
        SectionImg="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740"
      />
      <Button BtnName="GET STARTED"/>
      
    </div>
  );
}
