import { i as cn, n as site, r as Button } from "./site-DzVDM_sD.js";
import { t as Reveal } from "./Reveal-DDv1-tWA.js";
import { n as ProductCard, o as products, r as categories, t as ProductDialog } from "./ProductDialog-Be2I_fjK.js";
import * as React from "react";
import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Phone, Search } from "lucide-react";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/routes/menu.tsx?tsr-split=component
function MenuPage() {
	const [active, setActive] = useState("all");
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState(null);
	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return products.filter((p) => {
			const matchesCategory = active === "all" || p.category === active;
			const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
			return matchesCategory && matchesQuery;
		});
	}, [active, query]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-warm",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24",
				children: /* @__PURE__ */ jsxs(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Our Menu"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl",
							children: "Something for every sweet craving."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-lg leading-relaxed text-muted-foreground",
							children: "Baked fresh in Pimple Saudagar. Available for takeaway and home delivery. Prices are indicative and may vary."
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "sticky top-18 z-30 -mx-5 border-b border-border/60 bg-background/90 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							role: "tablist",
							"aria-label": "Menu categories",
							className: "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1",
							children: categories.map((c) => /* @__PURE__ */ jsx("button", {
								role: "tab",
								"aria-selected": active === c.id,
								type: "button",
								onClick: () => setActive(c.id),
								className: cn("cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all", active === c.id ? "border-transparent bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-accent hover:text-primary"),
								children: c.label
							}, c.id))
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative lg:w-72",
							children: [/* @__PURE__ */ jsx(Search, {
								className: "pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx(Input, {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search the menu",
								"aria-label": "Search the menu",
								className: "h-11 rounded-full border-border bg-card pl-10"
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: [
						results.length,
						" ",
						results.length === 1 ? "item" : "items"
					]
				}),
				results.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "py-24 text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl text-primary",
							children: "Nothing matches that."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Try another flavour — or call us, we might still have it."
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "lg",
							className: "mt-6",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: site.phoneHref,
								children: [/* @__PURE__ */ jsx(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), site.phoneDisplay]
							})
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: results.map((product, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 3 * 80,
						children: /* @__PURE__ */ jsx(ProductCard, {
							product,
							onSelect: setSelected,
							priority: i < 3
						})
					}, product.id))
				})
			]
		}),
		/* @__PURE__ */ jsx(ProductDialog, {
			product: selected,
			onOpenChange: (o) => !o && setSelected(null)
		})
	] });
}
//#endregion
export { MenuPage as component };
