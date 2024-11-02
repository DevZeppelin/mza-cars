import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
        <button
          className="bg-primary text-white py-3 px-10 my-4 text-lg uppercase rounded-md"
          onClick={() => router.back()}
        >
          Volver 👈
        </button>
      </div>
  )
}

export default BackButton