import { useAppContext } from "host/store";

export function Text() {
	const { title, handleTitle } = useAppContext();

	return (
		<div>
			{title}
			<button onClick={handleTitle}>Click</button>
		</div>
	);
}
