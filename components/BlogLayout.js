import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function BlogLayout({ tag, title, blogs, extra }) {
  return (
    <>
      <h1 className="text-4xl p-8 text-center">{title}</h1>
      <div className="flex">
        <div className="md:grid md:grid-cols-3 gap-6 md:w-2/3 ml-4 md:ml-24 mr-4 md:mr-20 text-center">



          {/* INDICE MOVIL */}
          <div className="md:hidden mb-2 block text-left mx-12">
            <h1 className=" text-base uppercase font-bold opacity-60 text-primary text-center">
              Catálogo
            </h1>

            {blogs.results.map((article, index) => (
              <div key={article.uid}>
                
                {console.log(article.tags)}

                <Link href={`${article.tags[0]}/${article.uid}`}>
                  <span className="flex bold text-xs opacity-60 cursor-pointer">
                    •{RichText.render(article.data["car_title"])}
                  </span>
                </Link>
              </div>
            ))}
            <hr />
            <div className="mt-4"> {extra} </div>
          </div>


          {/* ARTICULOS */}
          {blogs.results.map((article, index) => (

            <div className="mt-10 mb-4 md:mb-10" key={article.uid}>



              <Link href={`${tag}/${article.uid}`}>
                <img
                  className="w-300 flex mx-auto cursor-pointer border-gray-800 border-2 mb-2"
                  src={article.data["car_image"].url}
                  alt="img"
                />
                <h1 className="bold uppercase text-xl md:text-2xl text-primary h-16 cursor-pointer">
                  {RichText.render(article.data["car_title"])}
                </h1>
              </Link>
              <h2 className="my-2 px-4">
                {" "}
                {RichText.render(article.data["car_description"])}
              </h2>

            </div>
          ))}
        </div>


        {/* INDICE WIDE SCREEN */}
        <div className="hidden md:flex flex-col w-1/3">
          <div className="mr-10 mt-16"> {extra} </div>
          <h1
            className="text-xl uppercase font-bold text-primary mb-10 ml-24"
          >
            Catálogo
          </h1>
          {blogs.results.map((article, index) => (
            <div key={article.uid}>
              <Link href={`${article.tags[0]}/${article.uid}`}>
                <h1 className="flex bold text-base mr-10 opacity-60 cursor-pointer">
                  {RichText.render(article.data["car_title"])}
                </h1>
              </Link>

              <hr className="mt-5" />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
