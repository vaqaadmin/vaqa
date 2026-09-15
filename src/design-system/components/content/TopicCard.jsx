import React from "react";

/* Image-less variant of ValueCard.jsx, for use where no photography is available. */
export function TopicCard({ title, body, href, style, ...rest }) {
	const [hover, setHover] = React.useState(false);
	const Tag = href ? "a" : "article";
	return (
		<Tag
			href={href}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "var(--space-3)",
				background: "var(--surface-card)",
				border: "var(--border-hairline) solid var(--border-subtle)",
				borderRadius: "var(--radius-lg)",
				padding: "var(--space-6)",
				textDecoration: "none",
				color: "inherit",
				boxShadow: hover ? "var(--shadow-lifted)" : "var(--shadow-card)",
				transform: hover ? "translateY(-4px)" : "none",
				transition:
					"box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out)",
				...style,
			}}
			{...rest}
		>
			<h3 style={{ fontSize: "var(--text-h4)", margin: 0, color: "var(--text-primary)" }}>{title}</h3>
			<p
				style={{
					margin: 0,
					fontWeight: "var(--weight-light)",
					lineHeight: "var(--leading-loose)",
					color: "var(--text-secondary)",
				}}
			>
				{body}
			</p>
		</Tag>
	);
}
