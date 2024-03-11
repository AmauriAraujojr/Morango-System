import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserProvider } from "./providers/User.context.tsx";
import { BrowserRouter } from "react-router-dom";
import { ContentProvider } from "./providers/ContentContext.tsx";
import { ServiceProvider } from "./providers/ServicesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContentProvider>
          <ServiceProvider>
            <App />
          </ServiceProvider>
        </ContentProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
