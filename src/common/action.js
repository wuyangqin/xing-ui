const xError = function (errorMsg) {
  console.error(`【X-UI错误】${errorMsg}`);
}

const xWarning = function (warningMsg) {
  console.error(`【X-UI提示】${warningMsg}`);
}

export default {
  xError,
  xWarning
}
