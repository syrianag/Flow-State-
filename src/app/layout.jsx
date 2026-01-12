// src/app/layout.jsx
import "./globals.css";
import Link from "next/link";
import { TimerProvider } from "../contexts/TimerContext";
import FloatingTimer from "../components/FloatingTimer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TimerProvider>
          <main className="flex-1 w-full">
            {children}
          </main>
          <FloatingTimer />
        </TimerProvider>
      </body>
    </html>
  );
}