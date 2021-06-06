import useMarketo from 'hooks/useMarketo'

export default function index({
	baseUrl,
	munchkinId,
	formId,
	callback,
	classname,
}) {
	useMarketo({baseUrl, munchkinId, formId, callback})

	return <form className={classname} id={`mktoForm_${formId}`} />
}
