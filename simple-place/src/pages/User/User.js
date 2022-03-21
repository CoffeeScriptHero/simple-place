import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendUserData } from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userpageOperations } from "../../store/userpage/index.js";

const User = () => {
  // const username = useParams().username;
  // const dispatch = useDispatch();
  // const [userExist, setUserExist] = useState(false);

  // useEffect(() => {
  //   sendUserData({ username: username }, "api/user/get-userpage")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.status === 200) {
  //         dispatch(
  //           userpageOperations.setNewUserpage({
  //             username: username,
  //             profileImg: data.profileImg,
  //             subscriptions: data.subscriptions,
  //             subscribers: data.subscribers,
  //             posts: data.posts,
  //           })
  //         );
  //         setUserExist(true);
  //       } else {
  //         setUserExist(false);
  //       }
  //     });
  // });

  return (
    <div>
      {/* {userExist && username}
      {!userExist && <a>NO USER</a>} */}
    </div>
  );
};

export default User;
