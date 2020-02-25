import Router from "koa-router";
import { spider, puppeteerSpider } from "./controller";

const router = new Router({ prefix: "" });

router.get("/spider/init", ...([spider.init] as any));
router.get("/puppeteerSpider/init", ...([puppeteerSpider.init] as any));

export { router };
