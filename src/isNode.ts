var _isNode = false;

export function setIsNode() {
	_isNode = true;
}

export function isNode() {
	return _isNode;
}

export function isBrowser() {
	return !_isNode;
}