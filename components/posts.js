import Link from "next/link";
import posts from '../posts.json';

export default function Posts() {

  return (
      <>
        <ul>
          {posts.posts.map((p) => (
            <li key={p.slug}>
              <span className="block">
                {p.date}
              </span>
              <Link href={p.slug}>
              <span className="block">{p.title}</span>
            </Link>
            </li>
          ))}
        </ul>
      </>
  );
}