import styled from "styled-components";

interface IPropsImageWrapper {
  width?: string;
  height?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: string;
}

export const HeaderWrapper = styled.div`
  height: 1000px;
  position: relative;
`;

export const ImageWrapper = styled.img<IPropsImageWrapper>`
  position: absolute;

  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};

  ${({ top }) => top && `top: ${top}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right && `right: ${right}`};

  ${({ opacity }) => opacity && `opacity: ${opacity}`};
`;
