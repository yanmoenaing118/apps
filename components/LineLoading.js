export default function LineLoading() {
  return (
    <div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>

      <style jsx>{`
        .line {
          width: 100%;
          height: 30px;
          margin-bottom: 1rem;
          background-color: #eeeeeeaa;
          position: relative;
        }
        .line::before {
          content: "";
          display: table;
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background-color: #eeeeeeff;
          animation: move 0.3s ease alternate infinite forwards;
        }

        @keyframes move {
          to {
            left: 50%;
          }
        }
      `}</style>
    </div>
  );
}
