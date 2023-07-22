import Link from "next/link";
import Image from 'next/image';

export default function Intro() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="flex flex-col pr-8">
          <h1 className="">Hello World</h1>
          {/* <p className="lead !mt-2">Full Stack Web Developer</p> */}
          <p className="max-w-md !mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.<br />
            Get in touch via email <a href="mailto:hi@dylanjohn.dev">hi@dylanjohn.dev.</a>
          </p>
         
        </div>
        <div className="w-36 relative mb-6 lg:mb-0">
          <Image src="/dylanjohn-dev/images/kyoya.jpg" alt="Example Image" width={300} height={300} className="rounded-full !mt-0 !mb-0"/>
        </div>
      </div>
    </>
  );
}