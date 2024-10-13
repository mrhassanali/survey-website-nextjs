export const ROOT:string = "/";
export const LOGIN:string = `${ROOT}login`;
export const REGISTER:string = `${ROOT}register`;
export const DASHBOARD:string = `${ROOT}dashboard`;
export const ADMIN:string = `${ROOT}admin`;

export const USER_DASHBOARD: { [key: string]: string } = {
  DASHBOARD: `${ROOT}dashboard`,
  PAID_SURVEY: `${ROOT}dashboard/paid-survey`,
  EARNING: `${ROOT}dashboard/earning`,
  HISTORY: `${ROOT}dashboard/history`,
  REFERRAL_PROGRAM: `${ROOT}dashboard/referral-program`,
  MONEY_WITHDRAWAL: `${ROOT}dashboard/money-withdrawal`,
  FAQS: `${ROOT}dashboard/faqs`,
};

export const ADMIN_DASHBOARD: { [key: string]: string } = {
  DASHBOARD: `${ROOT}admin`,
  USERS: `${ROOT}admin/users`,
  SURVEYS: `${ROOT}admin/surveys`,
  PAYMENTS: `${ROOT}admin/payments`,
  SETTINGS: `${ROOT}admin/settings`,
};
