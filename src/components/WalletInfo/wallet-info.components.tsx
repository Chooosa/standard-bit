import React, { useEffect, useState } from 'react'
import { DataTypes } from '../../pages/Main/main.components'

import { Wrapper, Container, Row, Text } from './wallet-info.styles'

interface WalletInfoProps {
   data: DataTypes[]
}

interface SumProps {
   balance: number
   frozen: number
   available: number
}

const WalletInfo: React.FC<WalletInfoProps> = ({ data }) => {

   const [sum, setSum] = useState<SumProps>({
      balance: 0,
      frozen: 0,
      available: 0
   })

   const getSum = () => {
      console.log('dfd')
      let sumBalance: number = data.reduce((sum, current) => {
         return sum + (+current.balance * +current.price);
      }, 0);

      let sumFrozen: number = data.reduce((sum, current) => {
         return sum + (+current.frozen * +current.price);
      }, 0);

      let sumAvailable: number = data.reduce((sum, current) => {
         return sum + (+current.available * +current.price);
      }, 0);
      // console.log(summ)
      // return summ
      setSum({
         balance: sumBalance,
         frozen: sumFrozen,
         available: sumAvailable
      })
   }

   useEffect(() => {
      getSum()
   }, [data])

   return (
      <Wrapper>
         <Container>
            <Row>
               <Text description>
                  Общий баланс (сумма):
               </Text>
               <Text>
                  {sum.balance.toFixed(2)} USDT
               </Text>
            </Row>
            <Row>
               <Text description>
                  В ордерах (сумма):
               </Text>
               <Text>
                  {sum.frozen.toFixed(2)} USDT
               </Text>
            </Row>
            <Row>
               <Text description>
                  Свободный объем (сумма):
               </Text>
               <Text>
                  {sum.available.toFixed(2)} USDT
               </Text>
            </Row>
         </Container>
      </Wrapper>
   )
}

export default WalletInfo