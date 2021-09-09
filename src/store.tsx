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

  reset() {
    this.info = { email: "" };
    this.infoFound = false;
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

          data.teamMembers.some((id) => {
            Axios.get(`http://localhost:8000/api/team-members/${id}`)
              .then((res) => {
                if (res.data.email === userEmail) {
                  this.info = res.data;
                  this.infoFound = true;
                  return true;
                }
                return false;
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
    return this.infoFound
      ? {
          name: this.info.name,
          address: this.info.address,
          email: this.info.email,
          phoneNumber: this.info.phoneNumber,
          permissions: this.info.permissions,
          trials: this.info.trials,
          sites: this.info.sites,
          cccs: this.info.cccs,
        }
      : undefined;
  }
}

const store = new UserInfo();
export default store;
