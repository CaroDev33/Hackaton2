import express from 'express';
import connection from '../helpers/sql';

const router = express.Router();

router.get('/all', (req, res) => {
	const sqlRequest = `select * from attractions`;
	connection.query(sqlRequest, (err, results) => {
		res.send(results);
	});
});

router.get('/sort/:array', (req, res) => {
	let sqlRequest = `select * from attractions `;
	let jsonArray = JSON.parse(req.params.array)
	for(let i = 0; i < jsonArray.length; i++) {
		if(jsonArray[i].type === 'duree') {
			if(i === 0) {
				sqlRequest += `where ${jsonArray[i].type} <= '${jsonArray[i].action}'`
			} else {
				sqlRequest += ` and ${jsonArray[i].type} <= '${jsonArray[i].action}'`
			}
		} else {
			if(i === 0) {
				sqlRequest += `where ${jsonArray[i].type} = '${jsonArray[i].action}'`
			} else {
				sqlRequest += ` and ${jsonArray[i].type} = '${jsonArray[i].action}'`
			}
		}
	}
	connection.query(sqlRequest, (err, results) => {
		res.send(results);
	});
});

export default router;
