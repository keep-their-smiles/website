const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Keep Their Smiles`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		`gatsby-plugin-glamor`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsbygram`,
				short_name: `Gatsbygram`,
				start_url: `/`,
				background_color: `#f7f7f7`,
				theme_color: `#191919`,
				display: `minimal-ui`,
			},
		},
		`gatsby-plugin-offline`,
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: `UA-91652198-1`,
		// 	},
		// },
	],
};
