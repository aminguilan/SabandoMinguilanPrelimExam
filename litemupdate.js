const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."SM_LineItem" SET "litem_NAME" = $1 WHERE "po_ID" = 6 RETURNING *';
const data = ['Lisa'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();