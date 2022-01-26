import Link from "next/link";
import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Navs({ list }) {
  return (
    <nav className="shadow-sm">
      {list && (
        <ul>
          {list.map((item, idx) => {
            return (
              <li key={item.id}>
                <MegaMenu
                  name={item.name}
                  slug={item.slug}
                  list={item.children}
                  right={list.length - 1 === idx}
                />
              </li>
            );
          })}
        </ul>
      )}

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: center;
          height: 32px;
        }

        ul {
          display: flex;
          height: 32px;
          position: relative;
        }

        li {
          margin: 0 16px;
          position: relative;
        }
      `}</style>
    </nav>
  );
}

function MegaMenu({ name, slug, list, right }) {
  const [open, setOpen] = useState(false);

  function handleMouseOver() {
    setOpen(true);
  }

  function handleMouseLeave() {
    setOpen(false);
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Link href={`/categories/${slug}`}>
        <a>{name}</a>
      </Link>
      {open && <Categories list={list} parent={slug} />}

      <style jsx>{`
        div {
          height: 32px;
          width: 100%;
          position: relative;
        }
      `}</style>
    </div>
  );
}

function Categories({ list, parent, right }) {
  const [width, setWidth] = useState(200);
  const menuEl = useRef();

  useEffect(() => {
    calcWidth();
  }, []);

  function calcWidth() {
    if (!menuEl?.current?.children) return;
    const ideaHeight = 330;
    let height = 0;
    for (let child of menuEl?.current?.children) {
      const domRect = child.getBoundingClientRect();
      height +=
        domRect.height > Math.round(ideaHeight / 2)
          ? ideaHeight
          : domRect.height;
    }
    const count = Math.ceil(height / ideaHeight);
    setWidth(220 * Math.max(count, 1));
  }
  return (
    <ul ref={menuEl} className="sub-cat">
      {list.map((item) => (
        <li key={item.id}>
          <Link href={`/categories/${parent}/${item.slug}`}>
            <a>{item.name}</a>
          </Link>
          <Category
            name={item.name}
            slug={item.slug}
            parent={parent}
            list={item.children}
          />
        </li>
      ))}
      <style jsx>{`
        .sub-cat {
          position: absolute;
          width: ${width}px;
          max-height: 340px;
          display: flex;
          flex-flow: column wrap;
          width: ${width}px;
          overflow: hidden;
          top: 28px;
          left: ${right} ? 'auto' : 0;
          background: #fff;
          --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.4);
          --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

          padding: 8px;
        }

        li {
          font-size: 1rem;
        }
      `}</style>
    </ul>
  );
}

function Category({ parent, slug, list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>
          <Link href={`/categories/${parent}/${slug}/${item.slug}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        li {
          color: green;
          font-size: 0.85rem;
          padding: 0.1em 0;
        }
      `}</style>
    </ul>
  );
}
