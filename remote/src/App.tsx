import React from "react";
import "./style.css";

import { Title } from "./Title";

export default function App() {
	return (
		<React.Suspense fallback={"loading"}>
			<Title />
		</React.Suspense>
	);
}
