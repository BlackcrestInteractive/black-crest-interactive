import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Owner",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const ownerEmail = process.env.OWNER_EMAIL;
        const ownerPasswordHashB64 = process.env.OWNER_PASSWORD_HASH_B64;
const ownerPasswordHash = ownerPasswordHashB64
  ? Buffer.from(ownerPasswordHashB64, "base64").toString("utf8")
  : undefined;

        if (!ownerEmail || !ownerPasswordHash) {
          return null;
        }

        const email = String(credentials.email).trim();
        const password = String(credentials.password);

        if (email !== ownerEmail.trim()) {
          return null;
        }

        const passwordCorrect = await bcrypt.compare(
          password,
          ownerPasswordHash.trim()
        );

        if (!passwordCorrect) {
          return null;
        }

        return {
          id: "blackcrest-owner",
          name: "Blackcrest Owner",
          email: ownerEmail,
        };
      },
    }),
  ],

  pages: {
    signIn: "/owner/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,
});
