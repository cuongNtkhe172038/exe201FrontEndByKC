import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client"; // Import đúng cho React 18
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Routerpages from "./router";
import i18n from "./translation";
import { ToastProvider } from "@heroui/react";
import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";
const App = () => (
  <HeroUIProvider navigate={useNavigate} useHref={useHref}>
      <ToastProvider />
      <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Routerpages />
    </I18nextProvider>
  </BrowserRouter>

    </HeroUIProvider>
    
  
);

// Cách render mới trong React 18
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

