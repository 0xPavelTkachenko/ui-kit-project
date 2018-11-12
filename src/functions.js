module.exports = {
  getFullClassname: function(blockname, classname, modes) {
    blockname = blockname || '';
    classname = classname || '';
    modes = modes || [];

    let m = modes.map((mode) => {
      return blockname + '_' + mode;
    }).join(' ');

    let tmp = m && classname ? m + ' ' + classname : m || classname;
    return blockname && tmp ? blockname + ' ' + tmp : blockname || tmp;
  }
};
