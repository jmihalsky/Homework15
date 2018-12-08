var connection = require("./connection.js");

function printQuestionMarks(num){
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for(var key in ob){
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0)
            {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    all_burgers: function(tableInput, qryres){
        var qrystrg = "select * from ??";
        connection.query(qrystrg, [tableInput],function(err,res){
            if(err) throw err;
            qryres(res);
        });
    },
    create_burgers: function(tableInput,flds,vls,qryres){
        var qrystrg = "insert into " + tableInput;

        qrystrg += " (";
        qrystrg += flds.toString();
        qrystrg += ") ";
        qrystrg += "values ('";
        qrystrg += vls;
        qrystrg += "') ";

        console.log(qrystrg);

        connection.query(qrystrg,vls,function(err,res){
            if(err)
            {
                throw err;
            }

            qryres(res);
        });
    },
    update_burgers: function(tableInput,flds,cond,qryres){
        var qrystrg = "update " + tableInput + " set " + flds + " = true where id = " + cond;

        console.log(qrystrg);

        connection.query(qrystrg, function(err,res){
            if(err)
            {
                throw err;
            }
            qryres(res);
        });
    }
};

module.exports = orm;