import axios from "axios";


export const SearchCountry  = async (country) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://disease.sh/v3/covid-19/countries/${country}?yesterday=today&strict=true`
    })
    console.log(res);
    const data = await res.data
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

export const SearchCountryAlL  = async () => {
  try {
    const res = await axios({
      method: "get",
      url: "https://disease.sh/v3/covid-19/all"
    })
    console.log(res);
    const data = await res.data
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}


