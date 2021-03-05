const getTimeStamp = (): string => new Date().toISOString();
const info = (namespace: string, message: string, object?: any) =>
  object ? console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object) : console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
const warn = (namespace: string, message: string, object?: any) =>
  object ? console.info(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object) : console.info(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
const error = (namespace: string, message: string, object?: any) =>
  object ? console.info(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object) : console.info(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
const debug = (namespace: string, message: string, object?: any) =>
  object ? console.info(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object) : console.info(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);

export default {
  info,
  warn,
  error,
  debug
};