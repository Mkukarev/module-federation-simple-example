import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
	children: ReactNode;
};

const AppContext = createContext({
	title: "",
	handleTitle: () => {},
});

export function AppProvider({ children }: Props) {
	const [title, setTitle] = useState("Remote Title");

	const handleTitle = () => setTitle((x) => x + 1);

	return (
		<AppContext.Provider value={{ title, handleTitle }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
