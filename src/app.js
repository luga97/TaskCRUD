import express from "express";
import { engine } from "express-handlebars"
import indexRoutes from "./routes/index.routes";
import path from "path";
import db from "./database";
import morgan from "morgan";
const app = express()


app.engine(".hbs",engine({
    extname: ".hbs",
}))
app.set("view engine",".hbs")

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))

app.set("views",path.join(__dirname,"views"))

app.use(indexRoutes)

app.use(express.static(path.join(__dirname,"public")))

export default app