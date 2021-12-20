export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">Great!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px orange;
          border-radius: 8px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #ff0000;
        }

        .button {
          background-color: pink;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
