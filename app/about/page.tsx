import Link from 'next/link';

const Page = () => {
	return (
		<div>
			<h1>About page</h1>
			{/* 
				기본 라우팅
				about이라는 폴더 아래에 page.tsx라는 파일을 만들어서
				'http://localhost:3000/about' 경로에서 페이지 확인 가능
			*/}

			<Link href="/">Return Home</Link>
			<Link href="/about/company">Company</Link>
		</div>
	);
};

export default Page;
