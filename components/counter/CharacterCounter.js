import { useRecoilState } from "recoil";
import { textState } from "../../lib/recoil/useTextCount";

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      {/* <CharacterCount /> */}
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1 className="mb-4">Character Counter</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="shadow"
        />
        <br />
        Echo: {text}
      </div>
    </div>
  );
}
