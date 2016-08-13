import curry from 'lodash/curry';
import getFileList from '../utils/getFileList';
import trimTrailingSlash from '../utils/trimTrailingSlash';

export const findSubmodules = curry((config, rootFolder, next) => {
  const { submodules } = config;
  getFileList(rootFolder, submodules)
    .then((result) => {
      next(null, result.map(trimTrailingSlash));
    })
    .catch(next);
});

export default { findSubmodules };