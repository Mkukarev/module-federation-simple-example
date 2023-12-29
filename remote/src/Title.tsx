import { useAppContext } from "host/store";

export function Title() {
	const { title, handleTitle } = useAppContext();

	return (
		<div className="container">
			{title}
			<button onClick={handleTitle}>Click</button>
		</div>
	);
}
