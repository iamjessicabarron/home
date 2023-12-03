import Image from "next/image";
import { PropsWithChildren } from "react";

const Skill = ({
  children,
  context,
}: PropsWithChildren & { context?: string }) => (
  <li className="text-xs uppercase font-sans font-bold" data-tip={context}>
    {children}
  </li>
);

export default function Home() {
  return (
    <div className="bg-[#252525]">
      <div className="hero bg-[url('/bg.png')] bg-cover h-full max-w-7xl mx-auto">
        <div className="hero-content pt-24 pb-12 flex flex-col items-center max-w-3xl">
          {/* <h1 className="text-3xl">G&rsquo;day, I&rsquo;m Jess</h1> */}
          <Image
            width={800}
            height={800}
            className="w-full mx-auto pl-16 "
            src="/greeting.svg"
            alt={"G'day, I'm Jess"}
          />
          <div className="w-3/4 mx-auto text-center">
            <p className="text-gray-200 text-lg sm:text-2xl ">
              I&rsquo;m an Aussie <span className="font-sans">🇦🇺</span> Software
              Developer based in London. I've been mucking about on computers
              for as long as I can remember.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 bg-[url('/seamless-paper.jpg')]">
        <div className="w-full h-full bg-[url('/seamless-rip.png')] bg-repeat-x mix-blend-darken"></div>
      </div>
      <div className="bg-[url('/seamless-paper.jpg')] text-center text-lg w-full mx-auto pb-24">
        <p className="">
          I&rsquo;m an experienced web developer with solid foundations in{" "}
          <span className="bold">HTML</span>, <span className="bold">CSS</span>{" "}
          and <span className="bold">JavaScript</span>.
        </p>
        <div className="divider w-1/4 mx-auto"></div>
        <p className="pb-1">
          These are a few of my favourite things to build with
        </p>
        <ul className=" flex flex-wrap gap-x-4 justify-center">
          <Skill>ReactJS</Skill>
          <Skill>TypeScript</Skill>
          <Skill>NodeJS</Skill>
          <Skill>NextJS</Skill>
          <Skill>Tailwind</Skill>
          <Skill>Jest</Skill>
          <Skill>React Testing Library</Skill>
        </ul>
        <p className="pt-4 pb-1">But I have also built with</p>
        <ul className="flex flex-wrap gap-x-4 justify-center">
          <Skill>Wordpress</Skill>
          <Skill>Shopify</Skill>
          <Skill context="ReactJS State Management">Redux</Skill>
          <Skill context="HTML Templating">Pug/Jade</Skill>
          <Skill context="CSS Library">Sass</Skill>
          <Skill context="JS Testing Stack">Mocha/Chai</Skill>
          <Skill context="JS Testing Library">Cypress</Skill>
        </ul>
        <p className="pt-4 pb-1">
          I&rsquo;ve also dabbled outside of front end web development with
        </p>
        <ul className="flex flex-wrap gap-x-4 justify-center">
          <Skill>SQL</Skill>
          <Skill>PHP</Skill>
          <Skill>Bash</Skill>
          <Skill>Golang</Skill>
          <Skill>Swift</Skill>
        </ul>
        <p className="pt-4">With these tools and processes</p>
        <ul className="flex flex-wrap gap-x-4 justify-center">
          <Skill>Git</Skill>
          <Skill>Docker</Skill>
          <Skill>Test Driven Development</Skill>
          <Skill>CI/CD</Skill>
        </ul>
        <p className="pt-4 pb-1">
          And aided with assets and designs created with these tools
        </p>
        <ul className="flex flex-wrap gap justify-center">
          <Skill>Adobe Creative Suite</Skill>
          <Skill>Affinity Suite</Skill>
          <Skill>Figma</Skill>
        </ul>
      </div>
      <footer className="footer mx-auto p-12 max-w-6xl text-white items-center justify-center gap-8">
        <Image
          width={200}
          height={200}
          className="mx-auto mask mask-circle text-right"
          src="/headshot-500.png"
          alt={"G'day, I'm Jess"}
        />
        <div className="">
          <Image
            width={300}
            height={300}
            className="w-full mx-auto"
            src="/logo-simple.svg"
            alt={"Jessica Barron"}
          />
          <h2 className="text-xl">Frontend Developer: ReactJS, TypeScript</h2>
          <br />
          <p className="underline">
            <a href="https://www.linkedin.com/in/iamjessicabarron/">
              Find me on LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
