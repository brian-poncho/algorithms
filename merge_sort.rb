def merge_sort(array)
	if array.length == 1
		return array
	else
		left_half = merge_sort(array[0..((array.length / 2) -1)])
		right_half = merge_sort(array[(array.length / 2)..-1])
		return mergeHalves(left_half, right_half)
	end
end

def mergeHalves(left, right)
	temp = []
	while !left.empty? && !right.empty? do
		#puts "left = #{left}"
		#puts "right = #{right}"
		if left[0] <= right[0]
			temp.push(left.shift)
		else
			temp.push(right.shift)
		end
	end
	temp += left
	temp += right
	return temp
end
	
puts merge_sort([2,7,-4,3,100,9,5])
