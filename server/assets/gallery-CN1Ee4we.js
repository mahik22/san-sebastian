import { i as cn, n as site, r as Button } from "./site-DzVDM_sD.js";
import { t as Reveal } from "./Reveal-DDv1-tWA.js";
import { t as behind_scenes_default } from "./behind-scenes-Cn7Wl5_Z.js";
import { t as san_sebastian_default } from "./san-sebastian-4ThdhJ-p.js";
import { t as hero_cheesecake_default } from "./hero-cheesecake-BS8Oikah.js";
import { a as belgian_chocolate_default, c as biscoff_default, i as tiramisu_default, l as ny_classic_default, n as bakery_default, o as nutella_default, r as bomboloni_default, s as pistachio_default, t as coffee_default } from "./coffee-CWRXXGG_.js";
import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Instagram } from "lucide-react";
//#region src/routes/gallery.tsx?tsr-split=component
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "cheesecakes",
		label: "Cheesecakes"
	},
	{
		id: "desserts",
		label: "Desserts"
	},
	{
		id: "bakery",
		label: "Bakery"
	},
	{
		id: "coffee",
		label: "Coffee"
	},
	{
		id: "bts",
		label: "Behind the Scenes"
	}
];
/** Replace `src` with real photography — the layout adapts automatically. */
var shots = [
	{
		src: hero_cheesecake_default,
		alt: "Slice lifted from a San Sebastian cheesecake",
		category: "cheesecakes",
		tall: true
	},
	{
		src: san_sebastian_default,
		alt: "Whole Basque burnt cheesecake in parchment",
		category: "cheesecakes"
	},
	{
		src: biscoff_default,
		alt: "Lotus Biscoff baked cheesecake slice",
		category: "cheesecakes"
	},
	{
		src: pistachio_default,
		alt: "Pistachio baked cheesecake slice",
		category: "cheesecakes",
		tall: true
	},
	{
		src: nutella_default,
		alt: "Nutella cheesecake with hazelnuts",
		category: "cheesecakes"
	},
	{
		src: belgian_chocolate_default,
		alt: "Belgian chocolate cheesecake slice",
		category: "cheesecakes"
	},
	{
		src: ny_classic_default,
		alt: "New York classic baked cheesecake slice",
		category: "cheesecakes"
	},
	{
		src: tiramisu_default,
		alt: "Classic tiramisu dusted with cocoa",
		category: "desserts",
		tall: true
	},
	{
		src: bomboloni_default,
		alt: "Nutella bomboloni dusted with sugar",
		category: "desserts"
	},
	{
		src: bakery_default,
		alt: "Croissants and pastries on a wooden tray",
		category: "bakery",
		tall: true
	},
	{
		src: coffee_default,
		alt: "Cappuccino with latte art beside a dessert",
		category: "coffee"
	},
	{
		src: behind_scenes_default,
		alt: "Cheesecake batter being poured in the kitchen",
		category: "bts"
	}
];
function GalleryPage() {
	const [active, setActive] = useState("all");
	const visible = useMemo(() => active === "all" ? shots : shots.filter((s) => s.category === active), [active]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-gradient-warm",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24",
			children: /* @__PURE__ */ jsxs(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Gallery"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl",
						children: "Every slice, up close."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-lg leading-relaxed text-muted-foreground",
						children: "A look at what comes out of our kitchen — cheesecakes, desserts, bakery treats and coffee."
					})
				]
			})
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2",
				children: filters.map((f) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setActive(f.id),
					"aria-pressed": active === f.id,
					className: cn("cursor-pointer rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all", active === f.id ? "border-transparent bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-accent hover:text-primary"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5",
				children: visible.map((shot, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * 70,
					className: "break-inside-avoid",
					children: /* @__PURE__ */ jsxs("figure", {
						className: "group relative overflow-hidden rounded-2xl shadow-soft",
						children: [/* @__PURE__ */ jsx("img", {
							src: shot.src,
							alt: shot.alt,
							width: 1024,
							height: shot.tall ? 1365 : 1024,
							loading: i < 3 ? "eager" : "lazy",
							decoding: "async",
							className: cn("w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]", shot.tall ? "aspect-[3/4]" : "aspect-square")
						}), /* @__PURE__ */ jsx("figcaption", {
							className: "pointer-events-none absolute inset-0 flex items-end overlay-cocoa p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-sm text-cocoa-foreground",
								children: shot.alt
							})
						})]
					})
				}, `${shot.src}-${i}`))
			}),
			/* @__PURE__ */ jsxs(Reveal, {
				className: "mt-16 rounded-2xl border border-border/70 bg-card p-10 text-center shadow-soft",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl text-primary",
						children: "More on Instagram"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground",
						children: "Fresh bakes, new flavours and daily specials — first on our feed."
					}),
					/* @__PURE__ */ jsx(Button, {
						variant: "order",
						size: "lg",
						className: "mt-7",
						asChild: true,
						children: /* @__PURE__ */ jsxs("a", {
							href: site.social.instagram,
							target: "_blank",
							rel: "noreferrer noopener",
							children: [/* @__PURE__ */ jsx(Instagram, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Follow Us"]
						})
					})
				]
			})
		]
	})] });
}
//#endregion
export { GalleryPage as component };
