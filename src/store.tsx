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

  //testing purposes
  showOutput(res) {
    // console.log(JSON.stringify(res, null, 2));
    console.log("showing output", JSON.stringify(this.info, null, 2));
  }

  setUserInfo(userEmail) {
    //Finds user info by email in specific cccs
    if (this.info.email !== userEmail) {
      //FIXME: /api/cccs/:id, id is hardcoded.
      Axios.get("http://localhost:8000/api/cccs/61269208a73cdc406c9641c4").then(
        (res) => {
          let data = res.data;
          console.log("There", Date.now());
          data.teamMembers.forEach((id) => {
            Axios.get(`http://localhost:8000/api/team-members/${id}`).then(
              (res) => {
                if (res.data.email === userEmail) {
                  this.info = res.data;
                  this.showOutput(res.data);
                }
              }
            );
          });
        }
      );
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
