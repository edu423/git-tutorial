function matches(string, regex){
	const matches = string.match(regex);
    return matches != null && matches.length > 0;
}

function minimumNumber(n, password) {
	const min_length = 6;
	
	let missing = 4;
	
	if(matches(password,/[!@#$%\^&*()\-+]/g)) missing--;
	if(matches(password,/[0-9]/g)) missing--;
	if(matches(password,/[a-z]/g)) missing--;
	if(matches(password,/[A-Z]/g)) missing--;
	
	if((min_length - n) > missing){
		return (min_length - n);
	}
	
	else{
		return missing;
	}
}

console.log(minimumNumber(4,"4300"));
