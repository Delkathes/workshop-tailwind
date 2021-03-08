const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
    target: 'serverless',
    distDir: '.next',
    pageExtensions: ['js', 'jsx'],

    // pageBuffer
    onDemandEntries: {
        maxInactiveAge: 360 * 1000,
        pagesBufferLength: 2
    },

    webpack: cfg => {
        cfg.node = {
            fs: 'empty'
        }

        return cfg
    }
})
