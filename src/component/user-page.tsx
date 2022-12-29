import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from "./list/list";
import UserItem from "./user-item/user-item";

interface UserPageProps {}

const UserPage: FC<UserPageProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UserPage;
