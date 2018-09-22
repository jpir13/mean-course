const index = function(req, res){
    res.render('index', { title: 'AS Roma History' });
};
module.exports = {
    index
};