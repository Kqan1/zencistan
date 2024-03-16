import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import Providers from "@/components/layout/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { TailwindIndicator } from "@/components/tailwindindicator";
import { cn } from "@/lib/utils";
import { fontSans } from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.metadata.name,
        template: `%s | ${siteConfig.metadata.name}`,
    },
	description: siteConfig.metadata.description,
	applicationName: siteConfig.metadata.applicationName,
	authors: [{ name: siteConfig.metadata.author, url: siteConfig.links.github }],
	keywords: siteConfig.metadata.keywords,
	category: siteConfig.metadata.category,
	generator: siteConfig.metadata.generator,
	icons: siteConfig.metadata.icons,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
			<body className={cn("relative h-full font-sans antialiased", fontSans.variable)}>
				<main className="relative flex flex-col min-h-screen">
					<Providers>
						<Header />
                        <div className="grow flex-1">
                            {children}
                        </div>
						<Footer />
					</Providers>
					<TailwindIndicator />
				</main>
			</body>
		</html>
    );
}
