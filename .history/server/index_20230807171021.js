import Parser from "rss-parser";
let parser = new Parser();
let feedURL = "https://netflixtechblog.com/feed";

(async () => {
  let feed = await parser.parseURL("https://www.reddit.com/.rss");
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
})();

const parse = async url => {
    let feed = await parser.parseURL(url);
    console.log(feed.title);
}