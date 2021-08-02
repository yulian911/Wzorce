import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { JsxEmit } from "typescript";
import ProgressBar from "@ramonak/react-progress-bar";

export const Click = () => {
  const [clickedRange, setClickedRange] = useState<number>(1);

  const [progress, setProgress] = useState<number>(0.33333333333);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  useEffect(() => {
    if (clickedRange === 1) {
      return;
    }
    if (clickedRange === 2) {
      return;
    }
  }, [clickedRange]);

  return (
    <div>
      <BoxContainer>
        <Box
          onClick={() => setClickedRange(1)}
          style={{
            border: clickedRange === 1 ? "5px solid green" : "1px solid ",
          }}
        ></Box>
        <Box
          onClick={() => setClickedRange(2)}
          style={{
            border: clickedRange === 2 ? "5px solid green" : "1px solid ",
          }}
        ></Box>
      </BoxContainer>
      <div>
        <ProgressBar completed={progress} />
      </div>
    </div>
  );
};

const Box = styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid black;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`;
