import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-primary/25 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
			ghost: "hover:bg-secondary hover:text-secondary-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			order: "bg-gradient-caramel text-caramel-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
			cocoa: "bg-cocoa text-cocoa-foreground hover:bg-cocoa/90 hover:-translate-y-0.5",
			onCocoa: "border border-cocoa-foreground/30 bg-transparent text-cocoa-foreground hover:bg-cocoa-foreground/10"
		},
		size: {
			default: "h-10 px-5 py-2 tracking-wide",
			sm: "h-9 px-4 text-xs tracking-wide",
			lg: "h-12 px-8 text-[0.95rem] tracking-wide",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/data/site.ts
/**
* Single source of truth for business details.
* Edit here to update the whole website.
*/
var site = {
	name: "San Sebastian Cafe & Cheesecakes",
	shortName: "San Sebastian",
	tagline: "Pune's little corner for cheesecake, coffee & everything indulgent.",
	phoneDisplay: "+91 98503 76378",
	phoneHref: "tel:+919850376378",
	address: {
		line1: "Shop 3, Ground Floor, Dwarkadheesh Row House",
		line2: "Co-Operative Housing Society, Ward 27",
		line3: "Kunal Icon Road, Pimple Saudagar",
		city: "Pune",
		state: "Maharashtra",
		postalCode: "411027",
		country: "IN"
	},
	area: "Pimple Saudagar, Pune",
	/** Swap this for a direct-ordering route once online ordering ships. */
	orderUrl: "https://www.zomato.com/pune/san-sebastian-cafe-cheesecakes-pimple-saudagar",
	directionsUrl: "https://www.google.com/maps/search/?api=1&query=San+Sebastian+Cafe+%26+Cheesecakes+Kunal+Icon+Road+Pimple+Saudagar+Pune",
	mapEmbedUrl: "https://www.google.com/maps?q=San+Sebastian+Cafe+%26+Cheesecakes+Kunal+Icon+Road+Pimple+Saudagar+Pune+411027&output=embed",
	social: {
		instagram: "https://www.instagram.com/",
		facebook: "https://www.facebook.com/"
	},
	/** Editable — update opening hours here. */
	hours: [{
		days: "Monday – Thursday",
		time: "11:00 AM – 11:00 PM"
	}, {
		days: "Friday – Sunday",
		time: "11:00 AM – 11:30 PM"
	}],
	services: ["Takeaway", "Home Delivery"]
};
var fullAddress = [
	site.address.line1,
	site.address.line2,
	site.address.line3,
	`${site.address.city}, ${site.address.state} ${site.address.postalCode}`
].join(", ");
//#endregion
export { cn as i, site as n, Button as r, fullAddress as t };
