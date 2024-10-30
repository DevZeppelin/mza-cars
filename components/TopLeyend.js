import { FaMapSigns } from "react-icons/fa";

const TopLeyend = () => {
  return (
    <div className="flex md:hidden flex-row justify-end gap-1 py-2 text-secundary bg-black">
        <p className="text-sm p-2 font-bold my-auto text-secundary uppercase">
           Maipú, Mendoza
        </p>
        <FaMapSigns className="text-2xl my-auto mr-4"/>
    </div>
  );
};

export default TopLeyend;