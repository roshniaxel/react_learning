import { baseApi } from "./base";

export function getUsers(options) {
  return baseApi.get("users", options).then((res) => res.data);
}

export async function getUser(userId, options) {
  const res = await baseApi.get(`users/${userId}`, options);
  return res.data;
}
