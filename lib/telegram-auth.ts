import crypto from "node:crypto";

const SESSION_COOKIE = "ustoz_session";
const SESSION_DURATION = 7 * 24 * 60 * 60;

type TelegramUser = {
  id: number;
  first_name?: string;
  username?: string;
};

function safeCompare(a: string, b: string) {
  const first = Buffer.from(a, "hex");
  const second = Buffer.from(b, "hex");

  return (
    first.length === second.length &&
    first.length > 0 &&
    crypto.timingSafeEqual(first, second)
  );
}

export function verifyTelegramInitData(initData: string): TelegramUser | null {
  const botToken = process.env.BOT_TOKEN;

  if (!botToken || !initData) return null;

  try {
    const params = new URLSearchParams(initData);
    const receivedHash = params.get("hash");

    if (!receivedHash || !/^[a-f0-9]{64}$/i.test(receivedHash)) {
      return null;
    }

    params.delete("hash");

    const authDate = Number(params.get("auth_date"));
    const now = Math.floor(Date.now() / 1000);

    if (
      !Number.isFinite(authDate) ||
      authDate > now + 300 ||
      now - authDate > 3600
    ) {
      return null;
    }

    const dataCheckString = [...params.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    const secretKey = crypto
      .createHmac("sha256", "WebAppData")
      .update(botToken)
      .digest();

    const calculatedHash = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    if (!safeCompare(calculatedHash, receivedHash)) return null;

    const userData = params.get("user");
    if (!userData) return null;

    const user = JSON.parse(userData) as TelegramUser;

    if (!Number.isSafeInteger(user.id) || user.id <= 0) return null;

    return user;
  } catch {
    return null;
  }
}

export function createSession(telegramId: string): string {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET noto'g'ri sozlangan");
  }

  const payload = Buffer.from(
    JSON.stringify({
      telegramId,
      exp: Math.floor(Date.now() / 1000) + SESSION_DURATION,
    })
  ).toString("base64url");

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return `${payload}.${signature}`;
}

export function verifySession(token: string): string | null {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) return null;

  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature || !/^[a-f0-9]{64}$/i.test(signature)) {
      return null;
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    if (!safeCompare(expectedSignature, signature)) return null;

    const data = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    if (
      typeof data.telegramId !== "string" ||
      !/^\d+$/.test(data.telegramId) ||
      !Number.isFinite(data.exp) ||
      data.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return data.telegramId;
  } catch {
    return null;
  }
}

export const sessionCookie = {
  name: SESSION_COOKIE,
  maxAge: SESSION_DURATION,
};
