import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserProvider } from "./providers/User.context.tsx";
import { BrowserRouter } from "react-router-dom";
import { ContentProvider } from "./providers/ContentContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContentProvider>
          <App />
        </ContentProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
