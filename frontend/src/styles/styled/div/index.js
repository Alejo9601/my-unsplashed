import styled from "styled-components";
import { cardBackground, colorBlue, font } from "../../../helpers/css_vars";

export const FlexDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const FlexColumnDiv = styled(FlexDiv)`
   width: 100%;
   flex-direction: column;
`;

export const FlexColumnDiv_Spaced = styled(FlexColumnDiv)`
   justify-content: space-around;
`;

export const MiddleContainer = styled(FlexDiv)`
   height: 219px;
   width: 338px;
   border-radius: 10px;
`;

export const StaticBar = styled.div`
   height: 5px;
   width: 100%;
   background-color: #f6f6f6;
   border-radius: 5px;
   overflow: hidden;
`;

export const MotionBar = styled.div`
   width: 100px;
   height: 100%;
   background-color: ${colorBlue};
   border-radius: 5px;
   animation: load 2s linear infinite;

   @keyframes load {
      from {
         transform: translate(0px, 0px);
      }

      to {
         transform: translate(400px, 0px);
      }
   }
`;

export const OpacityContainer = styled(FlexColumnDiv)`
   position: fixed;
   z-index: 1;
   height: 100vh;
   width: 100vw;
   background-color: rgb(0, 0, 0, 0.8);
`;

export const FlexCard = styled(FlexColumnDiv)`
   justify-content: space-evenly;
   width: 350px;
   height: 469px;
   padding: 30px;
   border-radius: 10px;
   box-shadow: 0px 1px 5px 0px lightgray;
   background-color: ${cardBackground};

   @media (max-width: 768px) {
      height: fit-content;
      width: 300px;
      padding: 30px 20px;
   }
`;

export const UploadingCard = styled(FlexCard)`
   height: fit-content;
   padding: 30px 20px;
`;

export const DragArea = styled(MiddleContainer)`
   border: 3px dashed #a2dbfa66;
   background-color: #e1e5ea80;
   position: relative;

   @media (max-width: 768px) {
      display: none;
   }
`;

export const Button = styled(FlexColumnDiv)`
   width: fit-content;
   background-color: ${colorBlue};
   position: relative;
   border-radius: 5px;
   margin-top: 10px;
   padding: 10px 15px;
   overflow: hidden;
`;

export const LinkContainer = styled(FlexDiv)`
   background-color: #e1e5ea80;
   border-radius: 10px;
   height: 35px;
   width: 338px;
   padding: 1px;
   justify-content: space-between;
   border: 1px solid lightgray;
`;
