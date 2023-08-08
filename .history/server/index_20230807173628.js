import Parser from "rss-parser";
import express from "express";
import cors from "cors";

let parser = new Parser();
let feedURL = "https://netflixtechblog.com/feed";
// let feedURLs = [
//   "https://dev.to/feed",
//   "https://www.reddit.com/.rss",
//   "https://netflixtechblog.com/feed",
// ];

let articles = [];

// (async () => {
//   let feed = await parser.parseURL(feedURL);
//   console.log(feed.title);
//
//   feed.items.forEach((item) => {
// console.log(item.title + ":" + item.link);
//   });
// })();

const parse = async (url) => {
  let feed = await parser.parseURL(url);
  //   console.log(feed.title);
  feed.items.forEach((item) => {
    // console.log(`${item.title}\n${item.link}\n\n`);
    articles.push({item})
  });
};

parse(feedURL);

let app = express();
app.use(cors());

const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

export default server;
