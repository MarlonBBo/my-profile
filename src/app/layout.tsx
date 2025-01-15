

import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
