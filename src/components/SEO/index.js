import Head from 'next/head'
import {removeScriptAndComments} from 'lib/utils'

export default function index({config, single}) {
	return (
		<Head>
			<title>
				{single?.acf?.metadata?.title || single?.title?.rendered} |{' '}
				{config?.acf?.site_config?.title}
			</title>
			{single?.acf?.metadata?.description && (
				<meta name="description" content={single.acf.metadata.description} />
			)}
			<meta name="robots" content="index, follow" />
			{single?.acf?.metadata?.open_graph?.url && (
				<meta property="og:url" content={single.acf.metadata.open_graph.url} />
			)}
			{single?.acf?.metadata?.open_graph?.url && (
				<meta property="og:type" content="website" />
			)}
			{single?.acf?.metadata?.open_graph?.title && (
				<meta
					property="og:title"
					content={single.acf.metadata.open_graph.title}
				/>
			)}
			{single?.acf?.metadata?.open_graph?.description && (
				<meta
					property="og:description"
					content={single.acf.metadata.open_graph.description}
				/>
			)}

			{single?.acf?.metadata?.open_graph?.image?.url && (
				<>
					<meta
						property="og:image"
						content={single.acf.metadata.open_graph.image.url}
					/>
					<meta name="twitter:card" content="summary" />
				</>
			)}

			{single?.acf?.metadata?.open_graph?.image?.url &&
				config?.acf?.site_config?.title && (
					<meta
						property="og:site_name"
						content={config.acf.site_config.title}
					/>
				)}

			{config?.acf?.site_config?.fb_domain && (
				<meta
					name="facebook-domain-verification"
					content={config.acf.site_config.fb_domain}
				/>
			)}

			<link rel="icon" href={config?.acf?.header?.favicon?.url} />
			{config?.acf?.tag_manager && (
				<script
					dangerouslySetInnerHTML={{
						__html: removeScriptAndComments(config?.acf?.tag_manager),
					}}
				></script>
			)}
		</Head>
	)
}
