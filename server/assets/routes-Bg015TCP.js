import { n as site, r as Button } from "./site-DzVDM_sD.js";
import { t as Reveal } from "./Reveal-DDv1-tWA.js";
import { t as san_sebastian_default } from "./san-sebastian-CBTt6Hjl.js";
import { t as hero_cheesecake_default } from "./hero-cheesecake-gSwS7AM1.js";
import { n as bakery_default } from "./coffee-BDcih79q.js";
import { a as formatPrice, i as featuredProducts, n as ProductCard, o as products, r as categories, t as ProductDialog } from "./ProductDialog-Be2I_fjK.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, MapPin, Phone, Quote } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var menuPreview = [
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
		label: "Coffee & Beverages"
	}
];
var testimonials = [
	{
		quote: "The San Sebastian cheesecake is unreal — caramelised on top and completely molten inside. Easily the best in Pimple Saudagar.",
		name: "Placeholder review",
		meta: "Replace with a real Google / Zomato review"
	},
	{
		quote: "Ordered the Biscoff and pistachio cheesecakes for a birthday. Both were fresh, not overly sweet, and beautifully packed.",
		name: "Placeholder review",
		meta: "Replace with a real Google / Zomato review"
	},
	{
		quote: "Great coffee and the bomboloni are dangerous. Quick delivery and everything arrived intact.",
		name: "Placeholder review",
		meta: "Replace with a real Google / Zomato review"
	}
];
function Home() {
	const [selected, setSelected] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "relative overflow-hidden bg-gradient-warm",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "order-2 lg:order-1",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase",
							children: [/* @__PURE__ */ jsx(MapPin, {
								className: "size-3.5 text-accent",
								"aria-hidden": "true"
							}), site.area]
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-5xl leading-[1.05] text-primary sm:text-6xl lg:text-7xl",
								children: [
									"Cheesecake Worth",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "italic text-accent",
										children: "Coming Back"
									}),
									" For."
								]
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Freshly baked cheesecakes, indulgent desserts and coffee — made for the moments that deserve something sweet."
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ jsxs("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsx(Button, {
									variant: "cocoa",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ jsxs(Link, {
										to: "/menu",
										children: ["Explore Menu", /* @__PURE__ */ jsx(ArrowRight, {
											className: "size-4",
											"aria-hidden": "true"
										})]
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
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 320,
							children: /* @__PURE__ */ jsxs("p", {
								className: "mt-8 text-sm text-muted-foreground",
								children: [
									"Takeaway & home delivery ·",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: site.phoneHref,
										className: "text-primary underline-offset-4 hover:underline",
										children: site.phoneDisplay
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "order-1 lg:order-2",
					children: /* @__PURE__ */ jsxs(Reveal, {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-[2rem] shadow-lift",
							children: /* @__PURE__ */ jsx("img", {
								src: hero_cheesecake_default,
								alt: "A slice being lifted from a caramelised San Sebastian cheesecake, revealing its creamy interior",
								width: 1600,
								height: 1200,
								fetchPriority: "high",
								decoding: "async",
								className: "aspect-[4/3] w-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card/95 px-6 py-4 shadow-soft backdrop-blur sm:block",
							children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow",
								children: "Signature"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 font-display text-xl text-primary",
								children: "Basque Burnt Cheesecake"
							})]
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "max-w-xl",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Our Favourites"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-4xl text-primary sm:text-5xl",
					children: "The ones our customers keep coming back for."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featuredProducts.map((product, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * 90,
					className: product.signature ? "sm:col-span-2" : void 0,
					children: /* @__PURE__ */ jsx(ProductCard, {
						product,
						onSelect: setSelected,
						featured: product.signature,
						priority: i === 0
					})
				}, product.id))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-cocoa text-cocoa-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-32",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-[2rem]",
					children: /* @__PURE__ */ jsx("img", {
						src: san_sebastian_default,
						alt: "Whole Basque burnt San Sebastian cheesecake resting in parchment paper",
						width: 1024,
						height: 1024,
						loading: "lazy",
						decoding: "async",
						className: "aspect-square w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
					})
				}) }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
						className: "eyebrow text-cocoa-foreground/60",
						children: "The San Sebastian Experience"
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl leading-tight sm:text-5xl",
							children: "Meet the Cheesecake That Started It All."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsx("p", {
							className: "mt-7 font-display text-2xl italic text-accent sm:text-3xl",
							children: "Creamy. Caramelised. Irresistibly soft."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 220,
						children: /* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-lg leading-relaxed text-cocoa-foreground/75",
							children: "Baked hot and fast until the top darkens into deep caramel, our Basque-style San Sebastian cheesecake stays gloriously soft in the centre. No crust, no shortcuts — just cream cheese, care and a bake we've obsessed over."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 280,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "order",
							size: "lg",
							className: "mt-9",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: site.orderUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								children: "Try Our Signature Cheesecake"
							})
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
			children: [
				/* @__PURE__ */ jsxs(Reveal, {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "The Menu"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl text-primary sm:text-5xl",
							children: "Something for every sweet craving."
						})]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/menu",
							children: ["View Full Menu", /* @__PURE__ */ jsx(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2",
					children: menuPreview.map((cat, i) => {
						const items = products.filter((p) => cat.id === "coffee" ? p.category === "coffee" || p.category === "beverages" : p.category === cat.id);
						return /* @__PURE__ */ jsxs(Reveal, {
							delay: i % 2 * 90,
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl text-primary",
									children: cat.label
								}),
								/* @__PURE__ */ jsx("div", { className: "mt-2 h-px w-16 bg-accent" }),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 space-y-3.5",
									children: items.slice(0, 8).map((item) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-baseline gap-3 text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => setSelected(item),
												className: "cursor-pointer text-left text-foreground/85 transition-colors hover:text-accent",
												children: item.name
											}),
											/* @__PURE__ */ jsx("span", { className: "h-px flex-1 border-b border-dotted border-border" }),
											/* @__PURE__ */ jsx("span", {
												className: "tabular-nums text-primary",
												children: formatPrice(item.price)
											})
										]
									}, item.id))
								})
							]
						}, cat.id);
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					className: "mt-14 flex flex-wrap justify-center gap-2",
					children: categories.filter((c) => c.id !== "all").map((c) => /* @__PURE__ */ jsx(Link, {
						to: "/menu",
						search: { category: c.id },
						className: "rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-primary",
						children: c.label
					}, c.id))
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary/50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Customer Love"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mx-auto mt-4 max-w-2xl font-display text-4xl text-primary sm:text-5xl",
						children: "A Little Love From Our Customers"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ jsxs("figure", {
							className: "flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ jsx(Quote, {
									className: "size-6 text-accent",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-5 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: [
										"“",
										t.quote,
										"”"
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "mt-6 border-t border-border pt-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm text-primary",
										children: t.name
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: t.meta
									})]
								})
							]
						})
					}, t.quote))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-[2rem] shadow-lift",
					children: /* @__PURE__ */ jsx("img", {
						src: bakery_default,
						alt: "Freshly baked croissants and chocolate pastries on a wooden tray",
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
							className: "eyebrow",
							children: "Come Find Us"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl text-primary sm:text-5xl",
							children: "Craving something sweet right now?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-md leading-relaxed text-muted-foreground",
							children: "We bake fresh through the day for takeaway and home delivery across Pimple Saudagar and around."
						}),
						/* @__PURE__ */ jsxs("address", {
							className: "mt-7 not-italic text-sm leading-relaxed text-muted-foreground",
							children: [
								site.address.line1,
								",",
								/* @__PURE__ */ jsx("br", {}),
								site.address.line3,
								",",
								/* @__PURE__ */ jsx("br", {}),
								site.address.city,
								" ",
								site.address.postalCode
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ jsx(Button, {
									variant: "order",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ jsx("a", {
										href: site.orderUrl,
										target: "_blank",
										rel: "noreferrer noopener",
										children: "Order Now"
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: site.phoneHref,
										children: [/* @__PURE__ */ jsx(Phone, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Call to Order"]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										children: "Visit Us"
									})
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(ProductDialog, {
			product: selected,
			onOpenChange: (o) => !o && setSelected(null)
		})
	] });
}
//#endregion
export { Home as component };
