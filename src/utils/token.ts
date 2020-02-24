// import jwt from 'jsonwebtoken'
// import { secretOrPrivateKey } from './leo'
// import { UserInfo, UploadSignPayload } from '../interface'
// import uuidv1 from 'uuid/v1'

// const uploadSecret = secretOrPrivateKey + '_upload'

// type TokenPayload<T = any> = T | undefined | null

// interface TokenInfo {
//   token: string
//   secretkey: string
// }

// export const EXPIRES_TIME = 1000 * 60 * 60 * 24 * 6
// export const TOKEN_KEY = 'MSFE_ACCESS'
// export enum TokenScene {
//   Login = 1,
//   Upload = 2
// }

// export const createToken = (payload: UserInfo): TokenInfo => {
//   return createSceneToken(payload, EXPIRES_TIME, TokenScene.Login)
// }

// export const verifyToken = (token: string, secretkey: string) => {
//   return jwt.verify(token, secretkey) as TokenPayload<UserInfo>
// }

// export const createUploadToken = (payload: UploadSignPayload): TokenInfo => {
//   return createSceneToken(payload, 1000 * 60 * 30, TokenScene.Upload)
// }

// export const verifyUploadToken = (token: string, secretkey: string) => {
//   return jwt.verify(token, secretkey) as TokenPayload<UploadSignPayload>
// }

// export function createSceneToken<T extends string | object | Buffer>(
//   payload: T,
//   expiresIn: number,
//   scene: TokenScene
// ): TokenInfo {
//   const secretkey = getSceneSecret(uuidv1(), scene)
//   return {
//     token: jwt.sign(payload, secretkey, {
//       expiresIn
//     }),
//     secretkey
//   }
// }

// const getSceneSecret = (secretkey: string, scene: TokenScene): string => {
//   if (scene === TokenScene.Login) {
//     return secretOrPrivateKey + secretkey
//   } else if (scene === TokenScene.Upload) {
//     return uploadSecret + secretkey
//   } else throw new Error('签名场景不存在')

//   return secretkey
// }
