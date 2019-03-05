function People(name, age, gender, job){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.job = job;
}

People.prototype.setName =name=>{this.name = name;};
People.prototype.setAge =age=>{this.age = age;};
People.prototype.setGender =gender=>{this.gender = gender;};
People.prototype.setJob =job=>{this.job = job;};
People.prototype.getName =()=>{return this.name;};
People.prototype.getAge =()=>{return this.age;};
People.prototype.getGender =()=>{return this.gender;};
People.prototype.getJob =()=>{return this.job;};

function Customer(grade, custNo){
	People.apply(this, arguments);
	this.grade = grade;
	this.custNo = custNo;
}
Customer.prototype = new People();

Customer.prototype.setName =name=>{
	//this.name='[닉네임]'+name 이건 자바문법
	Object.getPrototypeOf(Customer.prototype).setName('[닉네임]'+name);
};
Customer.prototype.setGrade = (grade)=>{this.grade = grade;};
Customer.prototype.setCustNo = (custNo)=>{this.custNo = custNo;};
Customer.prototype.getGrade = ()=>{return this.grade;};
Customer.prototype.getCustNo = ()=>{return this.custNo;};

var test = {main : ()=>{
		let cust = new Customer();
		cust.setName('홍길동');
		cust.setAge('25세');
		cust.setGender('남자');
		cust.setJob('개발자');
		cust.setGrade('3급');
		cust.setCustNo('22');
		alert("고객정보: "+cust.getName()+'\n'
				+cust.getAge()+'\n'
				+cust.getGender()+'\n'
				+cust.getJob()+'\n'
				+cust.getGrade()+'\n'
				+cust.getCustNo());
	}};




function Product(name, price){
	this.name = name;
	this.price = price;
}
function Food(name, price){
	Product.call(this, name, price);
	this.category = 'food';
}
var test1 = (()=>{
	let main = ()=>{
		let food = new Food('cheese',5);
		alert(food.category);
		alert(food.name);
	}
	return {main:main};
})();




/*
var inherit = (()=>{
	return{
		main : ()=>{
			let emp1 = new Employee();
			emp1.setSalary("100");
			emp1.setPosition("대리");
			alert("직급, 급여: "+emp1.getSalary()+','+emp1.getPosition());
			
			let cust1 = new Customer();
			cust1.setCustNo('1234');
			cust1.setGrade('실버등급');
			alert("고객번호, 등급: "+cust1.getCustNo()+','+cust1.getGrade());
		}
	};
})();

function Employee(){
	let _salary, _position;
		return{
			setSalary :(salary)=>{this._salary = salary;},
			setPosition : (position)=>{this._position = position;},
			getSalary : ()=>{return this._salary;},
			getPosition : ()=>{return this._position;}
		};
}

function Customer(){
	let _custNo, _grade;
		return {
			setCustNo : (custNo)=>{this._custNo = custNo;},
			setGrade : (grade)=>{this._grade = grade;},
			getCustNo : ()=>{return this._custNo;},
			getGrade : ()=>{return this._grade;}
		};
};

var encap = (()=>{ //var app = new  가 생략되어 있다. 
	var main =()=>{
		person.setName('도널드 트럼프');
		person.setAge('71');
		person.setGender('남');
		person.setJob('미국 대통령');
		alert('스펙: '+person.toString());
	}
	return {main : main};
})();

var person = (()=>{
	let _name, _age, _gender, _job; // let로 바꾸면 지역(함수[person] 벗어나면 값이 제거됨). var는 전역(여기서는 초기화없이 인스턴스변수 느낌).
		return {setName:(name)=>{this._name = name;},
			setAge:(age)=>{this.age = age;},
			setGender:(gender)=>{this.gender = gender;},
			setJob:(job)=>{return this.job = job;},
			getName:()=>{return this._name;},
			getAge:()=>{return this.age;},
			getGender:()=>{return this.gender;},
			getJob:()=>{return this.job;},
			toString: ()=>{return this._name +','+this.age +','+this.gender +','+this.job +',';}
		}
})()*/