var algo = algo || {};
algo=(()=>{
	let init=x=>{
		algo.$.init(x);

	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript($.js()+'/compo.js',()=>{
			$('#navi').children().eq(0)
				.html($$.a({id: 'seq', url: '#'}).text('수열'));
			$('#navi').children().eq(1)
				.html($$.a({id: 'math', url: '#'}).text('수학'));
			$('#navi').children().eq(2)
				.html($$.a({id: 'sort', url: '#'}).text('정렬'));
			$('#navi').children().eq(3)
				.html($$.a({id: 'arr', url: '#'}).text('배열'));
			$('#navi').append($$.li({id:''}));
			$('#navi').children().eq(4)
				.html($$.a({id:'app'}).text('응용'));
			$('#que_1').text('Section 010 수열 1 - 1+2+3+4+…+100까지의 합계 (do~while)');
			$('#que_2').text('Section 011 수열 2 - 1-2+3-4+5-6+…+99-100의 합계 (do~while, while, if)');
			
		})
	};
	return{init:init,
		onCreate:onCreate};
})();

algo.$=(()=>{
	return {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				algo.onCreate();
			})
		}
	};
})();