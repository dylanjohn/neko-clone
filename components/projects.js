import Link from "next/link";
import posts from '../posts.json';

export default function Projects() {

  return (
    <>
      <ul className="space-y-4">
        {posts.posts.map((p) => (
          <li key={p.slug}>
            <Link href={p.slug}>
              <span className="block">{p.title}</span>
            </Link>
            <span className="block">
              {p.date}
            </span>
          </li>
        ))}
      </ul>
      
    </>
  );
}