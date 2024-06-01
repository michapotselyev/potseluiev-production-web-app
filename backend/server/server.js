import express from 'express';
import compression from "compression";
import helmet from "helmet";
import xss from "xss-clean";
import bodyParser from "body-parser";
import cors from "cors";

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
// const appRouter = new AppRouter(app);

app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(xss());

if (process.env.NODE_ENV === "production") {
  app.use("/api", apiLimiter);
}

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "1000mb" }));

// appRouter.init();

export default app;
