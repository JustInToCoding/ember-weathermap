import createSagaMiddleWare from 'redux-saga';
import root from '../sagas/index';

/*
 * This file adds Redux Saga as middleware to Redux
 */

const sagaMiddleware = createSagaMiddleWare();

const setup = () => {
    sagaMiddleware.run(root);
};

export default {
    middleware: [sagaMiddleware],
    setup: setup
};
