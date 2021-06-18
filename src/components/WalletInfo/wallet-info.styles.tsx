import styled from 'styled-components'

export const Wrapper = styled.section`
   width: 100%;
   margin-bottom: 20px;
`

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   max-width: 450px;
`

export const Row = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   :nth-of-type(2) {
      margin: 20px 0;
   }
`

interface TextProps {
   description?: boolean
}

export const Text = styled.span<TextProps>`
   font-size: 18px;
   line-height: 21px;
   color: #fff;
   opacity: ${props => props.description ? '0.5' : '1'};
`