import Link from 'next/link';
import React from 'react';

type Props = {
	text: string;
	link?: string;
	title: string;
}

function TextDefilant({text,link,title}: Props) {
	return (
		<Link
			href={link || "#"}
			target={link ? "_blank" : undefined}
			rel="noopener noreferrer"
			className="mr-20 flex-shrink-0 lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-white font-extrabold text-transparent sm:text-md font-figtree"
		>
			<span className="uppercase text-4xl mr-1">{title}</span>
			{/* {text} */}
		</Link>
	);
}

export default TextDefilant;