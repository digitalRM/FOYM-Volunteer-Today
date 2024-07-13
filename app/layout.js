import { Inter } from "next/font/google";
import "./globals.css";

// This is the banner for the FOYM website. Delete this before deploying!
import Banner from "@/components/sections/999 - banner";

const inter = Inter({ subsets: ["latin"] });

// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://volunteer.foym.org/'),
  title: "Volunteer Today - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
  openGraph: {
    title: "Volunteer Today - An FOYM Template",
    description: "This is a template for organizations modeled after a made-up volunteering nonprofit called “Volunteer Today.” Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
    url: 'https://volunteer.foym.org/',
    siteName: 'Volunteer Today - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of the website\s name "Volunteer Today - An FOYM. Template" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* This is the banner for the FOYM website. Feel free to delete this! */}
        <Banner />
        
        {children}</body>
    </html>
  );
}
