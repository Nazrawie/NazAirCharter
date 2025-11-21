export const metadata = { title: 'Naz Air Charter' };
import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}