import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import { LayoutAdmin } from "./layouts/LayoutAdmin";

// Pages auth
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgetPassword } from "./pages/auth/ForgetPassword";

// Pages admin
import { Home } from "./pages/admin/Home";
import { Error404 } from "./pages/Error404";
import { Chat } from "./pages/admin/Chat";
import { Profile } from "./pages/admin/Profile";
import { Tickets } from "./pages/admin/Tickets";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LayoutAdmin />,
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "chat",
					element: <Chat />,
				},
				{
					path: "/profile",
					element: <Profile />,
				},
				{
					path: "/tickets",
					element: <Tickets />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/forget-password",
			element: <ForgetPassword />,
		},
		{
			path: "/inicio",
			element: <Home />,
		},
		{
			path: "*",
			element: <Error404 />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
