var replacements = { // find: replace
	'Make America Great Again': 'Make Donald Drumpf Again',
	'MakeAmericaGreatAgain': 'MakeDonaldDrumpfAgain',
	'makeamericagreatagain': 'makedonalddrumpfagain',
	'@realDonaldTrump': '@RealDonalDrumpf', // Twitter handle
	'@realdonaldtrump': '@RealDonalDrumpf', // Twitter handle
	'RealDonaldTrump': 'RealDonaldDrumpf',
	'realDonaldTrump': 'realDonaldDrumpf',
	'realdonaldtrump': 'realdonalddrumpf',
	'DonaldTrump': 'DonaldDrumpf',
	'donaldtrump': 'donalddrumpf',
	'DonaldJTrump': 'DonaldJDrumpf',
	'donaldjtrump': 'donaldjdrumpf',
	'TRUMP': 'DRUMPF',
	'Trump': 'Drumpf',
	'trump': 'drumpf'
}
var find = Object.keys(replacements).join('|');
var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
while(textNode=walk.nextNode()) {
	textNode.nodeValue = textNode.nodeValue.replace(new RegExp(find,'g'),function(match){return replacements[match];});
}