import styled from "styled-components";
import { font } from "../../../helpers/css_vars";

const P = styled.p`
   margin-top: 10px;
   font-weight: 500;
   font-size: 10px;
   width: 100%;
   text-align: center;
   color: #fff;
   font-family: ${font};
`;

const P_8px = styled(P)`
   font-size: 8px;
`;

const P_12px = styled(P)`
   margin: 2px;
   font-size: 12px;
   font-weight: bold;
`;

const P_Gray = styled(P_12px)`
   color: gray;
   font-weight: normal;

   @media (max-width: 768px) {
      font-size: 10px;
   }
`;

const hidable_P = styled(P_Gray)`
   @media (max-width: 768px) {
      display: none;
   }
`;

const DragDescription = styled(P_Gray)`
   margin-top: 15px;
`;

const P_ellipsis = styled(P)`
   width: 70%;
   margin-top: 0px;
   padding-left: 10px;
   overflow: hidden;
   font-family: ${font};
   white-space: nowrap;
   text-overflow: ellipsis;
`;

export { P, P_Gray, hidable_P, P_8px, P_12px, DragDescription, P_ellipsis };
