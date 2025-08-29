const wordsRegexp = /(nigger|orospu|amk|amcık|sikik|aptal|salak|majestic|grand|madjestik|grand|redage|arizon|arizona|pidr|pidor|negr|majestik|arizon|radmir|down|vrp|onix|onixrp|parvenu|parvenurp|parvenu|parvenurp|{|}|<|>)/gi;

export function prepareValue(value: string) {
	return value.replace(wordsRegexp, (res) => (res ? '*'.repeat(res.length) : ''));
}
