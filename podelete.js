const pool = require("./db");

const sql = 'DELETE FROM "PrelimExam"."SM_PurchaseOrder" WHERE "po_ID" = $1 RETURNING *';
const data = [7];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});

pool.end();	