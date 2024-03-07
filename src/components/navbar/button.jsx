//

export default function MyNavButton({ text }) {
  //

  return (
    <div className="flex justify-center p-1">
      <button className="bg-[#215BED] px-7 mr-8 py-3 border-none rounded-md text-white font-semibold">
        {text}
      </button>
    </div>
  );
}
