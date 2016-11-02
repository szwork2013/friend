import Reflux from 'reflux';
import Actions from '../actions/Actions';
import Http from '../utils/Http';

const HomeStore = Reflux.createStore({
    listenables: Actions,

    getUserList() {

        Http.get('users').success((res) => {
            if (res.code === 1) {
                this.trigger({
                    type: 'users',
                    data: res.data
                });
            }
            else {
                Actions.error(res);
            }

        });

    }
});

export default HomeStore;
