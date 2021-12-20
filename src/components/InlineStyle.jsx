export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px orange",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#ff0000"
  };
  const buttonStyle = {
    backgroundColor: "pink",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>Well Done</button>
    </div>
  );
};
