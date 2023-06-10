import Link from "next/link";
import posts from '../posts.json';

export default function Posts() {

  return (
      <>
        <ul>
          {posts.posts.map((p) => (
            <li key={p.slug}>
              {/* <span className="block text-gray-500 w-[9.5rem] text-right">
                {p.date}
              </span> */}
              <Link href={p.slug}>
              <span className="block font-bold">{p.title}</span>
            </Link>
            </li>
          ))}
        </ul>
      </>
  );
}