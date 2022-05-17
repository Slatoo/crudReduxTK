import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/users";
import { Card, Input, Button } from "antd";
import "./usersDisplay.css";

export default function Display() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");
  const { TextArea } = Input;
  return (
    <div className="displayUsers">
      {userList.map((user) => {
        return (
          <Card className="cardContent" bordered={false}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <div >
            <TextArea rows={2}
              type="text"
              placeholder="Change description"
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />
            <div className="formContent">
            <Button
              onClick={() => {
                dispatch(
                  updateUsername({
                    id: user.id,
                    username: newUsername,
                  })
                );
              }}
            >
              Update description
            </Button>
            <Button danger
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </Button>
            </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
