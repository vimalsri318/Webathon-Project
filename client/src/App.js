import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="home" exact element={<Navbar />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" exact element={<Navbar />} />
			<Route path="/home" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
