import Router from "koa-router";
import { demo } from "./controller";

const router = new Router({ prefix: "" });

router.get("/demo/list", ...([demo.list] as any));

export { router };
