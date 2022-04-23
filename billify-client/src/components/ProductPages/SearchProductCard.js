import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
const SearchProductCard = () => {
  const onSearch=()=>{}
  return (
    <div style={{width:'fit-content',margin:'.2rem auto'}}>
        <Search placeholder="Search Products" onSearch={onSearch} enterButton style={{width:'fit-content',margin:'.2rem auto'}}/>
    </div>
  )
}

export default SearchProductCard