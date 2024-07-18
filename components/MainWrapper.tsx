"use client";
import dataStore from "@/stores/DataStore";
import { observer } from "mobx-react";
import LoginForm from "./LoginForm";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = observer(({ children }: MainWrapperProps) => {
  return <div>{dataStore.isLoggedIn() ? <>{children}</> : <LoginForm />}</div>;
});

export default MainWrapper;
