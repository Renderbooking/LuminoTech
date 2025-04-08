import "./globals.css";

export const metadata = {
  title: "Lumino - Innovative Digital Solutions",
  description:
    "Lumino offers cutting-edge digital solutions to help businesses thrive in the digital era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
