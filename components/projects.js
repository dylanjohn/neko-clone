import Link from "next/link";
import posts from '../posts.json';

export default function Projects() {

  return (
    <>
      <div className="space-y-12">
        {posts.posts.map((p) => (
          <div key={p.slug} className="p-8 border border-gray-300 rounded-md h-64">
            <Link href={p.slug}>
              <span className="block">{p.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}