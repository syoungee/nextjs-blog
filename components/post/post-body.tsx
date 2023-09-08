import parse from 'html-react-parser';
import Image from 'next/image';
// parsing images as next image

const PostBody = ({ body }: { body: string }) => {
	const getParsedHTML = (body: string) => {
		return parse(body);
	};
	const options = {
		replace: (domNode) => {
			if (domNode instanceof Element && domNode.attribs) {
				if (domNode.name === 'img') {
					const { src, alt } = domNode.attribs;
					return (
						<Image
							className="rounded-md w-full object-cover object-center my-3 h-auto max-h-[300px] md:max-h-[500px]"
							src={src}
							alt={alt}
							width={1200}
							height={620}
						></Image>
					);
				}
			}
		},
	};

	return <div className="rich-text">{getParsedHTML(body)}</div>;
};

export default PostBody;
