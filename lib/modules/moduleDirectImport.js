import curry from 'lodash/curry';

// Strip everything after the second / in a path. ie '/foo/bar' => '/foo'
function moduleDirectImport(config, filePath, next) {
  const { directImport } = config;
  if (directImport) return next(null, filePath);
  const m = filePath.match(/^.[^/]*/);
  return next(null, m && m[0] || filePath);
}

export default curry(moduleDirectImport);