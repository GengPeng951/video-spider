import { RouterContext } from "koa-router";
import superagent from "superagent";

import { successBody, hintErrorBody } from "../utils/response";
import { resolve } from "dns";

export const init = async (ctx: RouterContext) => {
  // const { version, pageSize, page } = ctx.request.query;
  // let hotNews = [];
  let result = await spiderGetText();
  console.log("*************8", result);
  try {
    ctx.body = successBody(result);
  } catch (e) {
    ctx.body = hintErrorBody("查询失败");
  }
};

const spiderGetText = async (): Promise<string | undefined> => {
  return new Promise(resolve => {
    superagent.get("https://image.baidu.com/").end((err, res) => {
      if (!err) {
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
        // 抓取热点新闻数据
        resolve(res.text);
      }
    });
  });
};
