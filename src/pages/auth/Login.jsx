import { useState } from "react";
import {
	HiOutlineEye,
	HiOutlineEyeOff,
	HiOutlineLockClosed,
	HiOutlineMail,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export const Login = () => {
	const [showPassword, setShowPassword] = useState();

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="bg-secondary-100 p-8 rounded-xl w-auto lg:w-[400px]">
				<h1 className="text-3xl uppercase font-bold tracking-[5px] text-white text-center">
					Iniciar sesión
				</h1>
				<form className="mb-8">
					<button className="flex items-center justify-center gap-4 bg-secondary-900 w-full py-3 mt-8 rounded-lg mb-8">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
							alt="google"
							className="w-4 h-4"
						/>
						Ingresa con Google
					</button>
					<div className="relative mb-4">
						<HiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/80" />
						<input
							type="email"
							className="py-3 px-4 pl-10 rounded-lg w-full bg-secondary-900 outline-none"
							placeholder="Correo electrónico"
						/>
					</div>
					<div className="relative mb-8">
						<HiOutlineLockClosed className="absolute top-1/2 -translate-y-1/2 left-4 text-primary/80" />
						<input
							type={showPassword ? "text" : "password"}
							className="py-3 px-4 pl-10 rounded-lg w-full bg-secondary-900 outline-none"
							placeholder="Contraseña"
						/>
						{showPassword ? (
							<HiOutlineEyeOff
								className="absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer text-primary/80"
								onClick={() => setShowPassword(!showPassword)}
							/>
						) : (
							<HiOutlineEye
								className="absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer text-primary/80"
								onClick={() => setShowPassword(!showPassword)}
							/>
						)}
					</div>
					<div>
						<button
							type="submit"
							className="bg-primary text-black uppercase text-sm font-bold w-full py-3 rounded-lg"
						>
							Ingresar
						</button>
					</div>
				</form>
				<div className="flex flex-col gap-2 items-center">
					<Link
						to="/forget-password"
						className="text-sm text-gray-400 hover:text-primary trasition-colors"
					>
						¿Olvidaste tu contraseña?
					</Link>
					<Link to="/register" className="text-sm text-gray-400">
						¿No tienes una cuenta?{" "}
						<span className=" text-primary trasition-colors hover:text-gray-400">
							Registrate
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
