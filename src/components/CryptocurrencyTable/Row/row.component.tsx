import React from 'react'

import { RowWrapper, Cell, Icon, CellContainer } from './row.styles'
import { DataTypes } from '../../../pages/Main/main.components'
import { DataChangesTypes } from '../cryptocurrency-table.components'

interface RowProps {
   item: DataTypes,
   dataChanges: DataChangesTypes
}

const Row: React.FC<RowProps> = ({ item, dataChanges }) => {
   return (
      <RowWrapper>
         <Cell>
            <CellContainer>
               <Icon src={item.coin_img} />
               {`${item.coin_name} (${item.coin})`}
            </CellContainer>
         </Cell>
         <Cell change={dataChanges.price}>
            {/* {console.log(dataChanges.price)} */}
            {item.price}
         </Cell>
         <Cell change={dataChanges.balance}>
            {item.balance}
         </Cell>
         <Cell change={dataChanges.frozen}>
            {item.frozen}
         </Cell>
         <Cell change={dataChanges.available}>
            {item.available}
         </Cell>
      </RowWrapper>
   )
}

export default Row