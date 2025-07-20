export default function Project() {
  return (
    <div className="w-full h-auto flex flex-col border-1 border-white rounded-lg py-6 pl-5 pr-8 gap-3">
      <h2 className="text-2xl font-semibold">Title of the Project</h2>
      <h3 className="text-lg opacity-75 mb-2">
        Description of the Project Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aut, totam assumenda! Dolores veritatis similique
        error ex est. Consectetur, voluptas inventore?
      </h3>
      <div className="flex-row flex gap-4 text-[12px] mb-2">
        <button className="border-1 border-white px-[12px] py-[2px] rounded-sm">
          Express
        </button>
        <button className="border-[1px] border-white px-[12px] py-[2px] rounded-sm">
          Node
        </button>
        <button className="border-1 border-white px-[12px] py-[2px] rounded-sm">
          React
        </button>
        <button className="border-1 border-white px-[12px] py-[2px] rounded-sm">
          MongoDB
        </button>
      </div>
      <div className="flex-row underline flex gap-4 text-[1rem]">
        <a href="">Link 1</a>
        <a href="">Link 2</a>
      </div>
    </div>
  );
}
