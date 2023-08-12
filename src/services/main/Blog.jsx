import axios from "axios"
import { useEffect, useState } from "react"
import Feed from "./Feed";

function Blog() {
  const [articles, setArticles] = useState([])
//   let [imageSrc, setImageSrc] = useState('')
//   const parser = new DOMParser();

  console.log(articles);
  const getArticles = async () => {
    try {
      const res = await axios.get('https://reddit-news.onrender.com')
      setArticles(res.data)
      // {
      //   res.data.map((article) => {
      //     const doc = parser.parseFromString(article.item.content, 'text/html');
      //     const imgElement = doc.querySelector('img');
      //     if (imgElement) {
      //       const imageUrl = imgElement.src;
      //       setImageSrc(imageUrl)
      //       // console.log('Image URL:', imageUrl);
      //       console.log(parser.parseFromString(article.item.content, 'text/html').querySelector('img').src);
      //     } else {
      //       setImageSrc('')
      //       console.log('Image element not found.');
      //     }
      //   })
      // }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getArticles()
  }, [])



  return (
    <div className="border p-5 rounded-xl bg-gray-800 w-full">
      <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 w-full">

        <div className="bg-black flex-box rounded-t-lg py-3 px-6 w-full">
          <img src="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-60x60.png" alt="article" />
          {/* <img src={imageSrc} alt="article" /> */}
        </div>
        <div className="py-6 grid-cols-1 sm:grid md:grid-cols-3 w-full">
          {articles.map((article, i) => {
            // <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} image={parser.parseFromString(article.item.content, 'text/html').querySelector('img').src} />
            // const html = `${article.item.content}`
            // console.log(html);
            // setImageSrc(document.querySelector('img').firstElementChild.src)
            return (
              // <div key={i}>
              //   {imageSrc != "" ?
              //     <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} image={imageSrc} />
              //     :
              //     <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} />
              //   }
              // </div>
              <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} author={article.item.creator} description={article.item.categories} />
            )
          }
          )}
        </div>
      </div>
    </div >
  );
}

export default Blog;
