import React, { useState, useEffect } from 'react'
import axios from 'axios'



function useGetData (url: string): string {
const [data, setData] = useState('')
 useEffect(() => {

  const getData = async () => {
    const res = await axios.get(url)
    setData(res.data[0].flags.png)
  }

  getData()
 }, [])

 return data
}

export default useGetData
