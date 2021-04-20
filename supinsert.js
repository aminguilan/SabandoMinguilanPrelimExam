const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
const data = ['Alexis'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});

pool.end();