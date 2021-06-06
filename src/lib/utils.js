export const removeBr = string => string.replace(/<\/?br>/g, '')

export const removeScriptAndComments = text =>
	text.replace(/<\!--.*?-->/g, '').replace(/<\/?script>/g, '')
