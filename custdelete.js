const pool = require("./db");

const sql = 'DELETE FROM "PrelimExam"."SM_Customer" WHERE "cust_NAME" = $1 RETURNING *';
const data = ['Lia'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});

pool.end();	