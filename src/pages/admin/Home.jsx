import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { HiOutlineTicket, HiEllipsisVertical  } from "react-icons/hi2";

export const Home = () => {
	return (
		<>
			<Breadcrumbs title="Home" pagina="Home" />
			<div className="flex-wrap gap-4 grid sm:grid-cols-4">
				<div className="flex flex-col gap-4 bg-secondary-100 p-6 rounded-lg border border-secondary-200">
					<div className="flex justify-between gap-4">
						<div className="bg-pink-400/10 p-1.5 rounded-lg">
							<HiOutlineTicket className="w-8 h-8 text-pink-400" />
						</div>
						<HiEllipsisVertical className="w-6 h-6 text-gray-400" />
					</div>
					<span className="text-3xl font-bold">145.000</span>
					<span className="text-sm text-gray-400">Tickets totales</span>
					<span className="border border-b border-dashed border-gray-400"></span>
					<Link to="#" className="text-primary text-xs">Ver todos los tickets</Link>
				</div>
				<div className="flex flex-col gap-4 bg-secondary-100 p-6 rounded-lg border border-secondary-200">
					<div className="flex justify-between gap-4">
						<div className="bg-pink-400/10 p-1.5 rounded-lg">
							<HiOutlineTicket className="w-8 h-8 text-pink-400" />
						</div>
						<HiEllipsisVertical className="w-6 h-6 text-gray-400" />
					</div>
					<span className="text-3xl font-bold">145.000</span>
					<span className="text-sm text-gray-400">Tickets totales</span>
					<span className="border border-b border-dashed border-gray-400"></span>
					<Link to="#" className="text-primary text-xs">Ver todos los tickets</Link>
				</div>
				<div className="flex flex-col gap-4 bg-secondary-100 p-6 rounded-lg border border-secondary-200">
					<div className="flex justify-between gap-4">
						<div className="bg-pink-400/10 p-1.5 rounded-lg">
							<HiOutlineTicket className="w-8 h-8 text-pink-400" />
						</div>
						<HiEllipsisVertical className="w-6 h-6 text-gray-400" />
					</div>
					<span className="text-3xl font-bold">145.000</span>
					<span className="text-sm text-gray-400">Tickets totales</span>
					<span className="border border-b border-dashed border-gray-400"></span>
					<Link to="#" className="text-primary text-xs">Ver todos los tickets</Link>
				</div>
				<div className="flex flex-col gap-4 bg-secondary-100 p-6 rounded-lg border border-secondary-200">
					<div className="flex justify-between gap-4">
						<div className="bg-pink-400/10 p-1.5 rounded-lg">
							<HiOutlineTicket className="w-8 h-8 text-pink-400" />
						</div>
						<HiEllipsisVertical className="w-6 h-6 text-gray-400" />
					</div>
					<span className="text-3xl font-bold">145.000</span>
					<span className="text-sm text-gray-400">Tickets totales</span>
					<span className="border border-b border-dashed border-gray-400"></span>
					<Link to="#" className="text-primary text-xs">Ver todos los tickets</Link>
				</div>
			</div>
		</>
	);
};
