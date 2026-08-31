import { n as site, r as Button, t as fullAddress } from "./site-DzVDM_sD.js";
import { t as Reveal } from "./Reveal-DDv1-tWA.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, MapPin, Navigation, Phone, ShoppingBag } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-gradient-warm",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24",
			children: /* @__PURE__ */ jsxs(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Contact / Visit Us"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-5xl leading-tight text-primary sm:text-6xl",
						children: "Come Find Us"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-lg leading-relaxed text-muted-foreground",
						children: "We're tucked away on Kunal Icon Road in Pimple Saudagar — currently serving takeaway and home delivery."
					})
				]
			})
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_1.15fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("article", {
						className: "rounded-2xl border border-border/70 bg-card p-8 shadow-soft",
						children: [
							/* @__PURE__ */ jsx(MapPin, {
								className: "size-5 text-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-4 font-display text-2xl text-primary",
								children: site.name
							}),
							/* @__PURE__ */ jsxs("address", {
								className: "mt-4 not-italic text-sm leading-relaxed text-muted-foreground",
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
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "cocoa",
								size: "lg",
								className: "mt-6",
								asChild: true,
								children: /* @__PURE__ */ jsxs("a", {
									href: site.directionsUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									children: [/* @__PURE__ */ jsx(Navigation, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Get Directions"]
								})
							})
						]
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsxs("article", {
							className: "rounded-2xl border border-border/70 bg-card p-8 shadow-soft",
							children: [
								/* @__PURE__ */ jsx(Phone, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-2xl text-primary",
									children: "Call to Order"
								}),
								/* @__PURE__ */ jsx("a", {
									href: site.phoneHref,
									className: "mt-3 inline-block font-display text-3xl text-primary underline-offset-4 hover:text-accent",
									children: site.phoneDisplay
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "Custom cakes, bulk dessert orders and cake messages — just ask."
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "order",
									size: "lg",
									className: "mt-6",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: site.orderUrl,
										target: "_blank",
										rel: "noreferrer noopener",
										children: [/* @__PURE__ */ jsx(ShoppingBag, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Order Online"]
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ jsxs("article", {
							className: "rounded-2xl border border-border/70 bg-card p-8 shadow-soft",
							children: [
								/* @__PURE__ */ jsx(Clock, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-2xl text-primary",
									children: "Hours"
								}),
								/* @__PURE__ */ jsx("dl", {
									className: "mt-4 space-y-2.5 text-sm",
									children: site.hours.map((h) => /* @__PURE__ */ jsxs("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ jsx("dt", {
											className: "text-muted-foreground",
											children: h.days
										}), /* @__PURE__ */ jsx("dd", {
											className: "text-primary",
											children: h.time
										})]
									}, h.days))
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-5 text-xs text-muted-foreground",
									children: [site.services.join(" · "), " · No seating available"]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ jsx(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full min-h-[26rem] overflow-hidden rounded-2xl border border-border/70 shadow-soft",
					children: /* @__PURE__ */ jsx("iframe", {
						title: `Map showing ${site.name} at ${fullAddress}`,
						src: site.mapEmbedUrl,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "size-full min-h-[26rem] border-0"
					})
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
