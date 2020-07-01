module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-simple-vars': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            browsers: ['last 3 versions', 'not ie < 10'],
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
            },
            stage: 3,
        },
        lost: {},
        cssnano: {},
    },
};
