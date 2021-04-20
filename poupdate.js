const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."SM_PurchaseOrder" SET "po_NAME" = $1 WHERE "po_ID" = 5 RETURNING *';
const data = ['Jennie'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();