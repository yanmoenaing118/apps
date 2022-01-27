import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../lib/recoil/state/user";

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return <div>{/* Name: <strong>{userName}</strong> */} Name</div>;
}
