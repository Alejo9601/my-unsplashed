import styled from "styled-components";
import { colorBlue, font } from "../../../helpers/css_vars";

export const CopyButton = styled.button`
   height: 100%;
   width: 25%;
   border-radius: 10px;
   background-color: ${colorBlue};
   color: white;
   font-family: ${font};
   border: 0px;
   padding: 0px 10px;
   font-weight: 500;
   font-size: 12px;
   cursor: pointer;
`;
