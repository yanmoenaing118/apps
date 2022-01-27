export const users = [
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

export default async function fakHttpReq(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userName = users.find((user) => user.id === id).name;
      resolve(userName);
    }, 3000);
  });
}
