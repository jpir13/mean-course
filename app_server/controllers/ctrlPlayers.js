const playerlist = function(req, res){
    res.render('players',{
        players:
        [
            {name:'Francesco Totti', appearances:'786', goals:'307'},
            {name:'Daniele De Rossi', appearances:'588', goals:'61'},
            {name:'Giacomo Losi', appearances:'455', goals:'2'}
        ]});
};
module.exports = {
    playerlist
};