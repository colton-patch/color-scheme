function Buttons() {
  return (
    <>
      <button onClick={() => request()}>Generate</button>
      <h4>h4 test</h4>
    </>
  );
}

function request() {
  var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N", "N","N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));

console.log(http);
}

export default Buttons;