import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  // クライアント側で使用するsession（useSessionから取得するオブジェクト）にプロパティを追加します。
  // ここでは`role`と`backendToken`を追加しています。
  interface Session {
    user: {
      role?: string;
      backendToken?: string;
    } & DefaultSession["user"];
  }
  interface User {
    role?: string;
    backendToken?: string;
  }
}

declare module "next-auth/jwt" {
  // "jwt"コールバックのtokenパラメータに任意のプロパティを追加します。
  interface JWT {
    role?: string;
    backendToken?: string;
  }
}
