import styled from "styled-components";
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
} from "styled-system";
import { Block, BlockProps } from "./Block";

interface Props {
  medium?: boolean;
  regular?: boolean;
  demiLight?: boolean;
  light?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
  overflowWrap?: "break-word" | "normal";
  textOverflow?: "clip" | "ellipsis" | "initial";
  wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
}

const medium = ({ medium }: Props) => medium ? `font-weight: 500;` : "";
const regular = ({ regular }: Props) => regular ? `font-weight: 400;` : "";
const demiLight = ({ demiLight }: Props) => demiLight ? `font-weight: 300;` : "";
const light = ({ light }: Props) => light ? `font-weight: 200;` : "";
const alignLeft = ({ alignLeft }: Props) => alignLeft ? `text-align: left;` : "";
const alignRight = ({ alignRight }: Props) => alignRight ? `text-align: right;` : "";
const alignCenter = ({ alignCenter }: Props) => alignCenter ? `text-align: center;` : "";
const overflowWrap = ({ overflowWrap }: Props) => overflowWrap ? `overflow-wrap: ${overflowWrap};` : "";
const textOverflow = ({ textOverflow }: Props) => textOverflow ? `text-overflow: ${textOverflow};` : "";
const wordBreak = ({ wordBreak }: Props) => wordBreak ? `word-break: ${wordBreak};` : "";
const whiteSpace = ({ whiteSpace }: Props) => whiteSpace ? `white-space: ${whiteSpace};` : "";

type InnerProps = Props & FontFamilyProps & FontSizeProps & TextAlignProps & FontWeightProps & LetterSpacingProps & LineHeightProps;

export type TextProps = InnerProps & BlockProps;

export const Text = styled(Block.withComponent("p"))<InnerProps>`
  hyphens: auto;
  ${medium}
  ${regular}
  ${demiLight}
  ${light}
  ${alignLeft}
  ${alignRight}
  ${alignCenter}
  ${overflowWrap}
  ${textOverflow}
  ${whiteSpace}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${wordBreak}
  ${letterSpacing}
  ${lineHeight}
`;

Text.defaultProps = {
  color: "rgba(22, 27, 72, 0.8)",
  fontSize: "16px",
  lineHeight: "normal",
  overflow: "hidden",
  overflowWrap: "break-word",
  m: 0,
};
