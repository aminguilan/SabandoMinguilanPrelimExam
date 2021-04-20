const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."SM_LineItem"("po_ID","prod_ID","litem_NAME") VALUES ($1, $2, $3) RETURNING *';
const data = [6,13,'Rose'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();