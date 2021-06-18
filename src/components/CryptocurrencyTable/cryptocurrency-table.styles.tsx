import styled from 'styled-components'

export const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`

export const Table = styled.table`
   width: 100%;
   background-color: #303030;
   border-radius: 16px;
   border-collapse: collapse;
`

export const Cell = styled.th`
   padding: 26px 24px;
   font-size: 14px;
   line-height: 19px;
   color: rgba(255, 255, 255, 0.5);
   width: 19%;
   position: relative;

   :nth-of-type(2n) {
      background-color: rgb(59, 59, 59);
   }

   :first-of-type {
      width: 24%;
      text-align: left;

      ::before {
         left: 20px;
         width: calc(100% - 20px);
      }
   }

   :last-of-type::before {
      right: 20px;
      width: calc(100% - 20px);
   }

   ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 2px;
      background-color: red;
      z-index: 100;

      background-color: #fff;
      opacity: 0.1;
   }
`