const pool = require("./db");
       ;(async () => {
        const client = await pool.connect()
            try {
                
                //SUPPLIER
                await client.query('BEGIN')
                const supplier1 = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
                const addsup1 = ['Yesha'];
                const addsupplier = await client.query(supplier1,addsup1);

                await client.query('BEGIN')
                const supplier2 = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
                const addsup2 = ['Yema'];
                const addsupplier2 = await client.query(supplier2,addsup2);

                await client.query('BEGIN')
                const supplier3 = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
                const addsup3 = ['Yura'];
                const addsupplier3 = await client.query(supplier3,addsup3);

                await client.query('BEGIN')
                const supplier4 = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
                const addsup4 = ['Kim'];
                const addsupplier4 = await client.query(supplier4,addsup4);

                await client.query('BEGIN')
                const supplier5 = 'INSERT INTO "PrelimExam"."SM_Supplier"("sup_NAME") VALUES ($1) RETURNING *';
                const addsup5 = ['Mae'];
                const addsupplier5 = await client.query(supplier5,addsup5);

                //PRODUCT
                const prod1 = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
                const prodd1 = ['Mic',3];
                const addproduct = await client.query(prod1,prodd1);

                const prod2 = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
                const prodd2 = ['Pen',3];
                const addproduct2 = await client.query(prod2,prodd2);

                const prod3 = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
                const prodd3 = ['Cup',3];
                const addproduct3 = await client.query(prod3,prodd3);

                const prod4 = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
                const prodd4 = ['Mag',3];
                const addproduct4 = await client.query(prod4,prodd4);

                const prod5 = 'INSERT INTO "PrelimExam"."SM_Product"("prod_NAME","sup_ID") VALUES ($1, $2) RETURNING *';
                const prodd5 = ['Wire',3];
                const addproduct5 = await client.query(prod5,prodd5);

                //CUSTOMER
                const cust1 = 'INSERT INTO "PrelimExam"."SM_Customer"("cust_NAME") VALUES ($1) RETURNING *';
                const addcust1 = ['Prim'];
                const addcustomer1 = await client.query(cust1,addcust1);

                const cust2 = 'INSERT INTO "PrelimExam"."SM_Customer"("cust_NAME") VALUES ($1) RETURNING *';
                const addcust2= ['Lia'];
                const addcustomer2 = await client.query(cust2,addcust2);

                const cust3 = 'INSERT INTO "PrelimExam"."SM_Customer"("cust_NAME") VALUES ($1) RETURNING *';
                const addcust3= ['Liam'];
                const addcustomer3 = await client.query(cust3,addcust3);
                
                const cust4 = 'INSERT INTO "PrelimExam"."SM_Customer"("cust_NAME") VALUES ($1) RETURNING *';
                const addcust4 = ['Leo'];
                const addcustomer4= await client.query(cust4,addcust4);
                
                const cust5 = 'INSERT INTO "PrelimExam"."SM_Customer"("cust_NAME") VALUES ($1) RETURNING *';
                const addcust5= ['Primo'];
                const addcustomer5 = await client.query(cust5,addcust5);


                await client.query('COMMIT');
                
                    
            } catch (sm) {
                await client.query('ROLLBACK')
                throw sm;
            } 
            finally {
                client.release()
            }
            })().catch(sm => console.error(sm.stack))




