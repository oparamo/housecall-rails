$(document).ready(function() {
	var data = [];
	var temp = [];
	var count = 0;

	$('#myTable tr').each(function() {
    $(this).find('td').each(function() {
    	if(count % 2 != 0) {
    	  temp = [];
    		temp.push($(this).html());
    		console.log(temp);
    	} else {
    	  temp.push($(this).html());
    	}
    	
    	count++;

    	data.push([temp[0], temp[1]]);
    })
	})

	console.log(data);
});