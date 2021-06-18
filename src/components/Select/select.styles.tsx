import styled from 'styled-components'

export const Wrapper = styled.div`
   width: 100%;
   margin-bottom: 25px;

   display: flex;
   justify-content: flex-end;
`

interface SelectButtonProps {
   open: boolean
}

export const SelectButton = styled.button`
   outline: none;
   background: #303030;
   border-radius: 30px;
   border: none;

   width: 221px;
   height: 50px;

   font-size: 18px;
   line-height: 30px;
   letter-spacing: 0.44px;

   color: #FFFFFF;
   cursor: pointer;
`

export const OptionButton = styled.button`
   outline: none;
   background: #fff;
   border: none;
   color: #19191B;
   font-size: 18px;
   line-height: 30px;
   letter-spacing: 0.44px;

   display: flex;
   align-items: center;
   padding: 0 10px;

   width: 100%;
   height: 50px;

   transition-duration: 0.3s;
   cursor: pointer;

   :hover {
      transition-duration: 0.3s;
      background-color: #19191B;
      color: #fff;
   }
`

export const PopoverContainer = styled.div`
   width: 220px;
   height: 100px;
   /* margin-top: 8px; */

   display: flex;
   flex-direction: column;
   /* >div {
      width: 100%;
      height: calc(100% - 15px);
      flex-direction: column;
      justify-content: space-between;
   } */
`