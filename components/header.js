import Link from "next/link";
import { useRouter } from "next/router";
import Toggle from './toggle';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "Articles", href: "/blog" },
   { name: "About", href: "/about" },
];

export default function Header() {
   const router = useRouter();

   return (
	<div className="navbar py-6 pb-12 sm:py-12 sm:pb-16 flex items-center justify-between">
		<div className="ml-[-0.60rem]">
			{navigation.map((item) => (
				<Link
				key={item.name}
				href={item.href}
				className={classNames(
					"inline-block px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors no-underline",
					item.href === "/" ? router.pathname === item.href ? "text-gray-900" : "" : router.asPath.startsWith(item.href) ? "text-gray-900" : ""
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