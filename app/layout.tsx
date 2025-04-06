import "./globals.css";

export const metadata = {
  title: "TodoApp",
  description: "Todo app for next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen={true}>{children}</body>
    </html>
  );
}
