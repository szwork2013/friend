import Reflux from 'reflux';
import { Toast } from 'antd-mobile';

const Actions = Reflux.createActions([
    'getUserList',
    'error'
]);

Actions.error.listen((data) => {
    if (data.msg) {
        Toast.fail(data.msg, 1);
    }

});

export default Actions;
