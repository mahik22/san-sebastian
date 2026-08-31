import { n as site, r as Button } from "./site-DzVDM_sD.js";
import { t as Reveal } from "./Reveal-DDv1-tWA.js";
import { t as behind_scenes_default } from "./behind-scenes-zBT9PpGO.js";
import { t as san_sebastian_default } from "./san-sebastian-CBTt6Hjl.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Croissant, HeartHandshake, Leaf, Sparkles } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var values = [
	{
		icon: Sparkles,
		title: "Cheesecake craftsmanship",
		body: "Every cheesecake is baked in small batches and finished by hand — from the caramelised Basque top to the softest possible centre."
	},
	{
		icon: Croissant,
		title: "Freshly prepared, daily",
		body: "Desserts, pastries and bakes are prepared fresh through the day, so what reaches you tastes like it just left the oven."
	},
	{
		icon: Leaf,
		title: "Vegetarian & eggless options",
		body: "Many of our cheesecakes and bakes are vegetarian, with eggless options available — just ask when you order."
	},
	{
		icon: HeartHandshake,
		title: "Made for sharing",
		body: "Bento cakes for one, whole cheesecakes for a table. Small moments of indulgence, boxed and ready to travel."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-warm",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Our Story"
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsxs("h1", {
							className: "mt-4 font-display text-5xl leading-[1.08] text-primary sm:text-6xl",
							children: [
								"Baked With Obsession.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic text-accent",
									children: "Served With Love."
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs("p", {
							className: "mt-7 max-w-lg leading-relaxed text-muted-foreground",
							children: [site.name, " is a dessert-focused bakery in Pimple Saudagar, Pune — known for cheesecakes, indulgent desserts, bakery treats and coffee."]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 220,
						children: /* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-lg leading-relaxed text-muted-foreground",
							children: "We keep the menu tight and the standards high: premium ingredients, small-batch bakes and flavours we'd happily eat every day. Whether it's a bento cake on a Tuesday or a whole San Sebastian for a celebration, it leaves our kitchen fresh."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 280,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "cocoa",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/menu",
									children: "Explore the Menu"
								})
							}), /* @__PURE__ */ jsx(Button, {
								variant: "order",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ jsx("a", {
									href: site.orderUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									children: "Order Now"
								})
							})]
						})
					})
				] }), /* @__PURE__ */ jsx(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-[2rem] shadow-lift",
						children: /* @__PURE__ */ jsx("img", {
							src: behind_scenes_default,
							alt: "A baker pouring cheesecake batter into a parchment-lined tin",
							width: 1024,
							height: 1024,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/5] w-full object-cover"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: values.map((v, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 2 * 90,
					children: /* @__PURE__ */ jsxs("article", {
						className: "h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift",
						children: [
							/* @__PURE__ */ jsx(v.icon, {
								className: "size-6 text-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-display text-2xl text-primary",
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: v.body
							})
						]
					})
				}, v.title))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-cocoa text-cocoa-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-[2rem]",
					children: /* @__PURE__ */ jsx("img", {
						src: san_sebastian_default,
						alt: "Caramelised San Sebastian cheesecake in parchment",
						width: 1024,
						height: 1024,
						loading: "lazy",
						decoding: "async",
						className: "aspect-[4/3] w-full object-cover"
					})
				}) }), /* @__PURE__ */ jsxs(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow text-cocoa-foreground/60",
							children: "What we're known for"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl leading-tight sm:text-5xl",
							children: "Desserts worth sharing."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-md leading-relaxed text-cocoa-foreground/75",
							children: "Currently available for takeaway and home delivery across Pimple Saudagar and nearby. Planning something bigger? Call us for custom cakes and bulk dessert orders."
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "onCocoa",
							size: "lg",
							className: "mt-8",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: site.phoneHref,
								children: ["Call ", site.phoneDisplay]
							})
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
