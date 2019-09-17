$.cookie = function(name,value)
{
	if(value===undefined){
		return localStorage.getItem(name);
	}
	localStorage.setItem(name,value);
}