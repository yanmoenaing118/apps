export default function Select({ options, onSelect }) {
  function onChangeHandler(e) {
    onSelect(e.target.value);
  }
  return (
    <select onChange={onChangeHandler}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
}
