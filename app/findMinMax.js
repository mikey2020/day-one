module.exports = {
	findMinMax: (list) =>{
		if(typeof list != "object"){
			return 'invalid input';
		}
		const sortedlist = list.sort(function(a, b){return a-b});
		let newList = [];
		let min = sortedlist[0];
		let max = sortedlist[(list.length-1)];
		if(min === max){
			//newList.push(min || max);
			return [min];
		}
		newList.push(min);
		newList.push(max);


		return newList;
	}
}

