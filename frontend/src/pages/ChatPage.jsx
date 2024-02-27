import React, { useEffect, useState } from "react";
import { getChatApi } from "../apicalls/constant";

const ChatPage = () => {
  const [chatApi, setChatApi] = useState([]);

  useEffect(() => {
    getChatApi(setChatApi);
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
    </div>
  );
};

export default ChatPage;
