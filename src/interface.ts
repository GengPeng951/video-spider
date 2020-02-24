import Koa from "koa";

export interface AppContext extends Koa.Context {
  // TODO:  给 cat 加上类型
  cat: any;
}

export interface UserInfo {
  id: number;
  name: string;
}

export interface CustomUser {
  userInfo: UserInfo;
}

export interface UploadSignPayload {
  contentType: string;
  fileName: string;
  uuid: string;
  userId: number;
}

export enum PermissionCode {
  VIEW = "10001", //查看权限
  UPLOAD = "20001", //上传权限
  USER_SETTING = "30001" //用户设置权限
}

export enum RoleCode {
  ADMIN = "10001", //管理员
  UPLOADER = "20001", //上传者
  VIEWER = "30001" //查看者
}
