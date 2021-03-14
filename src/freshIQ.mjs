// import postman-newman
import newman from 'newman';

// writeResponse
import { writeResponse } from './scripts/functions.mjs';

newman.run({
    collection: './collections/freshIQ.json',
    reporters: 'cli'
}).on('request', (err, data) => {
    err ? console.log(err) : writeResponse(data.response.stream.toString(), data.item.name, `./files/${data.item.name}.json`)
});
