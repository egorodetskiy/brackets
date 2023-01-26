module.exports = function check(str, bracketsConfig) {
 bracketsConfig = bracketsConfig.map(item => item.join(''));
  for (let i = str.length; i > 0; i--) {
    bracketsConfig.forEach(newItem => {
      str = str.replace(`${newItem}`, '');
    });
  }
  return str.length == 0;
}
