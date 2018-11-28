import Loadable from 'react-loadable';
import React from 'react';
function MyLoadingComponent({ error,pastDelay  }) {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: MyLoadingComponent
});

export default ()=><LoadableComponent/>