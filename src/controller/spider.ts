import { RouterContext } from "koa-router";
import superagent from "superagent";
import cheerio from "cheerio";

import { successBody, hintErrorBody } from "../utils/response";
// const url = "https://www.qqtn.com/tp/wmtp_1.html";
const url = "https://image.baidu.com/";
export const init = async (ctx: RouterContext) => {
  // const { version, pageSize, page } = ctx.request.query;
  // let hotNews = [];
  let result = await spiderGetText();
  try {
    if (result) {
      let list: string[] = await getImgForBaidu(result);

      ctx.body = successBody(list.length);
    } else {
      ctx.body = hintErrorBody("查询失败");
    }
  } catch (e) {
    ctx.body = hintErrorBody("查询失败");
  }
};
const getImgForBaidu = async (result: string): Promise<string[]> => {
  let $ = cheerio.load(result);
  let list: string[] = [];
  $("#imglist > img").each((index, item) => {
    let src = $(item).attr("src");
    src && list.push(src);
  });
  return list;
};
const getImgs = async (result: string): Promise<string[]> => {
  let $ = cheerio.load(result);
  let list: string[] = [];
  $("ul.g-gxlist-imgbox li img").each((index, item) => {
    let src = $(item).attr("src");
    src && list.push(src);
  });
  return list;
};

const spiderGetText = async (): Promise<string | undefined> => {
  return new Promise(resolve => {
    superagent
      .get(url)
      .accept("png")
      .end((err, res) => {
        if (!err) {
          // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
          // 抓取热点新闻数据
          resolve(res.text);
        }
      });
  });
};
