import axios from "axios";
import * as window_util from "./WindowUtilities.js";

export default class RequestAPI {
  PostAPI(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error);
        })
    });
  }

  PostAPIAlertMessage(url, data, alert_message) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          window_util.alertMessage(alert_message);
          console.log(error);
          reject("error");
        })
    });
  }

  GetAPI(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(response => {
          resolve(response)

        })
        .catch(error => {
          reject(error);
        })
    });
  }
}