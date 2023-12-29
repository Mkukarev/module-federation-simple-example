import React from "react";

import "./style.css";
import { AppProvider } from "host/store";
import Remote from "remote/App";
import { Text } from "./Text";

export function App() {
	return (
		<div className="layout">
			<React.Suspense fallback={"loading"}>
				<AppProvider>
					<Text />
					<Remote />
				</AppProvider>
			</React.Suspense>
		</div>
	);
}
