export default function Countries() {
    const url = "https://restcountries.eu/rest/v2/all";
    const [countries, set_countries] = useState([]);
    const [sorting, set_sorting] = useState("population");
  
    const getCountries = async (url) => {
      const response = await Axios.get(url);
      const countriesWithPatients = response.data.map((countryCard, i) => {
        const countryCardWithPatient = countryCard;
        countryCardWithPatient.id = i;
        countryCardWithPatient.patientCounter = 0;
        return countryCardWithPatient;
      });
      set_countries(countriesWithPatients);
    };
    useEffect(() => {
      try {
        getCountries(url);
      } catch (err) {
        console.log("got an error", err);
      }
    }, []);
  
    const sortingHandler = (event) => {
      console.log("User changed the value", event.target.value);
      set_sorting(event.target.value);
    };
    if (sorting === "population") {
      countries.sort((a, b) => b.population - a.population);
    }
    if (sorting === "size") {
      countries.sort((a, b) => b.area - a.area);
    }
  
    const addAPatientToACountry = (id) => {
      console.log("this is the function in the parent", id);
      const newArray = countries.map((countryCard) => {
        if (countryCard.id === id) {
          const countryCardAddedPatient = countryCard;
          countryCardAddedPatient.patientCounter = countryCard.patientCounter + 1;
          return countryCardAddedPatient;
        }
        return countryCard;
      });
      set_countries(newArray);
    };
    return (
      <div>
        This component is working
        <select onChange={sortingHandler}>
          <option value="population">Population</option>
          <option value="size">Size</option>
        </select>
        <ul>
          {countries.map((countryCard, i) => {
            return (
              <li key={i}>
                <Country
                  data={countryCard}
                  addAPatientToACountry={addAPatientToACountry}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }