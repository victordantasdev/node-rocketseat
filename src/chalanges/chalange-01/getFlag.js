const getFlag = (flag) => {
  const { argv } = process;
  return argv[argv.indexOf(flag) + 1];
}

module.exports = getFlag;
