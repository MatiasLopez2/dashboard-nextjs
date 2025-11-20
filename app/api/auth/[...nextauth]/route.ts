import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/auth.config";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };