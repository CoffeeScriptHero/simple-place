import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import { Wrapper } from "./SearchBarUsers-styles";

const SearchBarUsers = ({ searchingUser }) => {
  const mainUser = useSelector(userSelectors.getUser());
  const [users, setUsers] = useState([]);

  useEffect(() => {}, [mainUser]);

  return <Wrapper>SearchBarUsers</Wrapper>;
};

export default SearchBarUsers;
