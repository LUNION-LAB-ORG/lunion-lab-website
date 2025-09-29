import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local'
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontFigtree=localFont({
  src: [
		{
			path: "../public/assets/fonts/figtree/Figtree-Light.ttf",
			weight: "200",
			style: "normal", // Ou italic
		},
		{
			path: "../public/assets/fonts/figtree/Figtree-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/assets/fonts/figtree/Figtree-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-figtree",
});


