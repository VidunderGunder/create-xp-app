import { execSync } from "child_process";
import { platform } from "os";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
const ports: number[] = [...range(3000, 3010), 19000, 5556];

const _platform = platform();
for (const port of ports) {
  try {
    if (_platform === "darwin") {
      // Mac OS
      execSync(`lsof -ti:${port} | xargs kill -9`);
    } else if (_platform === "linux") {
      // Linux
      execSync(`fuser -k ${port}/tcp`);
    } else if (_platform === "win32") {
      // Windows
      execSync(
        `taskkill /F /PID $(netstat -ano | grep ${port} | awk '{print $5}')`,
      );
    }
  } catch (error) {
    console.error(`Failed to kill process on port ${port}: ${error}`);
  }
}
