import Footer from "./_components/Footer";
import Mobilenav from "./_components/Mobilenav";
import Navbar from "./_components/Navbar";

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-svh w-full flex-col mt-[2rem]">
            <Mobilenav/>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default GlobalLayout;
