var orm = require("../config/orm.js");

var brgr = {
    all: function(qryres){
        orm.all_burgers("burgers", function(res){
            qryres(res);
        });
    },
    create: function(vals,qryres){
        orm.create_burgers("burgers", "burger_name",vals,function(res){
            qryres(res) 
        });
    },
    update: function(flds,cond,qryres){
        orm.update_burgers("burgers",flds,cond, function(res){
            qryres(res);
        });
    }
};

module.exports = brgr;