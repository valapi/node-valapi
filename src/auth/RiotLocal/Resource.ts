import _Chat from '../../service/RiotLocal/Chat';
import _Main from '../../service/RiotLocal/Main';
import _More from '../../service/RiotLocal/More';

import { IRiotLocal_Resources } from '../../resources/interface/IRiotLocal';

const RiotLocal_Resources:IRiotLocal_Resources = {
    Chat: _Chat,
    Main: _Main,
    More: _More,
};

export default RiotLocal_Resources;