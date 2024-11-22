import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const LayoutAdmin = () => {
	return (
		<div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
			<Sidebar />
			<div className="xl:col-span-5">
				<Header />
				<div className="h-[90vh] overflow-y-scroll max-w-[1280px] mx-auto md:pt-5 md:pb-5 md:pl-8 md:pr-8 pt-2 pb-2 pl-5 pr-5">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
