const goallist = function(req, res){
    res.render('goals',{
        goals:
        [
            {desc:'Totti against Inter 2005-2006', embed:'QxQWxNNHDuE'},
            {desc:'Totti against Sampdoria in 2006-2007', embed:'G0GyYaI6DoU'}
        ]});
};

module.exports = {
    goallist
};