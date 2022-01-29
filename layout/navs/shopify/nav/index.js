import Link from "next/link";
import { useState } from "react/cjs/react.development";

export default function Navs({ list }) {
  return <LargeNavs list={list} />;
}

function LargeNavs({ list }) {
  return (
    <nav>
      <ul>
        {list && list.map((item) => <MegaMenu key={item.id} item={item} />)}
      </ul>

      <style jsx>{`
        ul {
          display: flex;
        }
      `}</style>
    </nav>
  );
}

function MegaMenu({ item }) {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => setOpen((preState) => !preState);

  return (
    <>
      <div className="layer" onClick={() => setOpen(false)}></div>
      <li onClick={handleMenuOpen}>
        <button>{item.title}</button>
        {/* <Link href="/">
        <a>{item.title}</a>
      </Link> */}
        {open && <MegaMenuChildren />}
      </li>
      <style jsx>{`
        .layer {
          background-color: transparent;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          background: pink;
        }
        li {
          position: relative;
          margin: 1em;
          border-bottom: 1px solid #ccc;
          z-index: 4;
        }

        li > a {
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
}

function MegaMenuChildren() {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ul>
        <li>test</li>
      </ul>

      <style jsx>{`
        div {
          position: absolute;
          top: 30px;
          z-index: 5;
          left: 0;
          background-color: #ddd;
          padding: 0.8em;
        }
      `}</style>
    </div>
  );
}
