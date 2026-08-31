import { i as cn, n as site, r as Button, t as fullAddress } from "./site-DzVDM_sD.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Facebook, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/san-sebastian/assets/styles-CGJV-Aa7.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	try {
		console.error("Runtime error captured:", {
			error,
			context,
			path: window.location.pathname
		});
	} catch {}
}
//#endregion
//#region src/components/site/Header.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "Our Story"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => setOpen(false), [pathname]);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("sticky top-0 z-50 transition-all duration-500", scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "group flex flex-col leading-none",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-xl tracking-tight text-primary sm:text-2xl",
						children: "San Sebastian"
					}), /* @__PURE__ */ jsx("span", {
						className: "eyebrow mt-1 text-[0.6rem] sm:text-[0.65rem]",
						children: "Cafe & Cheesecakes"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-8 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full data-[status=active]:text-primary data-[status=active]:after:w-full",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ jsxs("a", {
						href: site.phoneHref,
						className: "flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary",
						children: [/* @__PURE__ */ jsx(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), site.phoneDisplay]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "order",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ jsx("a", {
							href: site.orderUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Order Now"
						})
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					className: "inline-flex size-10 items-center justify-center rounded-full border border-border text-primary lg:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background/98 backdrop-blur lg:hidden",
			children: /* @__PURE__ */ jsxs("nav", {
				"aria-label": "Mobile",
				className: "mx-auto flex max-w-7xl flex-col px-5 py-3",
				children: [nav.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					activeOptions: { exact: item.to === "/" },
					className: "border-b border-border/60 py-3.5 font-display text-xl text-primary/80 data-[status=active]:text-primary",
					children: item.label
				}, item.to)), /* @__PURE__ */ jsxs("a", {
					href: site.phoneHref,
					className: "flex items-center gap-2 py-4 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}), site.phoneDisplay]
				})]
			})
		})]
	});
}
function MobileOrderBar() {
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/92 px-4 py-3 backdrop-blur-md lg:hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "lg",
				className: "flex-1",
				asChild: true,
				children: /* @__PURE__ */ jsxs("a", {
					href: site.phoneHref,
					children: [/* @__PURE__ */ jsx(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Call"]
				})
			}), /* @__PURE__ */ jsx(Button, {
				variant: "order",
				size: "lg",
				className: "flex-[1.6]",
				asChild: true,
				children: /* @__PURE__ */ jsx("a", {
					href: site.orderUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: "Order Now"
				})
			})]
		})
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var quickLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "Our Story"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-cocoa text-cocoa-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-1",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl",
								children: "San Sebastian"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow mt-2 text-cocoa-foreground/60",
								children: "Cafe & Cheesecakes"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-xs text-sm leading-relaxed text-cocoa-foreground/70",
								children: site.tagline
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex gap-3",
								children: [/* @__PURE__ */ jsx("a", {
									href: site.social.instagram,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "Instagram",
									className: "inline-flex size-10 items-center justify-center rounded-full border border-cocoa-foreground/20 transition-colors hover:border-accent hover:text-accent",
									children: /* @__PURE__ */ jsx(Instagram, { className: "size-4" })
								}), /* @__PURE__ */ jsx("a", {
									href: site.social.facebook,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "Facebook",
									className: "inline-flex size-10 items-center justify-center rounded-full border border-cocoa-foreground/20 transition-colors hover:border-accent hover:text-accent",
									children: /* @__PURE__ */ jsx(Facebook, { className: "size-4" })
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "eyebrow text-cocoa-foreground/60",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: quickLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: l.to,
							className: "text-cocoa-foreground/75 transition-colors hover:text-accent",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "eyebrow text-cocoa-foreground/60",
						children: "Contact"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-5 space-y-4 text-sm text-cocoa-foreground/75",
						children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: site.phoneHref,
							className: "flex items-center gap-2 transition-colors hover:text-accent",
							children: [/* @__PURE__ */ jsx(Phone, {
								className: "size-4 shrink-0",
								"aria-hidden": "true"
							}), site.phoneDisplay]
						}) }), /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, {
								className: "mt-0.5 size-4 shrink-0",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsxs("address", {
								className: "not-italic leading-relaxed",
								children: [
									site.address.line1,
									",",
									/* @__PURE__ */ jsx("br", {}),
									site.address.line2,
									",",
									/* @__PURE__ */ jsx("br", {}),
									site.address.line3,
									",",
									/* @__PURE__ */ jsx("br", {}),
									site.address.city,
									", ",
									site.address.state,
									" ",
									site.address.postalCode
								]
							})]
						})]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "eyebrow text-cocoa-foreground/60",
							children: "Craving something?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 font-display text-2xl leading-snug",
							children: "Order your favourite, freshly baked."
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "order",
							size: "lg",
							className: "mt-6 w-full sm:w-auto",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: site.orderUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								children: "Order Your Favourite"
							})
						})
					] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 flex flex-col gap-2 border-t border-cocoa-foreground/12 pt-6 text-xs text-cocoa-foreground/50 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ jsxs("p", { children: [
					site.services.join(" · "),
					" · ",
					site.area
				] })]
			})]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-2xl text-primary",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page seems to have been eaten. Let's get you back to dessert."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex cursor-pointer items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "San Sebastian Cafe & Cheesecakes | Cheesecakes & Desserts in Pimple Saudagar, Pune" },
			{
				name: "description",
				content: "Discover freshly baked cheesecakes, desserts, pastries, coffee and indulgent treats at San Sebastian Cafe & Cheesecakes in Pimple Saudagar, Pune."
			},
			{
				property: "og:site_name",
				content: site.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#f6f1e7"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Bakery",
				name: site.name,
				description: "Dessert-focused bakery in Pimple Saudagar, Pune serving cheesecakes, desserts, bakery treats and coffee.",
				servesCuisine: [
					"Bakery",
					"Desserts",
					"Cheesecakes",
					"Coffee"
				],
				telephone: "+919850376378",
				priceRange: "₹₹",
				address: {
					"@type": "PostalAddress",
					streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
					addressLocality: site.address.city,
					addressRegion: site.address.state,
					postalCode: site.address.postalCode,
					addressCountry: site.address.country
				},
				areaServed: fullAddress,
				hasMenu: "/menu",
				acceptsReservations: false
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1 pb-20 lg:pb-0",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(MobileOrderBar, {})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$4 = () => import("./routes-sk9al0m_.js");
var Route$4 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "San Sebastian Cafe & Cheesecakes | Cheesecakes & Desserts in Pimple Saudagar, Pune" },
			{
				name: "description",
				content: "Discover freshly baked cheesecakes, desserts, pastries, coffee and indulgent treats at San Sebastian Cafe & Cheesecakes in Pimple Saudagar, Pune."
			},
			{
				property: "og:title",
				content: "San Sebastian Cafe & Cheesecakes | Pimple Saudagar, Pune"
			},
			{
				property: "og:description",
				content: "Freshly baked cheesecakes, indulgent desserts and coffee — made for the moments that deserve something sweet."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-C-iKZ9Y0.js");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "Our Story | San Sebastian Cafe & Cheesecakes, Pimple Saudagar" },
			{
				name: "description",
				content: "A dessert-focused bakery in Pimple Saudagar, Pune — cheesecakes baked with obsession, premium ingredients and eggless options, served with love."
			},
			{
				property: "og:title",
				content: "Our Story | San Sebastian Cafe & Cheesecakes"
			},
			{
				property: "og:description",
				content: "Baked with obsession, served with love — cheesecakes, desserts, bakery treats and coffee in Pimple Saudagar, Pune."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-8l5hkt9n.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Visit Us | San Sebastian Cafe & Cheesecakes, Pune" },
			{
				name: "description",
				content: "Find San Sebastian Cafe & Cheesecakes on Kunal Icon Road, Pimple Saudagar, Pune 411027. Call +91 98503 76378 for takeaway, delivery and custom cake orders."
			},
			{
				property: "og:title",
				content: "Come Find Us | San Sebastian Cafe & Cheesecakes"
			},
			{
				property: "og:description",
				content: "Kunal Icon Road, Pimple Saudagar, Pune. Takeaway and home delivery — call +91 98503 76378."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$1 = () => import("./gallery-CN1Ee4we.js");
var Route$1 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery | San Sebastian Cafe & Cheesecakes, Pimple Saudagar" },
			{
				name: "description",
				content: "A close-up look at our cheesecakes, desserts, bakery treats and coffee at San Sebastian Cafe & Cheesecakes in Pimple Saudagar, Pune."
			},
			{
				property: "og:title",
				content: "Gallery | San Sebastian Cafe & Cheesecakes"
			},
			{
				property: "og:description",
				content: "Cheesecakes, desserts, bakery and coffee — photographed up close."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
/** Replace `src` with real photography — the layout adapts automatically. */
//#endregion
//#region src/routes/menu.tsx
var $$splitComponentImporter = () => import("./menu-Dadg9Hde.js");
var Route = createFileRoute("/menu")({
	head: () => ({
		meta: [
			{ title: "Menu — Cheesecakes, Desserts & Coffee | San Sebastian, Pune" },
			{
				name: "description",
				content: "Browse the full San Sebastian Cafe & Cheesecakes menu: baked cheesecakes, bento cakes, bomboloni, brownies, pastries, coffee and shakes in Pimple Saudagar, Pune."
			},
			{
				property: "og:title",
				content: "Menu | San Sebastian Cafe & Cheesecakes"
			},
			{
				property: "og:description",
				content: "Baked cheesecakes, bento cakes, desserts, bakery treats and coffee — something for every sweet craving."
			},
			{
				property: "og:url",
				content: "/menu"
			}
		],
		links: [{
			rel: "canonical",
			href: "/menu"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	GalleryRoute: Route$1.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$5
	}),
	MenuRoute: Route.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		basepath: "/san-sebastian/",
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
