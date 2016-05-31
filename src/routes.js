import Layout from 'component/layout';
/*
import Home from 'component/home';

import Upload from 'page/upload';
*/

export default [{
    path        : '/',
    component   : Layout,
    indexRoute  : {
        // component: Upload
    },
    childRoutes : [/*{
        path        : 'upload',
        component   : Upload,
        onEnter     : null,
        onLeave     : null
    }*//*, {
     path: 'inbox',
     component: Inbox,
     childRoutes: [
     { path: '/messages/:id', component: Message },
     { path: 'messages/:id',
     onEnter: function (nextState, replaceState) {
     replaceState(null, '/messages/' + nextState.params.id)
     }
     }
     ]
     }*/
    ]
}]