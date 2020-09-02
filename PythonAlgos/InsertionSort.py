# O(n^2) time | O(1) space
def insertionSort(array):
	# loop over array	
    for i in range(1, len(array)):
		# initialize the index to a variable
		j = i
		# while this index is out of position
		while j > 0 and array[j] < array[j - 1]:
			# swap it with the previous number
			swap(j, j - 1, array)
			j -= 1
	return array

# helper function to swap
def swap(i, j, array):
	array[i], array[j] = array[j], array[i]