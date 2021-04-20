
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."SM_Product" SET "prod_NAME" = $1 WHERE "prod_ID" = 28 RETURNING *';
const data = ['Phone'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();
