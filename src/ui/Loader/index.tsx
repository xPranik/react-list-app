import React, { FC } from "react";
import styled from "styled-components";

const LoaderStyled = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  svg {
    animation: rotate 2s linear infinite;
    transform-origin: center center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50px;
    circle {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
      stroke-linecap: round;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 899, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100% {
    }
    0% {
      stroke: darkblue;
    }
    40% {
      stroke: cadetblue;
    }
    66% {
      stroke: deepskyblue;
    }
    80% {
    }
    90% {
      stroke: dodgerblue;
    }
  }
`;

export const Loader: FC = () => {
  return (
    <LoaderStyled>
      <svg viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </LoaderStyled>
  );
};
