const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."SM_PurchaseOrder"("po_NAME","sup_ID","cust_ID") VALUES ($1, $2, $3) RETURNING *';
const data = ['Lisa',2,7];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();