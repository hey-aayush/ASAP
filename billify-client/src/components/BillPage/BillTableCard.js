import React from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const customerData={
    name:'Aayush',
    emailId:'aayush@gmail.com'
}

const productData = [
    {
      key: '1',
      productName: 'Rice',
      quantity: 2,
      price: 32,
    },
    {
      key: '2',
      productName: 'Sugar',
      quantity: 5,
      price: 20,
    },
    {
      key: '3',
      productName: 'Flour',
      quantity: 2,
      price: 30,
    },
  ];

function BillTableCard() {
  return (
    <div>
        <Table dataSource={productData} style={{width:'fit-content',margin:'.5rem auto'}}>
            <Column title="Product Name" dataIndex="productName" key="productName" />
            <Column title="Quantity" dataIndex="quantity" key="quantity" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column
                title="Action"
                key="price"
                render={(_, record) => (
                    <Space size="middle">
                        <a>Delete</a>
                    </Space>
                )}
            />
        </Table>
    </div>
  )
}

export default BillTableCard