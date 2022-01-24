export default function Navs({ list }) {
  function onHover(e) {
    e.target.nextSibling.style.display = "flex";
  }

  function onLeave(e) {
    e.target.nextSibling.style.display = "none";
  }
  return (
    <ul className="shadow">
      {list.map((list) => (
        <li className="shadow-sm" key={list.id}>
          <p onMouseOver={onHover} onMouseOut={onLeave}>
            {list.name}
          </p>
          <NavItems list={list.children} />
        </li>
      ))}

      <style jsx>{`
        ul {
          display: flex;
          height: 60px;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }

        ul > li {
          margin: 0 20px;
          padding: 0.3em 0.4em;
          cursor: pointer;
          position: relative;
        }

        ul > li > p + ul {
          color: red;
        }

        ul > li > p:hover + ul {
          color: red;
          display: flex;
        }
      `}</style>
    </ul>
  );
}

function NavItems({ list }) {
  console.log("children", list);
  return (
    <ul>
      {list.map((list) => (
        <li key={list.id}>
          {list.name}
          <ul>
            {list.children.map((li) => (
              <li key={li.id}>{li.name}</li>
            ))}
          </ul>
        </li>
      ))}

      <style jsx>{`
        ul {
          position: absolute;
          top: 100%;
          left: 0;
          width: 320px;
          height: 400x;
          display: none;
          flex-wrap: wrap;
          background: gray;
          color: #fff;
          border-left: 1px solid #fff;
        }

        ul > li {
          padding: 0.4em;
        }
      `}</style>
    </ul>
  );
}
