import Link from "next/link";
import posts from '../posts.json';

export default function Posts() {

  return (
    <>
      <ul className="flat">
        {posts.posts.map((p) => (
          <li key={p.slug}>
            <Link href={p.slug}>
              <span className="block">{p.title}</span>
            </Link>
            <span className="block text-gray-500">
              {p.date}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}