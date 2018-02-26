/**
 * Created by danlu on 2018/2/26.
 */
module.exports = function(req, res, data) {
  console.log('api middleware session is ok');
  req.session.user=data;
}