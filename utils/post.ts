import fs from "fs";

export const getPostNameList = () => {
  try {
    return fs
      .readdirSync(`${process.cwd()}/public/posts`)
      .map((file) => file.split(".")[0]);
  } catch {
    return [];
  }
};

export const getPostByName = (fileName: string) => {
  try {
    return fs
      .readFileSync(`${process.cwd()}/public/posts/${fileName}.md`)
      .toString();
  } catch {
    return "";
  }
};
