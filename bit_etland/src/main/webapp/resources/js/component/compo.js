var $$ = $$ || {};
$$ = {
		div : x=>{
			return $('<div id='+x.id+'/>');
		},
		a : x=>{
			return $('<a href="'+x.url+'" id='+x.id+'/>');
		},
		li : x=>{
			return $('<li id='+x.id+'/>');
		},
		h : x=>{
			return $('<h'+x.num+' id='+x.id+'/>');
		},
		form : x=>{
			return $('<form id="'+x.id+'"/>');
		},
		label : x=>{
			return $('<label for ='+x.name+'/></br>');
		},
		input : x =>{
			return $('<input type='+x.type+' id='+x.id+' name='+x.name+'/></br>');
		},
		_navi : ()=> {
					$('#navi').children().eq(0)
						.html($$.a({id: 'seq', url: '#'}).text('수열'));
					$('#navi').children().eq(1)
						.html($$.a({id: 'math', url: '#'}).text('수학'));
					$('#navi').children().eq(2)
						.html($$.a({id: 'arr', url: '#'}).text('배열'));
					$('#navi').children().eq(3)
						.html($$.a({id: 'coll', url: '#'}).text('자료구조'));
					$('#navi').children().eq(4)
						.html($$.a({id:'app'}).text('응용'));
		}
};
