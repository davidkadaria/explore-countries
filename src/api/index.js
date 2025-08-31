const FIELDS = [
  "name",
  "flags",
  "population",
  "region",
  // 'subregion',
  "capital",
  // 'tld',
  "currencies",
  "languages",
  "borders",
  "cca3",
  "fifa",
];

const API_ENDPOINT = `https://restcountries.com/v3.1/all?fields=${FIELDS.join(
  ","
)}`;

export { API_ENDPOINT };
