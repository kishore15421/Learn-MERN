import legendItems from "../entities/LegendItems";
// import { features } from "../data/countries.json";
import * as fea from '../data/state.json';
//    this.setState(features);
const {features} =  fea;
class LoadCountryTask {
  setState = null;

  load = (setState) => {
    this.setState = setState;
    this.#processCovidData([{ISO3: "Andhra Pradesh", Confirmed: 500}])
  };

  #processCovidData = (covidCountries) => {
    console.log(covidCountries)
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      const covidCountry = covidCountries.find(
        (covidCountry) => country.properties.NAME_1 === covidCountry.ISO3
      );
      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
      }
      this.#setCountryColor(country);
    }

    this.setState(features);
  };

  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );

    if (legendItem != null) country.properties.color = legendItem.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountryTask;