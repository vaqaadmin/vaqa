export interface AdvisoryTopic {
	slug: string;
	title: string;
	summary: string;
	description: string;
}

export const advisoryTopics: AdvisoryTopic[] = [
	{
		slug: 'board-advisory',
		title: 'Board Advisory',
		summary: 'Governance, strategic decision-making, and a steady hand in the boardroom.',
		description:
			'I sit alongside founders and leadership teams as a board advisor, bringing an operator’s perspective to governance, reporting, and the big calls that shape a business.',
	},
	{
		slug: 'growth',
		title: 'Growth',
		summary: 'Finding and compounding the levers that actually move the business forward.',
		description:
			'I help leadership teams identify the growth levers that matter — acquisition, retention, pricing, expansion — and build the operating rhythm to compound them.',
	},
	{
		slug: 'go-to-market',
		title: 'Go-to-Market',
		summary: 'Positioning, launch strategy, and the plan to get a product in front of the right people.',
		description:
			'From positioning to channel strategy, I work with teams to shape go-to-market plans that are grounded in how the business actually sells and scales.',
	},
	{
		slug: 'ai-implementation',
		title: 'AI Implementation',
		summary: 'Practical AI adoption — what to build, what to buy, and what to ignore.',
		description:
			'I advise leadership teams on where AI genuinely changes the economics of a business, and how to implement it practically across product, ops, and go-to-market.',
	},
	{
		slug: 'operational-efficiency',
		title: 'Operational Efficiency',
		summary: 'Operating playbooks, process, and org design that scale without adding friction.',
		description:
			'I help teams build the operating playbooks and org design that let a business scale without the process overhead that usually comes with it.',
	},
	{
		slug: 'finance-and-fundraising',
		title: 'Finance and Fundraising',
		summary: 'Fundraising narratives, investor relations, and the financial planning behind them.',
		description:
			'Drawing on first-hand fundraising and exit experience, I help founders build the narrative, numbers, and investor relationships behind a successful raise.',
	},
];
