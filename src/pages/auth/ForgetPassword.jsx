import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {
	return (
		<div className="bg-secondary-100 p-8 rounded-xl w-auto lg:w-[400px]">
			<h1 className="text-3xl uppercase font-bold tracking-[5px] text-white text-center mb-8">
				Recuperar contraseña
			</h1>
			<form className="mb-8">
				<div className="relative mb-4">
					<HiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/80" />
					<input
						type="email"
						className="py-3 px-4 pl-10 rounded-lg w-full bg-secondary-900 outline-none"
						placeholder="Correo electrónico"
					/>
				</div>
				<div>
					<button type="submit" className="bg-primary text-black uppercase text-sm font-bold w-full py-3 rounded-lg">
						Enviar
					</button>
				</div>
			</form>
			<div className="flex flex-col gap-2 items-center">
				<Link
					to="/auth"
					className="text-sm text-gray-400 hover:text-primary trasition-colors"
				>
					¿Ya tienes una cuenta?
				</Link>
				<Link to="/auth/register" className="text-sm text-gray-400">
					¿No tienes una cuenta?{" "}
					<span className=" text-primary trasition-colors hover:text-gray-400">
						Registrate
					</span>
				</Link>
			</div>
		</div>
	);
};
