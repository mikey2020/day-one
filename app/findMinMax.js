module.exports = {

	findMinMax: (list) => {
			let newList = [];
			
	        if(typeof(list) != 'object'){
	            return 'invalid input';
	        }
			list = list.sort();
	    	list.sort();
	    	let min = list[0] ;
	    	let max =  list[0];
	    	for(let count = 0; count < list.length ; count++){
	      		
	            if (list[count] > max ){
	             	
	                max = list[count];
	             	
	                min = list[0];
	         	    
	                newList[0] = min ;
	         	    
	                newList[1] = max ;
	         	
	     		}
	     		else if(list[i] == max ){
	     			
	                newList[0] = min ;

	     		}

	    	}
			
			
	    
			return newList;
			

	}
}