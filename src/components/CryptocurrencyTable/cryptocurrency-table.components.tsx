import React from 'react'

import { Wrapper, Table, Cell } from './cryptocurrency-table.styles'
import { DataTypes } from '../../pages/Main/main.components'
import Row from './Row/row.component'

interface CryptocurrencyTableProps {
   data: DataTypes[]
   oldData: DataTypes[]
}

export interface DataChangesTypes {
   price: string
   balance: string
   frozen: string
   available: string
}

const CryptocurrencyTable: React.FC<CryptocurrencyTableProps> = ({ data, oldData }) => {
   // const [dataChanges, setDataChanges] = useState<DataChangesTypes>({
   //    price: 'same',
   //    balance: 'same',
   //    frozen: 'same',
   //    available: 'same'
   // })

   const changeData = (oldValues: DataTypes, newValues: DataTypes) => {
      let changes: DataChangesTypes = {
         price: 'same',
         balance: 'same',
         frozen: 'same',
         available: 'same'
      }

      if (oldValues) {
         if (oldValues?.price > newValues.price) {
            changes.price = 'down'
         } else if (oldValues?.price < newValues.price) {
            changes.price = 'up'
         } else {
            changes.price = 'same'
         }

         if (oldValues?.balance > newValues.balance) {
            changes.balance = 'down'
         } else if (oldValues?.balance < newValues.balance) {
            changes.balance = 'up'
         } else {
            changes.balance = 'same'
         }

         if (oldValues?.frozen > newValues.frozen) {
            changes.frozen = 'down'
         } else if (oldValues?.frozen < newValues.frozen) {
            changes.price = 'up'
         } else {
            changes.frozen = 'same'
         }

         if (oldValues?.available > newValues.available) {
            changes.available = 'down'
         } else if (oldValues?.available < newValues.available) {
            changes.available = 'up'
         } else {
            changes.available = 'same'
         }
      }

      // setDataChanges(changes)
      return changes
   }

   return (
      <Wrapper>
         <Table>
            <thead>
               <tr>
                  <Cell>
                     Монета
                  </Cell>
                  <Cell>
                     <span>Курс к USDT</span>
                  </Cell>
                  <Cell>
                     Общий баланс
                  </Cell>
                  <Cell>
                     В ордерах
                  </Cell>
                  <Cell>
                     Свободный объем
                  </Cell>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((item, index) => {
                     // console.log(typeof (oldData[index].price))
                     // if (item?.price > oldData[index]?.price) {
                     //    console.log(item?.price, ' : ', oldData[index]?.price)
                     // } else if (item?.price < oldData[index]?.price) {
                     //    console.log(item?.price, ' : ', oldData[index]?.price)
                     // }
                     // console.log('map: ', changeData(oldData[index], item))
                     return (
                        <Row
                           key={index}
                           item={item}
                           dataChanges={changeData(oldData[index], item)}
                        />
                     )
                  })
               }
            </tbody>
         </Table>
      </Wrapper>
   )
}

export default CryptocurrencyTable