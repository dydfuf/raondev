import fs from "fs";
import { parseMarkdownMetadata } from "./parseMarkdownMetadata";
import { isBefore } from "date-fns";

export const getPostNameList = () => {
  try {
    return fs
      .readdirSync(`${process.cwd()}/public/posts`)
      .map((file) => file.split(".")[0])
      .map((postName) => {
        const { date } = parseMarkdownMetadata(getPostByName(postName));
        return { postName, date };
      })
      .filter((postMetaData) => postMetaData.date !== undefined)
      .sort((a, b) => +isBefore(new Date(a.date!), new Date(b.date!)))
      .reverse()
      .map((postMetaData) => postMetaData.postName);
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
