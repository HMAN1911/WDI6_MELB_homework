function build_tree(size){
    var input = "$";
    var modified_input = input;
    var one_space = " ";
	for (var i = size; i >= 0; i--) {
	   console.log(one_space.repeat(i) + modified_input);
	   modified_input = input + modified_input + input;
	}
}

build_tree(20);

function spotlight(size){
    var input = "^";
    var modified_input = input;
    var one_space = " ";
	for (var i = 0; i < size; i++) {
	   console.log(one_space.repeat(i) + modified_input);
	   modified_input = input + modified_input + input;
	}
}

//spotlight(15);

function build_inverse_tree(size){
    var input = "$";
    var modified_input = input;
    var one_space = " ";
	for (var i = size; i > 0; i--) {
	   console.log(one_space.repeat(size - i) + input.repeat(i*2 - 1));
	}
}

//build_inverse_tree(18);

function build_diamond (size) {
    build_tree(size);
    build_inverse_tree(size);
}

build_diamond(12);


