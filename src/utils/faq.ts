export interface Faq {
	question: string;
	answer: string;
}

const FAQ_HEADING = '## Frequently Asked Questions';
const BIO_MARKER = 'Tom Batting is a Forbes 30 Under 30 entrepreneur';

function toPlainText(markdown: string): string {
	return markdown
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/\*([^*]+)\*/g, '$1')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Parses the "## Frequently Asked Questions" section of a post's raw markdown body into Q/A pairs. */
export function parseFaqs(markdown: string): Faq[] {
	const start = markdown.indexOf(FAQ_HEADING);
	if (start === -1) return [];

	let section = markdown.slice(start + FAQ_HEADING.length);
	const bioIndex = section.indexOf(BIO_MARKER);
	if (bioIndex !== -1) {
		section = section.slice(0, bioIndex);
	}

	return section
		.split(/\n###\s+/)
		.slice(1)
		.map((block) => {
			const newlineIndex = block.indexOf('\n');
			const question = block.slice(0, newlineIndex).trim();
			const answer = toPlainText(block.slice(newlineIndex + 1));
			return { question, answer };
		})
		.filter((faq) => faq.question && faq.answer);
}
