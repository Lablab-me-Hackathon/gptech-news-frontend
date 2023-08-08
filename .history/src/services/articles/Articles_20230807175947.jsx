import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Articles() {
  const [articles, setArticles] = useState([])
  const getArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/')
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
      getArticles()
    },[]
  )
  return (
    <div>
      <div className="bg-gray-950 w-96 rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-72"
          src="ainews.jpg"
          alt="ai news article"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">GPTechNews</div>
          <p className="text-gray-700 text-base">
            Clients want answers from reel articles that are written by human and not generated by chatgpt...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #information technologies
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #programming languages
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #artificial intelligence
          </span>
        </div>
      </div>
    </div>
  );
}

export default Articles;
