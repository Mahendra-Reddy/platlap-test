import config from "../config/dev";

export const getParamsBySearchType = (searchType, name) => {
  const { timeStamp, apiKey, hashKey } = config;
  const obj = {
    ...(searchType === "characters" && { nameStartsWith: encodeURIComponent(name) }),
    ...(searchType === "comics" && { titleStartsWith: encodeURIComponent(name) }),
    ...(searchType === "series" && { titleStartsWith: encodeURIComponent(name) }),
    ts: `${timeStamp}`,
    apikey: `${apiKey}`,
    hash: `${hashKey}`,
  };
  return obj;
};
