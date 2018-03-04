import shelljs from "shelljs";

if ( process.env.NODE_ENV === "development") {
  shelljs.exec("npm run dev");
} else {
  shelljs.exec("npm start");
}