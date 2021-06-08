export const removeBr = string => string && string.replace(/<\/?br>/g, '')

export const removeScriptAndComments = text =>
	text && text.replace(/<\!--.*?-->/g, '').replace(/<\/?script>/g, '')
