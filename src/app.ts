import express from "express";
import { router } from "./routes/router";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

export { app }