const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
const data = ['Mask',3];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();