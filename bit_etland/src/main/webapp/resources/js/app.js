var app = app || {};
app.path = (()=>{
	var init = x=>{
		app.session.init(x);
		alert(app.$.ctx());
		onCreate();
	};
	var onCreate = ()=>{
		setContextView();
	};
	var setContextView=()=>{
		
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
		img:()=>{return sessionStorage.getItem('img')},
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
