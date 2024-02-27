import axios from "axios";
import { toast } from "react-toastify";

export const getChatApi = async (setChatApi) => {
  axios
    .get("/api/chat")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setChatApi(response.data);
      }
    })
    .catch((error) => toast(`Something went wrong ${error}`));
};
