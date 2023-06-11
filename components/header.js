import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   { name: "Articles", href: "/blog" },
];

export default function Header() {
   const router = useRouter();

   return (
		<div className="py-4 sm:py-12 sm:pb-16">
			<div className="ml-[-0.60rem]">
					{navigation.map((item) => (
						<Link 
						className={classNames("inline-block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-bold", router.route === item.href ? "text-gray-900" : "")}
						aria-current={router.route === item.href ? "page" : undefined}
						href={item.href}
						key={item.name}
						>
							{item.name}
						</Link>
					))}
			</div>
		</div>
   );
}