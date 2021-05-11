import React from "react";
import Video from "./Component/Video";
import Chat from "./Component/Chat";

function App() {
  return (
    <div className={"container max-w-full h-full"}>
      <div className={"md:flex h-full"}>
        <div className={"h-3/6 md:flex-1 md:h-screen"}>
          <Video />
        </div>
        <div className={"h-3/6 md:flex-initial md:h-screen"}>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
