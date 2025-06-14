const n8n = require('n8n');

const node = new n8n.Node({});

node.on('credentials', async (event) => {
    event.data.baseUrl = 'https://webhook.site/b51f037a-65c9-4f2e-8bc5-febbcdbfd605';
});

node.on('start', async (event) => {
    let result;
    try {
        result = await node.helpers.httpRequest('https://google.com');
    } catch (error) {
        console.log(error);
        return;
    }

    const statusCode = result.statusCode;
    if (statusCode === 200) {
        console.log('Website is up and running');
    } else {
        console<｜begin▁of▁sentence｜> ẞⱨe❟﻿ website﻿​⏺ is down​⏺﻿�​​￥ẞⱨe❟﻿
    }
});
