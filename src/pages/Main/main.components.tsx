import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Wrapper } from './main.styles'
import WalletInfo from '../../components/WalletInfo/wallet-info.components'
import CryptocurrencyTable from '../../components/CryptocurrencyTable/cryptocurrency-table.components'
import { API_URL } from '../../config'
import Select from '../../components/Select/select.component'

export interface DataTypes {
   id: string
   id_user: string
   coin: string
   coin_img: string
   balance: string
   available: string
   frozen: string
   price: string
   coin_name: string
}

const Main = () => {
   const [data, setData] = useState<DataTypes[]>([])
   const [oldData, setOldData] = useState<DataTypes[]>([])
   const [anchorEl, setAnchorEl] = useState(null)
   const [user, setUser] = useState<number>(1)

   const showSelect = (event: any) => {
      setAnchorEl(event.currentTarget)
   };

   const popoverClose = () => {
      setAnchorEl(null)
   }

   const changeUser = (user: number) => {
      setUser(user)
      setAnchorEl(null)
   }

   const getData = () => {
      // console.log('change')
      axios({
         method: 'get',
         url: `${API_URL}/testjob?id_user=${user}`
      })
         .then((response) => {
            // console.log(response.data)
            setData(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
   }

   useEffect(() => {
      getData()
      setInterval(() => getData(), 10000)
   }, [])

   useEffect(() => {
      if (data.length !== 0) {
         setOldData(data)
         // console.log('dfdf')
      }
   }, [data])

   return (
      <Wrapper>
         <WalletInfo data={data} />
         <Select
            anchorEl={anchorEl}
            popoverClose={popoverClose}
            showSelect={showSelect}
            user={user}
            changeUser={changeUser}
         />
         <CryptocurrencyTable data={data} oldData={oldData} />
      </Wrapper>
   )
}

export default Main