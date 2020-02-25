import { RouterContext } from "koa-router";

import { successBody, hintErrorBody } from "../utils/response";
import puppeteer from "puppeteer";
const url = "https://image.baidu.com/";

export const init = async (ctx: RouterContext) => {
  try {
    const imgList = await getImgSrcs();
    ctx.body = successBody(imgList);
  } catch (e) {
    console.log(e);
    ctx.body = hintErrorBody("查询失败");
  }
};

const getImgSrcs = async (): Promise<string[]> => {
  const browser = await puppeteer.launch({
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: false
  });
  const page = await browser.newPage();

  await page.goto(url);
  let el = await page.$("#imglist");
  let imgList: string[] = [];
  if (el) {
    imgList = await el.$$eval("img", node => {
      return (node as HTMLImageElement[]).map(item => item.src);
    });
  }

  browser.close();
  return imgList;
};
