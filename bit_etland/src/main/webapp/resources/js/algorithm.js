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
				.html($$.a({id: 'arr', url: '#'}).text('배열'));
			$('#navi').children().eq(3)
				.html($$.a({id: 'coll', url: '#'}).text('자료구조'));
			$('#navi').append($$.li({id:''}));
			$('#navi').children().eq(4)
				.html($$.a({id:'app'}).text('응용'));
			$('#que_1').text('등차수열의 합');
			inputForm();
			$('#result').append($$.label({name: 'dif', value: '공차	: '}));
			$('#result').append($$.input({type:'text', id:'diff'}));
			$('#answer_btn_1').text('계산').addClass('cursor').click(()=>{
				$.ajax({
					url : $.ctx()+'/algo/seq/1',
					type : 'post',
					data : JSON.stringify(
							{start: $('#start').val(),
							 end: $('#end').val(),
							 diff: $('#diff').val()}),
					dataType : 'json',
					contentType : "application/json; charset=utf-8",
					success : d=>{
						$('#result').html($$.h({id:'h_res',num:'2'})
								.text('결과값: '+d.result));
					},
					error : e=>{
						alert('AJAX 실패');
					}
				});
			});
			$('#reset').text('리셋').addClass('cursor').click(()=>{
				inputForm();
				$('#result').append($$.label({name: 'dif', value: '공차	: '}));
				$('#result').append($$.input({type:'text', id:'diff'}));
			});
			$('#que_2').text('등비수열의 합');
			inputForm();
			$('#result').append($$.label({name: 'dif', value: '공비	: '}));
			$('#result').append($$.input({type:'text', id:'diff'}));
			
			
		})
	};
	let inputForm=()=>{
		$('#result').html($$.label({name: 'first', value: '시작 숫자	: '}));
		$('#result').append($$.input({type:'text', id:'start'}));
		$('#result').append($$.label({name: 'last', value: '마지막 숫자	: '}));
		$('#result').append($$.input({type:'text', id:'end'}));
	}
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