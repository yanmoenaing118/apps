import { AiOutlineUpload } from "react-icons/ai";

export default function Header() {
  return (
    <header className="shadow-sm h-14 px-3">
      <div className="max-w-xl mx-auto h-full  flex items-center justify-between">
        <h1 className="font-bold text-lg text-slate-600">Capture Moments</h1>

        <button className="bg-slate-100 px-2.5 py-2 shadow text-sm capitalize flex items-center">
          <span className="mr-2">upload</span> <AiOutlineUpload size={16} />
        </button>
      </div>
    </header>
  );
}
