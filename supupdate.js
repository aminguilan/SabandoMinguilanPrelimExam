const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."SM_Supplier" SET "sup_NAME" = $1 WHERE "sup_ID" = 2 RETURNING *';
const data = ['Angela Mae'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();