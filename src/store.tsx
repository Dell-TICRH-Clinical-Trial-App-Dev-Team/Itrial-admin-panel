import { makeAutoObservable } from "mobx";
import Axios from "axios";

export interface User {
  name?: string;
  address?: string;
  email?: string;
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

  infoFound = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getCCCS(userEmail, cccsId) {
    try {
      return await Axios.get(`http://localhost:8000/api/cccs/${cccsId}`);
    } catch (e) {
      console.log("Error: ", e);
      return {};
    }
  }

  async setUserInfo(userEmail, cccsId) {
    //Finds user info by email in specific cccs
    if (this.info.email !== userEmail) {
      return Axios.get(`http://localhost:8000/api/cccs/${cccsId}`)
        .then((res) => {
          let data = res.data;
          console.log(data);
          data.teamMembers.forEach((id) => {
            console.log(id);
            Axios.get(`http://localhost:8000/api/team-members/${id}`)
              .then((res) => {
                if (res.data.email === userEmail) {
                  // console.log("Found!!!", res.data);
                  this.info = res.data;
                  console.log("Info Found: ", res.data);
                  this.infoFound = true;
                }
              })
              .catch((err) => {
                console.log("Error: ", err);
              });
          });
        })
        .catch(() => {
          console.log("Invalid id for CCCS");
          this.infoFound = false;
        });
    }

    this.info.email = userEmail;
  }

  get getUserInfo() {
    console.log(this.infoFound);
    if (this.infoFound) {
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
