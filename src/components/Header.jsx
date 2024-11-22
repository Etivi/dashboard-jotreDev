import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import { BsGear } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

export const Header = () => {
	return (
		<header className="h-[5vh]  border-b border-secondary-200 p-8 flex items-center justify-end transition-colors">
			<nav className="flex items-center gap-x-2">
				<Menu
					menuButton={
						<MenuButton className="relative flex items-center gap-x-3 hover:bg-secondary-100 py-2 px-2 rounded-full transition-colors ">
							<IoIosNotificationsOutline className="w-6 h-6" />
							{/* <div className="absolute -top-0 right-1.5 bg-primary d-flex items-center justify-center rounded-full p-2 y-2">
								<span className=" text-black font-bold  text-[8px] ">
									2
								</span>
							</div> */}
							<div className="absolute top-[10px] right-1.5 w-3 h-3 bg-primary rounded-full flex justify-center items-center ring-1 ring-white">
								<span className="text-black font-bold text-[8px]">
									2
								</span>
							</div>
						</MenuButton>
					}
					menuStyle={{
						backgroundColor: "#1e1f25",
						padding: "4px",
						rounded: "10px",
						border: "1px solid #2e2f37",
						width: "300px",
					}}
					transition
					gap={12}
					align="center"
				>
					<MenuItem className="transition-colors text-gray-300 hover:bg-transparent rounded-lg flex items-center justify-between -mx-3">
						<h3>Notificaciones</h3>
						<IoIosClose className="w-6 h-6  hover:bg-secondary-900 rounded-full hover:text-primary" />
					</MenuItem>
					<MenuDivider style={{ backgroundColor: "#2e2f37" }} />
					<MenuItem className="transition-colors text-gray-300 hover:bg-secondary-900 rounded-lg ">
						<Link className="flex items-center gap-x-3 -mx-3">
							<div className="relative">
								<img
									src="https://rickandmortyapi.com/api/character/avatar/336.jpeg"
									alt="coat rack head"
									className="w-10 object-cover rounded-full ring-1 ring-primary "
								/>
								<span className="absolute top-6 right-0 w-2 h-2 bg-secondary-900 rounded-full flex justify-center items-center ring-1 ring-white"></span>
							</div>
							<div className="text-sm">
								<div className="flex justify-between items-center gap-x-4">
									<span>Carlos Guampe</span>{" "}
									<span className="text-[8px]">19/10/2024</span>
								</div>
								<div className="flex items-center gap-x-2 ">
									<span className="text-[9px] text-gray-300">
										Strategies
									</span>
									<span className="bg-primary rounded-full w-1 h-1"></span>
									<span className="text-[9px] text-gray-300">
										Web design 2024
									</span>
								</div>
								<p className="text-gray-500 text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit.{" "}
								</p>
							</div>
						</Link>
					</MenuItem>
					<MenuItem className="transition-colors text-gray-300 hover:bg-secondary-900 rounded-lg ">
						<Link className="flex items-center gap-x-3 -mx-3">
							<div className="relative">
								<img
									src="https://rickandmortyapi.com/api/character/avatar/722.jpeg"
									alt="coat rack head"
									className="w-10 object-cover rounded-full ring-1 ring-primary "
								/>
								<span className="absolute top-6 right-0 w-2 h-2 bg-primary rounded-full flex justify-center items-center ring-1 ring-white"></span>
							</div>
							<div className="text-sm">
								<div className="flex justify-between items-center gap-x-4">
									<span>Air Tina-Teer</span>{" "}
									<span className="text-[8px]">19/11/2024</span>
								</div>
								<div className="flex items-center gap-x-2 ">
									<span className="text-[9px] text-gray-300">
										Marketing
									</span>
									<span className="bg-primary rounded-full w-1 h-1"></span>
									<span className="text-[9px] text-gray-300">
										SEO ranking
									</span>
								</div>
								<p className="text-gray-500 text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit.{" "}
								</p>
							</div>
						</Link>
					</MenuItem>
					<MenuDivider style={{ backgroundColor: "#2e2f37" }} />
					<MenuItem className="text-gray-300 hover:bg-secondary-900 rounded-lg flex justify-center">
						<h3 className="text-sm"> Todas las notificaciones</h3>
					</MenuItem>

				</Menu>

				<Menu
					menuButton={
						<MenuButton className="flex items-center gap-x-3 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
							<img
								src="https://rickandmortyapi.com/api/character/avatar/336.jpeg"
								alt="coat rack head"
								className="w-6 h-6 object-cover rounded-full ring-1 ring-primary"
							/>
							<span>Carlos Guampe</span>
							<IoIosArrowDown />
						</MenuButton>
					}
					menuStyle={{
						backgroundColor: "#1e1f25 ",
						padding: "4px",
						rounded: "10px",
						border: "1px solid #2e2f37",
					}}
					transition
					gap={12}
					align="end"
				>
					<MenuItem className="transition-colors text-gray-300 hover:bg-secondary-900 rounded-lg active:bg-secondary-900 focus:bg-secondary-900">
						<Link
							to="/profile"
							className="flex items-center gap-x-3  -mx-3"
						>
							<img
								src="https://rickandmortyapi.com/api/character/avatar/336.jpeg"
								alt="coat rack head"
								className="w-8 h-8 object-cover rounded-full ring-1 ring-primary"
							/>
							<div className="flex flex-col gap-1 text-sm">
								<span className="text-sm">Carlos Guampe</span>
								<span className="text-xs text-gray-500">
									carlos@guampe.com
								</span>
							</div>
						</Link>
					</MenuItem>
					<MenuDivider style={{ backgroundColor: "#2e2f37" }} />
					<MenuItem className="transition-colors text-gray-300 hover:bg-secondary-900 rounded-lg">
						<Link
							to="/config"
							className="flex items-center gap-x-3 -mx-3"
						>
							<BsGear />
							Configuración
						</Link>
					</MenuItem>
					<MenuItem className="transition-colors text-gray-300 hover:bg-secondary-900 rounded-lg">
						<Link
							to="/cerrar-sesion"
							className="flex items-center gap-x-3  -mx-3"
						>
							<HiOutlineLogout />
							Cerrar sesión
						</Link>
					</MenuItem>
				</Menu>
			</nav>
		</header>
	);
};
