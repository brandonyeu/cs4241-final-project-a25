import { Lexend } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/utils/clientThemeProvider";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["300", "400"], // 300 = Light, 400 = Regular
});

export const metadata = {
    title: "Studi",
    description:
        "Meet people who have similar study needs, boosting productivity, while forming new connections.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={lexend.className}>
            <ClientThemeProvider>
                {children}
            </ClientThemeProvider>
          </body>
      </html>
  );
}
