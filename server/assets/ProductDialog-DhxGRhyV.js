import { i as cn, n as site, r as Button } from "./site-DzVDM_sD.js";
import { t as san_sebastian_default } from "./san-sebastian-4ThdhJ-p.js";
import { a as belgian_chocolate_default, c as biscoff_default, i as tiramisu_default, l as ny_classic_default, n as bakery_default, o as nutella_default, r as bomboloni_default, s as pistachio_default, t as coffee_default } from "./coffee-CWRXXGG_.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Leaf, Minus, Phone, Plus, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
//#region src/data/menu.ts
var categories = [
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
		id: "beverages",
		label: "Beverages"
	},
	{
		id: "bento",
		label: "Bento Cakes"
	}
];
var products = [
	{
		id: "classic-san-sebastian",
		name: "Classic San Sebastian Cheesecake",
		description: "Our signature Basque-style bake — caramelised on top, molten and creamy within.",
		price: 380,
		category: "cheesecakes",
		image: san_sebastian_default,
		vegetarian: true,
		bestseller: true,
		signature: true,
		sizes: [
			{
				label: "Slice",
				price: 380
			},
			{
				label: "500 g",
				price: 1150
			},
			{
				label: "1 kg",
				price: 2100
			}
		],
		customisable: true
	},
	{
		id: "ny-classic",
		name: "NY Classic Baked Cheesecake",
		description: "Dense, velvety New York bake on a buttery biscuit base.",
		price: 320,
		category: "cheesecakes",
		image: ny_classic_default,
		vegetarian: true,
		bestseller: true,
		sizes: [
			{
				label: "Slice",
				price: 320
			},
			{
				label: "500 g",
				price: 990
			},
			{
				label: "1 kg",
				price: 1850
			}
		],
		customisable: true
	},
	{
		id: "ny-lotus-biscoff",
		name: "NY Lotus Biscoff Baked Cheesecake",
		description: "Caramelised biscuit crumb, silky cheesecake, molten Biscoff pour.",
		price: 360,
		category: "cheesecakes",
		image: biscoff_default,
		vegetarian: true,
		bestseller: true,
		sizes: [
			{
				label: "Slice",
				price: 360
			},
			{
				label: "500 g",
				price: 1090
			},
			{
				label: "1 kg",
				price: 1990
			}
		],
		customisable: true
	},
	{
		id: "ny-blueberry",
		name: "NY Blueberry Baked Cheesecake",
		description: "Classic bake crowned with a tart, glossy blueberry compote.",
		price: 350,
		category: "cheesecakes",
		image: ny_classic_default,
		vegetarian: true,
		customisable: true
	},
	{
		id: "ny-pistachio",
		name: "NY Pistachio Baked Cheesecake",
		description: "Roasted pistachio cream folded through a slow-baked cheesecake.",
		price: 390,
		category: "cheesecakes",
		image: pistachio_default,
		vegetarian: true,
		bestseller: true,
		customisable: true
	},
	{
		id: "san-sebastian-belgian",
		name: "San Sebastian Belgian Baked Cheesecake",
		description: "Basque bake deepened with couverture Belgian chocolate.",
		price: 420,
		category: "cheesecakes",
		image: belgian_chocolate_default,
		vegetarian: true,
		bestseller: true,
		customisable: true
	},
	{
		id: "nutella-cheesecake",
		name: "Nutella Cheesecake",
		description: "Chocolate hazelnut ganache poured over a soft, creamy set.",
		price: 380,
		category: "cheesecakes",
		image: nutella_default,
		vegetarian: true,
		bestseller: true,
		customisable: true
	},
	{
		id: "tres-leches",
		name: "Tres Leches Milk Cake",
		description: "Feather-light sponge soaked in three milks, finished with cream.",
		price: 290,
		category: "cheesecakes",
		image: ny_classic_default,
		vegetarian: true
	},
	{
		id: "classic-tiramisu",
		name: "Classic Tiramisu",
		description: "Espresso-soaked layers, mascarpone cream, a dusting of cocoa.",
		price: 340,
		category: "desserts",
		image: tiramisu_default,
		vegetarian: true,
		bestseller: true
	},
	{
		id: "bento-nutella",
		name: "Nutella Bento Cheesecake",
		description: "A mini cheesecake for one — boxed and ready to gift.",
		price: 250,
		category: "bento",
		image: nutella_default,
		vegetarian: true,
		customisable: true
	},
	{
		id: "bento-blueberry",
		name: "Blueberry Bento Cheesecake",
		description: "Pocket-sized cheesecake with a bright blueberry finish.",
		price: 250,
		category: "bento",
		image: ny_classic_default,
		vegetarian: true,
		customisable: true
	},
	{
		id: "bento-biscoff",
		name: "Lotus Biscoff Bento Cheesecake",
		description: "Little box, big Biscoff. Caramel crumb on creamy cheesecake.",
		price: 260,
		category: "bento",
		image: biscoff_default,
		vegetarian: true,
		customisable: true
	},
	{
		id: "bento-pistachio",
		name: "Pistachio Bento Cheesecake",
		description: "Nutty, delicate and perfectly portioned pistachio cheesecake.",
		price: 270,
		category: "bento",
		image: pistachio_default,
		vegetarian: true,
		customisable: true
	},
	{
		id: "nutella-bomboloni",
		name: "Nutella Bomboloni",
		description: "Pillowy Italian doughnut, sugar dusted, filled with Nutella.",
		price: 130,
		category: "desserts",
		image: bomboloni_default,
		vegetarian: true,
		bestseller: true
	},
	{
		id: "blueberry-bomboloni",
		name: "Blueberry Bomboloni",
		description: "Soft doughnut with a tangy blueberry cream centre.",
		price: 130,
		category: "desserts",
		image: bomboloni_default,
		vegetarian: true
	},
	{
		id: "walnut-brownie",
		name: "Walnut Brownie",
		description: "Fudgy centre, crackled top, toasted walnuts throughout.",
		price: 150,
		category: "desserts",
		image: belgian_chocolate_default,
		vegetarian: true
	},
	{
		id: "salted-caramel-slice",
		name: "Salted Caramel Chocolate Slice",
		description: "Layered chocolate and flowing salted caramel with sea salt.",
		price: 180,
		category: "desserts",
		image: belgian_chocolate_default,
		vegetarian: true
	},
	{
		id: "chocolate-cookie-tin",
		name: "Chocolate Cookie Tin",
		description: "Gooey chocolate cookies baked and served in their own tin.",
		price: 220,
		category: "desserts",
		image: bakery_default,
		vegetarian: true
	},
	{
		id: "belgian-chocolate-pastry",
		name: "Belgian Chocolate Pastry",
		description: "Silky dark chocolate mousse over moist chocolate sponge.",
		price: 160,
		category: "bakery",
		image: belgian_chocolate_default,
		vegetarian: true
	},
	{
		id: "ferrero-nutella-pastry",
		name: "Ferrero Rocher Nutella Pastry",
		description: "Hazelnut crunch, Nutella cream and chocolate glaze.",
		price: 180,
		category: "bakery",
		image: nutella_default,
		vegetarian: true,
		bestseller: true
	},
	{
		id: "nutella-croissant",
		name: "Nutella Croissant",
		description: "Laminated, flaky croissant generously filled with Nutella.",
		price: 170,
		category: "bakery",
		image: bakery_default,
		vegetarian: true
	},
	{
		id: "dates-walnut-cake",
		name: "Dates & Walnuts Cake",
		description: "Warm, wholesome tea cake with dates and toasted walnuts.",
		price: 150,
		category: "bakery",
		image: bakery_default,
		vegetarian: true
	},
	{
		id: "espresso",
		name: "Espresso",
		description: "A short, intense pull of our house blend.",
		price: 110,
		category: "coffee",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "americano",
		name: "Americano",
		description: "Espresso lengthened with hot water. Clean and bold.",
		price: 130,
		category: "coffee",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "cappuccino",
		name: "Cappuccino",
		description: "Balanced espresso under a velvet cap of steamed milk.",
		price: 160,
		category: "coffee",
		image: coffee_default,
		vegetarian: true,
		bestseller: true
	},
	{
		id: "macchiato",
		name: "Macchiato",
		description: "Espresso marked with a spoonful of milk foam.",
		price: 140,
		category: "coffee",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "hot-chocolate",
		name: "Hot Chocolate",
		description: "Thick, dark and comforting — made with real chocolate.",
		price: 180,
		category: "coffee",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "mocha",
		name: "Mocha",
		description: "Espresso, chocolate and steamed milk in perfect balance.",
		price: 190,
		category: "coffee",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "tiramisu-latte",
		name: "Tiramisu Latte",
		description: "Our dessert bestseller, poured into a cup.",
		price: 210,
		category: "coffee",
		image: tiramisu_default,
		vegetarian: true,
		bestseller: true
	},
	{
		id: "iced-matcha-latte",
		name: "Iced Matcha Latte",
		description: "Ceremonial-style matcha over cold milk and ice.",
		price: 230,
		category: "beverages",
		image: pistachio_default,
		vegetarian: true
	},
	{
		id: "iced-latte",
		name: "Iced Latte",
		description: "Chilled milk, double espresso, plenty of ice.",
		price: 190,
		category: "beverages",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "iced-americano",
		name: "Iced Americano",
		description: "Bright, refreshing and unapologetically strong.",
		price: 170,
		category: "beverages",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "frappuccino",
		name: "Frappuccino",
		description: "Blended coffee, ice and cream, finished with a swirl.",
		price: 240,
		category: "beverages",
		image: coffee_default,
		vegetarian: true
	},
	{
		id: "oreo-shake",
		name: "Oreo Shake",
		description: "Thick shake blended with cookies and cream.",
		price: 230,
		category: "beverages",
		image: belgian_chocolate_default,
		vegetarian: true
	},
	{
		id: "brownie-shake",
		name: "Brownie Shake",
		description: "Walnut brownie blended into a decadent chocolate shake.",
		price: 250,
		category: "beverages",
		image: belgian_chocolate_default,
		vegetarian: true,
		bestseller: true
	}
];
var featuredProducts = [
	"classic-san-sebastian",
	"ny-classic",
	"ny-lotus-biscoff",
	"ny-pistachio",
	"nutella-cheesecake",
	"san-sebastian-belgian"
].map((id) => products.find((p) => p.id === id)).filter((p) => Boolean(p));
var formatPrice = (value) => `₹${value.toLocaleString("en-IN")}`;
//#endregion
//#region src/components/site/ProductCard.tsx
function ProductCard({ product, onSelect, featured, priority }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift", featured && "sm:col-span-2 sm:flex-row"),
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => onSelect(product),
			"aria-label": `View ${product.name}`,
			className: cn("relative block cursor-pointer overflow-hidden", featured ? "aspect-[4/3] sm:aspect-auto sm:w-1/2" : "aspect-[4/3]"),
			children: [
				/* @__PURE__ */ jsx("img", {
					src: product.image,
					alt: product.name,
					width: 1024,
					height: 1024,
					loading: priority ? "eager" : "lazy",
					decoding: "async",
					className: "size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
				}),
				product.signature && /* @__PURE__ */ jsx("span", {
					className: "absolute left-4 top-4 rounded-full bg-gradient-caramel px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-caramel-foreground",
					children: "Signature"
				}),
				!product.signature && product.bestseller && /* @__PURE__ */ jsx("span", {
					className: "absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur",
					children: "Bestseller"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("flex flex-1 flex-col p-6", featured && "sm:justify-center sm:p-9"),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: cn("font-display leading-tight text-primary", featured ? "text-2xl sm:text-3xl" : "text-xl"),
						children: product.name
					}), product.vegetarian && /* @__PURE__ */ jsxs("span", {
						title: "Vegetarian",
						className: "mt-1 inline-flex items-center gap-1 rounded-full border border-emerald-700/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest text-emerald-800",
						children: [/* @__PURE__ */ jsx(Leaf, {
							className: "size-3",
							"aria-hidden": "true"
						}), "Veg"]
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: cn("mt-3 text-sm leading-relaxed text-muted-foreground", featured && "sm:text-base"),
					children: product.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-xl text-primary",
						children: formatPrice(product.price)
					}), /* @__PURE__ */ jsx(Button, {
						variant: "order",
						size: "sm",
						onClick: () => onSelect(product),
						children: "Order Now"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/site/ProductDialog.tsx
/**
* Product detail experience. Quantity + size selection are modelled here so a
* future cart / checkout can consume the same state without a redesign.
*/
function ProductDialog({ product, onOpenChange }) {
	const [qty, setQty] = useState(1);
	const [sizeIndex, setSizeIndex] = useState(0);
	useEffect(() => {
		setQty(1);
		setSizeIndex(0);
	}, [product?.id]);
	if (!product) return null;
	const total = (product.sizes?.[sizeIndex]?.price ?? product.price) * qty;
	return /* @__PURE__ */ jsx(Dialog, {
		open: Boolean(product),
		onOpenChange,
		children: /* @__PURE__ */ jsx(DialogContent, {
			className: "max-h-[92vh] gap-0 overflow-y-auto rounded-2xl border-border bg-card p-0 sm:max-w-3xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid sm:grid-cols-2",
				children: [/* @__PURE__ */ jsx("img", {
					src: product.image,
					alt: product.name,
					width: 1024,
					height: 1024,
					loading: "lazy",
					decoding: "async",
					className: "h-56 w-full object-cover sm:h-full"
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ jsx(DialogTitle, {
								className: "font-display text-2xl leading-tight text-primary sm:text-3xl",
								children: product.name
							}), product.vegetarian && /* @__PURE__ */ jsxs("span", {
								className: "mt-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-700/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest text-emerald-800",
								children: [/* @__PURE__ */ jsx(Leaf, {
									className: "size-3",
									"aria-hidden": "true"
								}), "Veg"]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						product.sizes && /* @__PURE__ */ jsxs("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow",
								children: "Size"
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: product.sizes.map((s, i) => /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setSizeIndex(i),
									className: cn("cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors", i === sizeIndex ? "border-accent bg-accent/15 text-primary" : "border-border text-muted-foreground hover:border-accent/60"),
									children: s.label
								}, s.label))
							})]
						}),
						product.customisable && /* @__PURE__ */ jsx("p", {
							className: "mt-5 rounded-xl bg-secondary/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground",
							children: "Want a custom flavour, message on the cake or a special size? Call us and we'll bake it your way."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow",
								children: "Quantity"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1 rounded-full border border-border p-1",
								children: [
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": "Decrease quantity",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										className: "inline-flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-secondary",
										children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "w-8 text-center text-sm tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": "Increase quantity",
										onClick: () => setQty((q) => Math.min(20, q + 1)),
										className: "inline-flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-secondary",
										children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex items-baseline justify-between border-t border-border pt-5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Total"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-display text-2xl text-primary",
								children: formatPrice(total)
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex flex-col gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "order",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ jsx("a", {
									href: site.orderUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									children: "Add to Order"
								})
							}), /* @__PURE__ */ jsx(Button, {
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
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { formatPrice as a, featuredProducts as i, ProductCard as n, products as o, categories as r, ProductDialog as t };
