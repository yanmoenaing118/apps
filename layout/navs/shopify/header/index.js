import Navs from "../nav";
import Logo from "./Logo";
import Button from "./Button";

const navListLeft = [
  {
    id: 1,
    title: "start",
    link: "start",
    children: [],
  },
  {
    id: 2,
    title: "sell",
    link: "sell",
    children: [],
  },
  {
    id: 3,
    title: "market",
    link: "market",
    children: [],
  },
  {
    id: 4,
    title: "manage",
    link: "manage",
    children: [],
  },
];

const navListRight = [
  {
    id: 1,
    title: "pricing",
    link: "pricing",
    children: [],
  },
  {
    id: 2,
    title: "learn",
    link: null,
    children: [],
  },
  {
    id: 3,
    title: "log in",
    link: "login",
    children: [],
  },
];

export default function ShopifyHeader() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="left">
          <Logo />
          <Navs list={navListLeft} />
        </div>
        <div className="right">
          <Navs list={navListRight} />
          <Button />
        </div>
      </div>

      <style jsx>{`
        header {
          width: 100%;
        }
        .header-wrapper {
          height: 80px;
          width: 95%;
          margin: 0 auto;
          max-width: 1400px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 500;
        }

        .header-wrapper > div {
          display: flex;
        }

        .left {
          display: flex;
          align-items: center;
        }
      `}</style>
    </header>
  );
}
