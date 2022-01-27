import { atom, selector } from "recoil";
import fakHttpReq from "../../fakeHttpReq";

const users = [
  {
    id: 1,
    name: "Yan Moe Naing",
  },
  {
    id: 2,
    name: "Park Eun Bin",
  },
  {
    id: 3,
    name: "Kang So Bong",
  },
];

export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

// export const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     const userId = get(currentUserIDState);

//     return users.find((user) => user.id === userId).name;
//   },
// });

export const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const userId = get(currentUserIDState);
    const name = await fakHttpReq(userId);
    console.log(name);
    return "fake";
  },
});
