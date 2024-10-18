import * as process from "node:process";

export const loginUrl = `/minside/varsler-ny/oauth2/login?redirect=${import.meta.env.TMS_APP_BASE_URL}`;
export const baseUrl = import.meta.env.TMS_APP_BASE_URL;
export const minSideUrl = import.meta.env.TMS_MIN_SIDE_URL;
export const varselApiUrl = import.meta.env.TMS_VARSLER_API_URL;
console.log("import.meta",import.meta.env)
console.log(process.env.TMS_APP_BASE_URL)