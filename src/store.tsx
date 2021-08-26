import { makeAutoObservable } from "mobx";
import Axios from "axios";

interface User {
  name: string;
  address: string;
  email: string;
  phoneNumber: number;
  permissions: string[];
  trials: string[];
  sites: string[];
  cccs: string;
}
class UserInfo {
  info: User = {
    name: "Kabob",
    address: "Mexico",
    email: "hey@yahoo.com",
    phoneNumber: 1231231234,
    permissions: ["a", "b", "c"],
    trials: [],
    sites: [],
    cccs: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  showOutput(res) {
    this.info = res;
    console.log("showing output", JSON.stringify(this.info, null, 2));
  }

  setUserInfo(userEmail) {
    Axios.get("http://localhost:8000/api/cccs/61269208a73cdc406c9641c4").then(
      (res) => {
        let data = res.data;
        data.teamMembers.forEach((id) => {
          Axios.get(`http://localhost:8000/api/team-members/${id}`).then(
            (res) => {
              if (res.data.email === userEmail) {
                this.showOutput(res.data);
              }
            }
          );
        });
      }
    );
  }

  get getUserInfo() {
    return this.info;
  }
}

const store = new UserInfo();
export default store;
