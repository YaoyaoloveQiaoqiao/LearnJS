function Person(name){
	var _this={};
	_this.say=function(){
		alert("say name"+name);
	}
	this._name=name;
}
function Student(name){
	var _this=new Person(name);

}
Person p=new Person("aa");
p.say();