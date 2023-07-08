export const HOST = process.env.NEXT_PUBLIC_SERVER_URL

const AUTH_ROUTE = `${HOST}/api/auth`;
export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check-user`;

