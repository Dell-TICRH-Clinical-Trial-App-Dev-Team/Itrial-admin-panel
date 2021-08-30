import { makeAutoObservable } from "mobx";
import Axios from "axios";

interface User {
  name?: string;
  address?: string;
  email: string;
  phoneNumber?: number;
  permissions?: string[];
  trials?: string[];
  sites?: string[];
  cccs?: string;
}

class UserInfo {
  info: User = {
    email: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(userEmail, cccsId) {
    //Finds user info by email in specific cccs
    if (this.info.email !== userEmail) {
      Axios.get(`http://localhost:8000/api/cccs/${cccsId}`).then((res) => {
        let data = res.data;
        data.teamMembers.forEach((id) => {
          Axios.get(`http://localhost:8000/api/team-members/${id}`).then(
            (res) => {
              if (res.data.email === userEmail) {
                this.info = res.data;
              }
            }
          );
        });
      });
    }
  }

  get getUserInfo() {
    if (this.info.email !== "") {
      let data: User = {
        name: this.info.name,
        address: this.info.address,
        email: this.info.email,
        phoneNumber: this.info.phoneNumber,
        permissions: this.info.permissions,
        trials: this.info.trials,
        sites: this.info.sites,
        cccs: this.info.cccs,
      };

      console.log("Getter: ", data);
      return data;
    }

    return undefined;
  }
}

const store = new UserInfo();
export default store;
