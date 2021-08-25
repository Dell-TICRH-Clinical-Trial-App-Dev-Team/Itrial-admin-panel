import { makeAutoObservable } from "mobx";
import Axios from "axios";

interface User {
  email: string;
  id?: string;
}
class UserInfo {
  info: User = {
    email: "hey@yahoo.com",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(updateInfo: User) {
    this.info = updateInfo;
    Axios.get(
      "http://localhost:8000/api/team-members/61269394a73cdc406c9641cf"
    ).then((res) => {
      let data = res.data;
    });
  }
  get getUserInfo() {
    return this.info;
  }
}

const store = new UserInfo();
export default store;
