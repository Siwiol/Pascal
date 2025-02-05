import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { App } from "./App";
import { Header } from "./components/Header/Header";
export const metadata = {
  title: "Pascal",
  description: "project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
