const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."SM_Customer" SET "cust_NAME" = $1 WHERE "cust_ID" = 6 RETURNING *';
const data = ['Lee'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();