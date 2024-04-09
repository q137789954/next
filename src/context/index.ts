import serverContext from "server-only-context";

export const [getLocale, setLocale] = serverContext("en");
export const [getUserId, setUserId] = serverContext("");