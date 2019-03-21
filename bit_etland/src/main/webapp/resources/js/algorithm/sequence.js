function sequence(){
	_sequence.navi();
	_sequence.remove();
	_sequence.funcccc();
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>');
			$('#right_start').nextUntil('#right_end')
				.wrapAll('<div id="new_div"></div>');
			let str = $('#new_div').html();
			$('#new_div').remove();
			$('#right_end').remove();
			let arr=[
				{id:'a', val:'등차수열'},
				{id:'b', val:'등비수열'},
				{id:'c', val:'피보나치'},
				{id:'d', val:'팩토리얼'}
			];
			$.each(arr,(i,j)=>{
				//$('#right_start').append(str);
				$(str).appendTo('#right_start');
				$('#que_1').attr('id','que_1_'+j.id);
				$('#que_1_'+j.id).text(j.val);
				$('.new_result').attr('id','newr_'+i);
				$('.buttons').empty();
				$('<span class="label label-danger" style = margin-right:5px></span>')
				.text('결과')
				.addClass('cursor')
				.appendTo('.buttons')
				.click(()=>{
					let data = {start: $('#start').val(),
								end: $('#end').val(),
								diff: $('#diff').val()};
					alert('일단 결과 클릭됨'+$('#start').val());
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
				});	//결과 보기 버튼
				$('<span id="reset" class="label label-primary"></span>')
				.text('리셋')
				.addClass('cursor')
				.appendTo('.buttons')
				.click(()=>{
					_sequence.inputForm();
				}); //리셋 보기 버튼
				})
			}
			
var _sequence = {
		inputForm : ()=>{
				/*$('#result').html($$.form({id: 'form'}));
				$('#form').html($$.div({id:'div_1'}).addClass('form-group'));
				$('#div_1').html($$.label({name: 'last'}).text('시작값 : '))
							.append($$.input({type:'text', id: 'start'}));
				$('#form').append($$.div({id:'div_2'}).addClass('form-group'));
				$('#div_2').html($$.label({name: 'lab_2'}).text('한계값 :'))
							.append($$.input({type:'text', id: 'end'}));
				$('#form').append($$.div({id: 'div_3'}).addClass('form-group'));
				$('#div_3').html($$.label({name: 'lab_3'}).text('공차 :'))
							.append($$.input({type:'text', id: 'diff'}));*/
			 $('#result').html($$.label({name:'start'}).text('시작값'));
	            $('#result').append($$.input({type:'text', id:'start'}));
	            $('#result').append($$.label({name:'end'}).text('마지막값'));
	            $('#result').append($$.input({type:'text', id:'end'}));
	            $('#result').append($$.label({name:'diff'}).text('공차  '));
	            $('#result').append($$.input({type:'text', id:'diff'}));
		},
		funcccc : ()=>{	
				$('#que_1').text();
					_sequence.inputForm();
		},
		navi : ()=>{
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
		},
		remove : ()=>{
				//원하는 구역 설정해서 그 부분만 삭제하기.
				$('#pre').before('<div id="start"/>');
				$('#post').after('<div id="end"/>');
				$('#start').nextUntil('#end').wrapAll('<div id="remove_div"></div>').remove();
		}
}