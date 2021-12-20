/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px orange;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#ff0000"
  });
  const SButton = styled.button`
    background-color: pink;
    border: none;
    padding: 8px;
    border-radius: 8px;
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>Fantastic!</SButton>
    </div>
  );
};
