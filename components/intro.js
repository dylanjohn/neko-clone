import Link from "next/link";
import Image from 'next/image';

export default function Intro() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col pr-8">
          <h1 className="!mb-0">Hello World</h1>
          <span>Full Stack Web Developer</span>
          <p>
            Aliquam sit amet nulla eu massa tristique<br />
            Making web applications with Next.js / Astro
          </p>
        </div>
        <div className="w-36 relative">
          <Image src="/dylanjohn-dev/images/kyoya.jpg" alt="Example Image" width={300} height={300} className="rounded-full !mt-0"/>
        </div>
      </div>
    </>
  );
}