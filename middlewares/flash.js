module.exports = function (req, res, next) {
  res.local.flash = res.session.flash;
  delete res.session.flash;
  next();
};