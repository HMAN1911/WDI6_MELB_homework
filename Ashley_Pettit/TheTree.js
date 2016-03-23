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
}

build_tree();

