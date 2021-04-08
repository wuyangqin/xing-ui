const xError = function (errorMsg) {
  throw new Error(`[X-UI错误]${errorMsg}`);
}

const xWarning = function (warningMsg) {
  console.warn(`[X-UI提示]${warningMsg}`);
}

export default {
  xError,
  xWarning
}
