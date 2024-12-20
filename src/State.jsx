
function Country({Data}){
    function collectData(e){
      console.log(e.target.value);
      const countryData=Data.filter(country=>
        country.name===e.target.value
      );
      console.log(countryData?.[0]?.states);
    }
      return(
          <select
            name="country" onChange={collectData}
            className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          >
            {
              Data.map(country=>{
                return <option key={country.id} value={`${country.name}`} >{country.name}</option>
              })
            }
            <option value="US">US</option>
          </select>
      );
  }
  
  export default Country;