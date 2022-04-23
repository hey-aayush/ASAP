import * as React from "react";
import { Form, Input, Button } from "antd";
import { EditableUsersTable } from "./EditableUsersTable.js";

const mockData = {
  userlistName: "name",
  items: [
    {
      name: "a",
      quantity: 10,
      perPrice: 1100,
      price: 11000
    },
    {
        name: "b",
        quantity: 20,
        perPrice: 10,
        price: 200
    }
  ]
};

export const EditableTableForm = () => {
  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  return (
    <Form name="dynamic_form_item" onFinish={onFinish} initialValues={mockData}>
      <Form.Item name={["userlistName"]}>
        <Input
          placeholder="user list name"
          style={{ width: "30%", marginRight: 8 }}
        />
      </Form.Item>
      <Form.List name="items">
        {(items, { add, remove }) => {
          return <EditableUsersTable items={items} add={add} remove={remove} />;
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
