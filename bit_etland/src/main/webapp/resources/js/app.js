var app = app || {};
app.context = (()=>{
	return {
		init : x=>{
			alert('넘어온 컨텍스트는 '+x);
		}
	};
})();