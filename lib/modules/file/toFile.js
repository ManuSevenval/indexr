import curry from 'lodash/curry';
import fs from 'fs';
import path from 'path';
import { info } from '../../utils/logger';

export default curry((config, value, next) => {
  const { outputFilename } = config;
  const { modulePath, value: contents } = value;

  // sanity checks
  if (!modulePath) return next('No module path sent to fileWriter.');
  if (!contents) return next('No contents sent to fileWriter.');

  // write content to file
  const filename = path.resolve(modulePath, outputFilename);
  info(`${filename}`);
  fs.writeFile(filename, contents, () => {
    next(null, 'File sucessfully written.');
  });
  return undefined;
});
