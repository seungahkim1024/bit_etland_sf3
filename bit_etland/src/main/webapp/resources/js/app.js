var app = app || {};
app = (()=>{
	var init = x=>{
		app.session.init(x);
		onCreate();
	};
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView=()=>{
		$('#navi').empty().text('navi');
		$('#masthead').empty().text('masthead');
		$('#about_section').empty().text('about_section');
		$('#services_section').empty().text('services_section');
		$('#portfolio_section').empty().text('portfolio_section');
		$('#call_to_action_section').empty().text('call_to_action_section');
		$('#contact_section').empty().text('contact_section');
		$('#footer').empty().text('footer');
		
		$('#navi').html('<h1>navi</h1>');
		$('#masthead').html('<h1>masthead</h1>');
		$('#about_section').html('<h1>about_section</h1>');
		$('#services_section').html('<h1>services_section</h1>');
		$('#portfolio_section').html('<h1>portfolio_section</h1>');
		$('#call_to_action_section').html('<h1>call_to_action_section</h1>');
		$('#contact_section').html('<h1>contact_section</h1>');
		$('#footer').html('<h1>footer</h1>');
	};
	return{init : init};
})();

app.session=(()=>{
	var init = x=>{
		onCreate(x);
	};
	var onCreate=x=>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+'/resources/customer/js');
		sessionStorage.setItem('css',x+'/resources/customer/css');
		sessionStorage.setItem('img',x+'/resources/customer/img');
		
	};
	return{init : init};
})();
app.$={
		ctx:()=>{return sessionStorage.getItem('ctx')},
		css:()=>{return sessionStorage.getItem('css')},
		js:()=>{return sessionStorage.getItem('js')},
		img:()=>{return sessionStorage.getItem('img')}
};
// 이거는 객체가 아닌 값으로 리턴한 것.

/*app.$=(()=>{
	return{
		ctx:()=>{return sessionStorage.getItem('ctx')},
		css:()=>{return sessionStorage.getItem('css')},
		js:()=>{return sessionStorage.getItem('js')},
		img:()=>{return sessionStorage.getItem('img')},
	}
})();
-------> 이거는 객체로 리턴한 것*/