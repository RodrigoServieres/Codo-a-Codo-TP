import { Render } from "./render.js";
import { pabloinjector } from "./pabloinjector.js";

const app = new Render("app");

const url = "https://sheetdb.io/api/v1/g10mvup09298a";
  
 


app.getData(url, pabloinjector);