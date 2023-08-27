"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const ReduxProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
};

export default ReduxProviderWrapper;
