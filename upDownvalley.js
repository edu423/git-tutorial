function countingValleys(steps, path) {
	let unit = 1;
	
	let i = 0;
	
	let is_valley = false;
	let is_mountain = false;
	
	let mountain = 0;
	let valley = 0;
	
	while(i < steps){
		
		if(path[i] === 'D'){
			unit--;
		}
		
		if(path[i] === 'U'){
			unit++;
		}
		
		if(unit > 1){
			is_mountain = true;
		} 
		
		else if(unit < 1) {
			is_valley = true;
		}
		
		if(unit === 1){
			if(is_mountain === true){
				mountain++;
				is_mountain = false;
			} 
			
			else if(is_valley === true){
				valley++;
				is_valley = false;
			}
		}
		
		i++;
	}
	
	return valley;
}

console.log(countingValleys(8,'UDDDUDUU'));
