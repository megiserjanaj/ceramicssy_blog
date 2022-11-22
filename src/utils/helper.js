export const getWinSize = () => {
	if (typeof window !== 'undefined') {
		const w = window;
		const d = document;
		const e = d.documentElement;
		const g = d.getElementsByTagName('body')[0];
		const x = w.innerWidth || e.clientWidth || g.clientWidth;
		const y = w.innerHeight || e.clientHeight || g.clientHeight;

		return { width: x, height: y };
	}

	return { width: 0, height: 0 };
};