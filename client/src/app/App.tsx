import { injectStore } from "@/shared/lib";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { appRouter } from "./router";
import { store } from "./store";

injectStore(store);

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
    </Provider>
  );
}
