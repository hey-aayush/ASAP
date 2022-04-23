import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
function SearchCustomerCard() {

  const onSearch=()=>{}

  return (
    <div style={{width:'fit-content',margin:'.2rem auto'}}>
        <Search placeholder="Search Customers" onSearch={onSearch} enterButton style={{width:'fit-content',margin:'.2rem auto'}}/>
    </div>
  )
}

export default SearchCustomerCard