module.exports = {

	dataTypes: (data) => {

		if(typeof data === 'string'){
			return data.length;
		}

		if(data === null || typeof data === undefined){
			return "no value";
		}

		if(typeof data === "boolean"){
			return data;
		}

		if(typeof data === "number"){
			if(data < 100){
				return 'less than 100';
			}
			else if(data === 100){
				return 'equal 100';
			}
			else{
				return 'more than 100';
			}
		}

		if(typeof data === "object"){
			return data[2];
		}
	}
}