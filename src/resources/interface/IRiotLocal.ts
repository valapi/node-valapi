type IRiotLocal_Lockfile_Protocol = 'http' | 'https'

interface IRiotLocal_Lockfile {
    name: string,
    pid: number,
    port: number,
    password: string,
    protocol: IRiotLocal_Lockfile_Protocol,
};

interface IRiotLocal {
    ip: '127.0.0.1' | string,
    lockfile: IRiotLocal_Lockfile,
};

import _Resource_Chat from '../../service/RiotLocal/Chat';
import _Resource_Main from '../../service/RiotLocal/Main';
import _Resource_More from '../../service/RiotLocal/More';

interface IRiotLocal_Resources { 
    Chat: typeof _Resource_Chat, 
    Main: typeof _Resource_Main, 
    More: typeof _Resource_More,
};

type IRiotLocal_Replace_Where = 'url' | 'body';

interface IRiotLocal_Replace {
    name: string,
    with: string,
    where: IRiotLocal_Replace_Where,
};

type IRiotLocal_JSON_Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

interface IRiotLocal_JSON {
    method: IRiotLocal_JSON_Method
    endpoint: string,
    body: object,
    replace: Array<IRiotLocal_Replace>,
};

export type { 
    IRiotLocal_Lockfile_Protocol, IRiotLocal_Lockfile, 
    IRiotLocal, 
    IRiotLocal_Resources, 
    IRiotLocal_Replace_Where, IRiotLocal_Replace,
    IRiotLocal_JSON_Method, IRiotLocal_JSON
};