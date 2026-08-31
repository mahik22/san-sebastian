import { i as cn } from "./site-DzVDM_sD.js";
import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/site/Reveal.tsx
function Reveal({ children, className, delay = 0, as = "div" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const Tag = as;
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", visible && "is-visible", className),
		children
	});
}
//#endregion
export { Reveal as t };
