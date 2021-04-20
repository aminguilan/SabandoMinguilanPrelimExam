const pool = require("./db");

pool.query ('SELECT * FROM "PrelimExam"."SM_Supplier" ', (err, res)=>{

    try {
        console.log(res.rows);
    } catch (err) {
        console.error(err.message);
        
    }

});

pool.query ('SELECT * FROM "PrelimExam"."SM_Product" ', (err, res)=>{

    try {
        console.log(res.rows);
    } catch (err) {
        console.error(err.message);
        
    }

});

pool.query ('SELECT * FROM "PrelimExam"."SM_Customer" ', (err, res)=>{

    try {
        console.log(res.rows);
    } catch (err) {
        console.error(err.message);
        
    }

});
pool.end();