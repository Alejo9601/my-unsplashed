import styled from "styled-components";
import { font } from "../../../helpers/css_vars";

export const StyledH1 = styled.h1`
   font-size: 18px;
   font-weight: 500;
   width: 100%;
   text-align: center;
   color: #4f4f4f;
   font-family: ${font};
`;

export const UploadingStatusText = styled(StyledH1)`
   text-align: left;
   padding-bottom: 30px;
`;
