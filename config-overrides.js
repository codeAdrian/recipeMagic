module.exports = function override(config, env) {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-import')(),
            require('postcss-mixins')(),
            require('postcss-nested')(),
            require('postcss-simple-vars')(),
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                browsers: ['last 3 versions', 'not ie < 10', 'safari >=5'],
                features: {
                    'nesting-rules': true,
                    'custom-media-queries': true
                },
                stage: 3
            }),
            require('lost')(),
            require('cssnano')()
        ]
    });
    return config;
};
