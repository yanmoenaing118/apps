import Select from "./Select";

const sortByOptions = [
  {
    text: "Latest",
    value: "latest",
  },
  {
    text: "Oldest",
    value: "oldest",
  },

  {
    text: "Title",
    value: "title",
  },
];

export default function Filter() {
  return (
    <div className="max-w-xl mx-auto p-2 bg-slate-100 my-4">
      <Select
        options={sortByOptions}
        onSelect={(v) => console.log("Sort by", v)}
      />
    </div>
  );
}
