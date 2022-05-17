import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/users";
import "./sider.css";
import { Input, Button } from "antd";


export default function SiderForm() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const { TextArea } = Input;

  return (
    <div className="siderUsers">
      
<div className="forms">
<br/><br/>
        <Input className="userInput"
        size="large"
          placeholder="Insert a name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br/> <br/>
        <TextArea rows={5}
        size="large"
          type="text"
          placeholder="Insert a Description"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br/><br/>
        <Button className="buttonSider"
        type="primary"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          add user
        </Button>
        </div>

      
    </div>
  );
}
