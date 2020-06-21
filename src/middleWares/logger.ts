import { Middleware } from "redux";

type Logger = Middleware;

type GetLog = () => string[];

function createLoggerMiddleWare(): [Logger, GetLog] {
  const logs: string[] = [];

  const logger: Middleware = () => next => action => {
    console.log('dispatching', action)
    logs.push(action.type);
    let result = next(action)
    return result
  }

  const getLog: GetLog = () => logs;

  return [logger, getLog];
}

export const [logger, getLog] = createLoggerMiddleWare();

