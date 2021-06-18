import styled from 'styled-components'

export const RowWrapper = styled.tr`
   /* border-bottom: 2px solid red; */
   :last-of-type {
      >td::before {
         opacity: 0;
      }
   }
`

interface CellProps {
   change?: string
}

export const Cell = styled.td<CellProps>`
   padding: 22px 24px;
   font-size: 16px;
   line-height: 19px;
   color: ${props => props.change === 'up' ? '#4CAA3C' : props.change === 'down' ? '#DF2828' : '#fff'};
   width: 19%;
   text-align: center;
   position: relative;

   :first-of-type {
      width: 24%;
      text-align: left;

      background: -webkit-linear-gradient(#FFCB44, #F89521);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      ::before {
         left: 20px;
         width: calc(100% - 20px);
      }
   }

   :last-of-type::before {
      right: 20px;
      width: calc(100% - 20px);
   }

   :nth-of-type(2n) {
      background-color: rgb(59, 59, 59);
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

export const CellContainer = styled.div`
   display: flex;
   align-items: center;
`

export const Icon = styled.img`
   margin-right: 14px;
   margin-left: 9px;
   width: 20px;
   height: 20px;
`