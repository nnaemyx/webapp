import Footer from "../(primary)/_components/Footer";
import Mobilenav from "../(primary)/_components/Mobilenav";
import Navbar from "../(primary)/_components/Navbar";


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
