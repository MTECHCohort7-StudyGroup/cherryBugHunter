const https = require('https');

let rand1 = 'd131dd02c5e6eec4693d9a0698aff95c2fcab58712467eab4004583eb8fb7f8955ad340609f4b30283e488832571415a085125e8f7cdc99fd91dbdf280373c5bd8823e3156348f5bae6dacd436c919c6dd53e2b487da03fd02396306d248cda0e99f33420f577ee8ce54b67080a80d1ec69821bcb6a8839396f9652b6ff72a70';

let rand2 = 'd131dd02c5e6eec4693d9a0698aff95c2fcab50712467eab4004583eb8fb7f8955ad340609f4b30283e4888325f1415a 085125e8f7cdc99fd91dbd7280373c5bd8823e3156348f5bae6dacd436c919c6dd53e23487da03fd02396306d248cda0e99f33420f577ee8ce54b67080280d1ec69821bcb6a8839396f965ab6ff72a70';

let user = 'd131dd02c5e6eec4693d9a0698';
let pass = 'aff95c2fcab58712467eab4004583eb8fb7f8955ad340609f4b30283e488832571415a085125e8f7cdc99fd91dbdf280373c5bd8823e3156348f5bae6dacd436c919c6dd53e2b487da03fd02396306d248cda0e99f33420f577ee8ce54b67080a80d1ec69821bcb6a8839396f9652b6ff72a70';

let url = `https://cherryblog.in/create_challenge/challenges/bug-hunter/?username=${user}&password=${pass}&random1=${rand1}&random2=${rand2}`;

let req = https.request(url, (resp)=>{
  console.log(resp.statusCode);
  resp.setEncoding('utf8');
  resp.on('data', (chunk)=>{
    console.log('chunk', chunk);
  });
});

req.on('error', (err)=>{
  console.error(err);
});
req.end();
