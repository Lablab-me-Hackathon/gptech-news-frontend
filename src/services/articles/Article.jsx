import { useState } from "react";
import { faq } from "../../data";

function Article() {
  const [faqs, setFaqs] = useState(faq);
  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].show = !newFaqs[index].show;
    setFaqs(newFaqs);
  };
  return (
    <section className="text-center py-10 w-full">
      <h1 className="text-2xl font-semibold mb-6 text-white">
        Frequently Asked Questions
      </h1>
      <div className=" w-full  flex justify-center items-start gap-10 flex-wrap">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md transition-all text-black w-[30%] 
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <i
                className={`fas fa-chevron-down d-arrow transform transition-transform ${
                  faq.show ? "rotate-180" : "rotate-0"
                }`}
              ></i>
            </button>
            <p
              className={`mt-2 overflow-hidden ${
                faq.show ? "opacity-100 max-h-[6rem]" : "opacity-0 max-h-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Article;
{
  /* // <div className="grid-cols-1 mx-6 sm:grid md:grid-cols-3 border p-5 rounded-xl bg-gray-800">
    //   <div
    //     className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">

    //     <div className="bg-black flex-box rounded-t-lg py-3 px-6 mb-5">
    //       <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="article" />
    //     </div>
    //     <div className="p-6">
    //       {articles.map((article, i) =>
    //         <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} />
    //       )}
    //     </div>
    //   </div>
    // </div> */
}
