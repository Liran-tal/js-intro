function extractOnlyValue(objects_array, key) {
	return (
		objects_array.reduce((vals_arr, obj) => {
			return (vals_arr.push(obj[key]));
		},[])
	);
}

const test_array = [
	{
		name: 'Alon'
	},
	{
		name: 'Boaz'
	},
	{
		name: 'Carmel'
	},
	{
		name: 'Dvora'
	}
]

console.log("extractOnlyValue(test_array, 'name')", extractOnlyValue(test_array, 'name'));