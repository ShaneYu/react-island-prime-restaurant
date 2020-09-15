import fs from 'fs';
import path from 'path';

const serverDir = fs.realpathSync(process.cwd());

const resolveServer = (relativePath: string) =>
  path.resolve(serverDir, relativePath);

export default {
  dotenv: resolveServer('.env'),
  serverPath: resolveServer('.'),
};
