
const pool = require("./db");
;(async () => {
  const client = await pool.connect()
  try {

      await client.query('BEGIN')
      await client.query('SAVEPOINT A')
        const po1 = 'INSERT INTO "PrelimExam"."SM_PurchaseOrder"("po_ID","po_NAME","sup_ID","cust_ID") VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
        const orderpo1 = [38,'Cassy',3,6];
        const smpo1 = await client.query(po1,orderpo1);

        await client.query('BEGIN')
        await client.query('SAVEPOINT B')
          const po2 = 'INSERT INTO "PrelimExam"."SM_PurchaseOrder"("po_ID","po_NAME","sup_ID","cust_ID") VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
          const orderpo2 = [39,'Romina',3,6];
          const smpo2 = await client.query(po2,orderpo2);

          await client.query('BEGIN')
          await client.query('SAVEPOINT C')
            const po3 = 'INSERT INTO "PrelimExam"."SM_PurchaseOrder"("po_ID","po_NAME","sup_ID","cust_ID") VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
            const orderpo3= [40,'Seth',3,6];
            const smpo3 = await client.query(po3,orderpo3);

    await client.query('COMMIT')

    } catch (e) {
        await client.query('ROLLBACK')
        throw e

      } finally {
        client.release()
      }
    })().catch(e => console.error(e.stack))