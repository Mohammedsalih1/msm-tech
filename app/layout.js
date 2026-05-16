// import { Geist, Geist_Mono } from "next/font/google";
import { Cairo, Tajawal } from "next/font/google"
import "./globals.css";


const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-header",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "MSM Tech — Advanced Digital Engineering",
  description: "MSM Tech builds powerful digital experiences through advanced software engineering, modern web development, and innovative technology solutions",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en">
      <body
        className={tajawal.className}
      >
        {children}
      </body>
    </html>
  );
}
