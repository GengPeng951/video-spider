import Router from "koa-router";
import { spider } from "./controller";

const router = new Router({ prefix: "" });

router.get("/spider/init", ...([spider.init] as any));

export { router };
