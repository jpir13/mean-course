const scudettolist = function(req, res){
    res.render('records',{
        scudettos:
        [
            {year:'1941-42'},
            {year:'1982-83'},
            {year:'2000-01'}
        ]});
};
module.exports = {
    scudettolist
};