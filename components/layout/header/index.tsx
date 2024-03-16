// import HeaderMenu from "./menu";
// import Card from "@/components/utils/cart";
// import Search from "@/components/utils/search";
// import MaxWidthWrapper from "@/components/layout/maxwidthwrapper";

import MaxWidthWrapper from "@/components/maxwidthwrapper";
import Profile from "@/components/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
	return (
		<header className="sticky top-0 w-full py-1 md:py-2 backdrop-blur-[3px] z-50 dark:bg-transparent bg-white/20 border-b border-gray-200 dark:border-gray-800">
			<MaxWidthWrapper className="flex items-center justify-between gap-2">
				<a href="/" className="hidden lg:block font-black text-xl">
					Zencistan
				</a>
				{/* <Search /> */}
				<div className="flex items-center space-x-2">
					{/* <Card /> */}
                    <ThemeToggle />
					<Profile />
				</div>
			</MaxWidthWrapper>
		</header>
	);
}