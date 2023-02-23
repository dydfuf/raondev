import fs from "fs";

export const getPostList = () => {
  try {
    return fs
      .readdirSync(`${process.cwd()}/public/posts`)
      .map((file) => file.split(".")[0]);
  } catch {
    return [];
  }
};
