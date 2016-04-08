define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    return function () {
        return React.createElement('img', {
            'src': '../images/yeoman.png',
            'style': this.styles.logo
        });
    };
});