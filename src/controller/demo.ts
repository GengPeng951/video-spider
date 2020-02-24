import { RouterContext } from "koa-router";

import { successBody, hintErrorBody } from "../utils/response";
/* ================ version list ================ */
export const list = async (ctx: RouterContext) => {
  const { version, pageSize, page } = ctx.request.query;
  // console.log('ctx.userInfo', ctx.userInfo)

  // const token = ctx.cookies.get('MSFE_ACCESS') || ''
  // console.log(
  //   ' *************************** token ***************************',
  //   token
  // )
  try {
    ctx.body = successBody(123);
    // ctx.body = successBody({
    //   list: [
    //     { id: 1, version: '1.89.3', desc: '' },
    //     { id: 2, version: '1.99.2', desc: '' }
    //   ],
    //   total: 45
    // })
  } catch (e) {
    ctx.body = hintErrorBody("查询失败");
  }
};
