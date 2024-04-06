import React, { useState } from "react";

function Profile() {
  const [Login, setLogin] = useState(2);
  return (
    <div>
      {Login == 1 ? (
        <h1>Profile Component </h1>
      ) : Login == 2 ? (
        <h1>Welcome User 2 </h1>
      ) : Login == 3 ? (
        <h1>Welcome User 3</h1>
      ) : null}
    </div>
  );
}

export default Profile;
