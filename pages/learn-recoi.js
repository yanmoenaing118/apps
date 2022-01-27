import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CharacterCounter from "../components/counter/CharacterCounter";
import { charCountState, textState } from "../lib/recoil/useTextCount";

export default function RecoilPage() {
  const [text] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const [bg, setBg] = useState("pink");

  useEffect(() => {
    setBg(bg === "pink" ? "lightgreen" : "pink");
  }, [text]);

  return (
    <div
      className="max-w-md mx-auto mt-10"
      style={{
        backgroundColor: bg,
      }}
    >
      <CharacterCounter />
      <strong>No. Chars: {count}</strong>
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
      <DisplayText />
    </div>
  );
}

function DisplayText() {
  const [text] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  return (
    <div className="shadow mt-3 bg-slate-100">
      <h1 className="bg-green-200 inline-block">{text}</h1>
      <p>No.chars: {count}</p>
    </div>
  );
}
