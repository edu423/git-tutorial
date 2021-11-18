function gradingStudents(grades) {
    let temp = [];
    let output = [];
    
    let i = 0;
    
    //grades.sort((a, b) => b - a);
    
    while(i < grades.length){
		
		temp.push(grades[i]);
		
		if(temp[i] >= 38){
			while(temp[i] % 5 !== 0){
				temp[i]++;
			}
			
			if((temp[i] - grades[i]) < 3){
				output.push(temp[i]);
			} else {
				output.push(grades[i]);
			}
		
		} else {
			output.push(grades[i]);
		}
		
		i++;
	}
    
    return output;
}

console.log(gradingStudents([73, 67, 38, 33]));
