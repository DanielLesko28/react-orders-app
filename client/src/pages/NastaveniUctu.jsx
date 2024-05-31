const NastaveniUctu = () => {
  return (
    <div className="w-full border-2 bg-white">
      <form class="w-full">
        <div class="w-full">
          <h1 className="text-xl pl-4 py-4">Kontaktní údaje</h1>
          <div className="flex w-full justify-evenly">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700  rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Jméno*`}
              required={true}
            />
            <input
              class="appearance-none w-full px-2 mx-4 py-4 my-2  block bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Příjmení*"
            />
          </div>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2 w-full bg-gray-100 text-gray-700  rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Email*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2 w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Telefon*"
              required={true}
            />
          </div>
          <h1 className="text-xl pl-4 py-4">Fakturační údaje</h1>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700  rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Název firmy*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Ulice*"
              required={true}
            />
          </div>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700 border rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Město*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="PSČ*"
              required={true}
            />
          </div>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700 border rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`IČ*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="DIČ*"
              required={true}
            />
          </div>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700 border rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Jméno*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Příjmení*"
              required={true}
            />
          </div>
          <div className="flex  w-full">
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700 border rounded  leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={`Telefon*`}
              required={true}
            />
            <input
              class="appearance-none px-2 mx-4 py-4 my-2  w-full bg-gray-100 text-gray-700   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Email*"
              required={true}
            />
          </div>
          <button className="text-white bg-blue-500 p-2 px-4 mx-4 my-2 rounded">
            Uložit změny
          </button>
        </div>
      </form>
    </div>
  );
};

export default NastaveniUctu;
