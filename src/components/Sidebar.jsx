import { Link } from "react-router-dom";
import {
	HiOutlineChartBar,
	HiOutlineGlobeAlt,
	HiOutlineCalendar,
	HiOutlineLogout,
	HiOutlineChevronRight,
	HiOutlineMenuAlt1,
	HiOutlineX,
	HiOutlineSupport,
} from "react-icons/hi";
import { useState } from "react";

export const Sidebar = () => {
	const [showSubMenu, setShowSubMenu] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<div
				className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 border border-r-secondary-200 bg-secondary-100 p-6 flex flex-col justify-between z-50 ${showSidebar ? "left-0" : "-left-full"
					} transition-all`}
			>
				<div>
					<div className="flex justify-center">
						<Link to="/" className="text-2xl font-bold text-white mb-10">
							Admin<span className="text-primary text-2xl">.</span>
						</Link>
					</div>
					<ul>
						<li>
							<Link
								to="/"
								className="py-2 px-4 rounded-lg text-white flex text-sm items-center gap-2 hover:bg-secondary-900 transition-colors"
							>
								<HiOutlineChartBar className="text-primary" />
								Analytic
							</Link>
						</li>
						<li>
							<button
								onClick={() => setShowSubMenu(!showSubMenu)}
								className="py-2 px-4 rounded-lg w-full text-white flex text-sm items-center justify-between hover:bg-secondary-900 transition-colors"
							>
								<span className="flex items-center gap-2">
									<HiOutlineGlobeAlt className="text-primary" />
									Social media
								</span>
								<HiOutlineChevronRight
									className={`text-primary ${showSubMenu && "rotate-90"
										} transition-all`}
								/>
							</button>
							<ul className={`my-2 ${!showSubMenu && "hidden"}`}>
								<li>
									<Link
										to="/"
										className="py-2 px-4 border-l border-gray-500 ml-6 text-sm block relative before:w-3 before:h-3 before:bg-primary text-white before:absolute before:left-[-6px] before:top-[50%] before:translate-y-[-50%] before:rounded-full before:border-4 before:border-secondary-100"
									>
										Post red social
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="py-2 px-4 border-l border-gray-500 ml-6 text-sm block relative before:w-3 before:h-3 before:bg-gray-100 before:absolute before:left-[-6px] before:top-[50%] before:translate-y-[-50%] before:rounded-full before:border-4 before:border-secondary-100"
									>
										Profile
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="py-2 px-4 border-l border-gray-500 ml-6 text-sm block relative before:w-3 before:h-3 before:bg-gray-100 before:absolute before:left-[-6px] before:top-[50%] before:translate-y-[-50%] before:rounded-full before:border-4 before:border-secondary-100"
									>
										Estadisticas
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								to="/tickets"
								className="py-2 px-4 rounded-lg text-white flex text-sm items-center gap-2 hover:bg-secondary-900 transition-colors"
							>
								<HiOutlineSupport className="text-primary" />
								Support
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="py-2 px-4 rounded-lg text-white flex text-sm items-center gap-2 hover:bg-secondary-900 transition-colors"
							>
								<HiOutlineCalendar className="text-primary" />
								Calendar
							</Link>
						</li>
					</ul>
				</div>
				<nav>
					<Link
						to="/"
						className="py-2 px-4 rounded-lg text-white flex text-sm items-center gap-2 hover:bg-secondary-900 transition-colors"
					>
						<HiOutlineLogout className="text-primary" />
						Cerrar sesión
					</Link>
				</nav>
			</div>

			{/* Boton para abrir y cerrar el sidebar en el movil */}
			<button
				onClick={() => setShowSidebar(!showSidebar)}
				className="fixed xl:hidden bottom-4 right-4 bg-primary w-12 h-12 rounded-full flex items-center justify-center text-black z-50"
			>
				{showSidebar ? <HiOutlineX /> : <HiOutlineMenuAlt1 />}
			</button>
		</>
	);
};
