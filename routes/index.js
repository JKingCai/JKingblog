module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index',{title:'JKing的博客'});
  });

  app.get('/reg',function(req,res){
    res.render('reg',{title:'注册'});
  });

  app.get('/login',function(req,res){
    res.render('login',{title:'登录'});
  });
  app.post('/login',function(req,res){

  });

  app.post('/post',function(req,res){
  });


  app.get('/logout',function(req,res){
    
  });
}
