function build_tree(){
    var input = "$";
    var modified_input = input;
    var initial_spacing = "            ";
    var one_space = " ";
	for (var i = 10; i >= 0; i--) {
	   var sequential_spacing = (one_space.repeat(i));
	   console.log(one_space.repeat(i) + modified_input);
	   modified_input = input + modified_input + input;
	}
};
build_tree();


function anotherTree() {
  var input = "$";
  var rows = 4;
  var blank = " ";
  for (var r = 0; r < rows; r++) {
         var modifiedInput = input.repeat(r*2+1);
         var modifiedBlank = blank.repeat(rows-r);
         console.log(modifiedBlank+modifiedInput);
  }
}

anotherTree();
