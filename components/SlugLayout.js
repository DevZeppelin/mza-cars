import { RichText } from "prismic-reactjs";
import BackButton from "./BackButton";
import CarPhoto from "./CarPhoto";

export default function SlugLayout({ article }) {

  return (
    <div className="w-5/6 md:w-2/3 mx-auto">

      <h1 className=" text-xl md:text-3xl text-center uppercase font-bold text-primary py-12 md:py-16">
        {RichText.render(article.data["car_title"])}
      </h1>

      <img
        className="shadow-xl text-center mb-10 md:mb-15 mx-auto border-gray-800 border-2"
        src={article.data["car_image"].url}
        alt="auto image car mza-cars"
      />
      <div className="text-base md:text-lg  space-y-8 md:space-y-8">
        {RichText.render(article.data["car_description"])}
      </div>

      {article.data["car_image_front"].url ?
        <h1 className=" text-xl md:text-3xl text-center uppercase font-bold text-primary py-12 md:py-16">
          Más fotos
        </h1>
        : ""}

      <div className="grid grid-cols-2 gap-4">
        {article.data["car_image_front"].url ? <CarPhoto src={article.data["car_image_front"].url} /> : ""}
        {article.data["car_image_back"].url ? <CarPhoto src={article.data["car_image_back"].url} /> : ""}
        {article.data["car_image_in"].url ? <CarPhoto src={article.data["car_image_in"].url} /> : ""}

      </div>

      <BackButton />
    </div>
  );
}
