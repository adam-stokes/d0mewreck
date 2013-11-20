
/*
 * API
 */

exports.list = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.add = function(req, res){
  res.render('index', { title: 'Express - added model' });
};
