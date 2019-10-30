import * as axios from "axios";

class ChatHttpServer {
  getUserId() {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.getItem("userid"));
      } catch (err) {
        reject(err);
      }
    });
  }

  removeLS() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  }

  setLS(key, value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  }

  login(userCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("http://localhost:4000/login", userCredentials);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  checkUsernameAvailability(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("http://localhost:4000/usernameAvailable", {
          username: username
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  register(userCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("http://localhost:4000/register", userCredentials);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  userSessionCheck(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("http://localhost:4000/userSessionCheck", {
          userId: userId
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getMessages(userId, toUserId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("http://localhost:4000/getMessages", {
          userId: userId,
          toUserId: toUserId
        });
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ChatHttpServer;
