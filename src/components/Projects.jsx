import Project from "./Project";

export default function Projects() {
  return (
    <div className="mt-15">
      <h1 className="font-normal text-[1.8rem] mb-4">Few Projects</h1>
      <div className="flex flex-col gap-8">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="mt-10">
        <a className="underline font-thin" href="">
          View all work {"--->"}
        </a>
      </div>
    </div>
  );
}
