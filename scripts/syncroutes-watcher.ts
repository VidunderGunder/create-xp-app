import * as chokidar from "chokidar";
import { exec } from "child_process";

const runScript = (scriptPath: string, callback?: (stdout: string) => void) => {
  exec(`pnpm ${scriptPath}`, (error, stdout) => {
    // if (error) {
    //   console.error(error);
    //   return;
    // }
    callback?.(stdout);
  });
};

chokidar.watch("../packages/app/routes/**").on("all", () =>
  // TODO: Optimize syncroutes with event and path
  // event: string,
  // path: string
  {
    runScript("syncroutes");
  },
);
