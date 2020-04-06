import bcrypt from 'bcrypt';



export const headersAllow = (req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', `${false}`);
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
};


