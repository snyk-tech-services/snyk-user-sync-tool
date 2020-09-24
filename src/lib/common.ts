// to catch base directory variations on both windows and *nix
export const BASE_DIR = __dirname.replace(/(\/|\\)(dist$|dist(\/|\\).*)/, '/');
export const DB_DIR = BASE_DIR.concat('db');
export const PREV_DIR = BASE_DIR.concat('prev/');
export const LOG_DIR = BASE_DIR.concat('log/');
export const PENDING_INVITES_FILE = DB_DIR.concat('/pending_invites.json');
export const LOG_LIMIT = 25;

var m = new Date();
export var LOG_ID =
  m.getUTCFullYear() +
  '_' +
  ('0' + (m.getUTCMonth() + 1)).slice(-2) +
  '_' +
  ('0' + m.getUTCDate()).slice(-2) +
  '_' +
  ('0' + m.getUTCHours()).slice(-2) +
  '_' +
  ('0' + m.getUTCMinutes()).slice(-2) +
  '_' +
  ('0' + m.getUTCSeconds()).slice(-2);

export const LOG_FILE = LOG_DIR.concat(`user-sync-run-${LOG_ID}.log`);
