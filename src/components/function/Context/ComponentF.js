import React from "react";
import { UserContext, ChannelContext } from "../../../App";

function ComponentF() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <ChannelContext.Consumer>
          {(channel) => (
            <div>
              ComponentF : {user} {channel}
            </div>
          )}
        </ChannelContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

export default ComponentF;
