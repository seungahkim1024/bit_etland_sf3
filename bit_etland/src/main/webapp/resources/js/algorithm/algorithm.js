var algo = algo || {};
algo=(()=>{
	let init=x=>{
		algo.$.init(x);

	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/algorithm/sequence.js')
		).done(()=>{
				sequence();
				} 
		);
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