function quickSort(array) {
	if (array.length === 1) {
		return array;
	}
	else {
		let halfIndex = Math.floor((array.length / 2 ));
		let left = quickSort(array.slice(0, halfIndex));
		let right = quickSort(array.slice(halfIndex, array.length));
		array = left + right;
		return pivotSort(array);
	}
}

function pivotSort(array) {
		let pivot = array[(Math.floor(Math.random() * array.length))];
		console.log(`array is ${array} pivot is ${pivot}`);
		let leftIndex = 0;
		let rightIndex = array.length - 1;
		while (rightIndex >= leftIndex + 1) {
			if ((array[leftIndex] >= pivot) && (array[rightIndex] <= pivot)) {
				let temp = array[rightIndex];
				//console.log(`Swap left is ${array[leftIndex]} temp is ${temp}`);
				array[rightIndex] = array[leftIndex];
				//console.log(`New Right is ${array[rightIndex]}`);
				array[leftIndex] = temp;
				leftIndex++;
				rightIndex--;
			}
			else {
				if (array[rightIndex] >= pivot) {rightIndex--;}
				if (array[leftIndex] <= pivot) {leftIndex++;}
			}
		}
		return array;
}

let testArray = [3, 8, 2, 3, 5, 1];
console.log(quickSort(testArray));
