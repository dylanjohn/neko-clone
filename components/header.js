import Link from "next/link";
import { useRouter } from "next/router";
import Toggle from './toggle';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "Blog", href: "/blog" },
   { name: "Projects", href: "/projects" },
   { name: "About", href: "/about" },
];

export default function Header() {
   const router = useRouter();

   return (
	<div className="navbar py-6 pb-12 sm:py-12 sm:pb-16 flex justify-between items-center">
		
	{/* <span className="nav-brand">
		<Link className="text-gray-950 hover:text-gray-950 no-underline" href="/">Dylan Prehn</Link>	
	</span> */}

	<div className="ml-[-0.75rem] mr-4">
		{navigation.map((item) => (
			<Link
			key={item.name}
			href={item.href}
			className={classNames(
				"inline-block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors no-underline",
				item.href === "/"
				? router.pathname === item.href
					? "text-gray-950 font-semibold hover:text-gray-950"
					: "text-gray-500 hover:text-gray-600"
				: router.asPath.startsWith(item.href)
				? "text-gray-950 font-semibold hover:text-gray-950"
				: "text-gray-500 hover:text-gray-600"
			)}
			aria-current={router.pathname === item.href ? "page" : undefined}
			>
			{item.name}
			</Link>
		))}
	</div>
	<Toggle />
		
	</div>
   );
}