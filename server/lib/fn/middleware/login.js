/**
 * Created by danlu on 2018/2/26.
 */
module.exports = function(req, res, data) {
  req.session.user=null;
  console.log('api middleware session is ok');
  if(!!data.data&&!!data.data.type&&data.data.type==-1)return
  req.session.user=data;
}