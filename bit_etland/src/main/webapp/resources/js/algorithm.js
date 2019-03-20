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
			navi();
			remove();
			funcccc('등차수열의 합');
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>');
			$('#right_start').nextUntil('#right_end')
				.wrapAll('<div id="new_div"></div>');
			var str = $('#new_div').html();
			$('#new_div').remove();
			$('#right_end').remove();
			let arr=[
				{id:'a', val:'등차수열'},
				{id:'b', val:'등비수열'},
				{id:'c', val:'피보나치'},
				{id:'d', val:'팩토리얼'}
			]
			$.each(arr,(i,j)=>{
				$('#right_start').append(str);
				$('#que_1').attr('id','que_1_'+j.id);
				$('#que_1_'+j.id).text(j.val);
			});
		})	
	};
		
	let remove=()=>{
		//원하는 구역 설정해서 그 부분만 삭제하기.
		$('#pre').before('<div id="start"/>');
		$('#post').after('<div id="end"/>');
		$('#start').nextUntil('#end').wrap().remove();
	};

	let inputForm=()=>{
		$('#result').html($$.form({id: 'form'}));
		$('#form').html($$.div({id:'div_1'}).addClass('form-group'));
		$('#div_1').html($$.label({name: 'last'}).text('시작값 : '))
					.append($$.input({type:'text', id: 'start'}));
		$('#form').append($$.div({id:'div_2'}).addClass('form-group'));
		$('#div_2').html($$.label({name: 'lab_2'}).text('한계값 :'))
					.append($$.input({type:'text', id: 'end'}));
		$('form#form').append($$.div({id: 'div_3'}).addClass('form-group'));
		$('div#div_3').html($$.label({name: 'lab_3'}).text('공차 :'))
					.append($$.input({type:'text', id: 'diff'}));
	};
	let navi=()=>{
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
		$('#reset').text('리셋').addClass('cursor').click(()=>{
			inputForm();
		});
	};
	
	let funcccc=x=>{	
		$('#que_1').text(x);
			inputForm();
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