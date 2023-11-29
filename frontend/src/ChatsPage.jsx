// import React from "react";
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "ff2dedb7-fd1b-46f8-8d97-39e9f6f76100",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

// export default ChatsPage;

import React from "react";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ style, height: "100vh" }}>
      <PrettyChatWindow
        projectId="ff2dedb7-fd1b-46f8-8d97-39e9f6f76100"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
