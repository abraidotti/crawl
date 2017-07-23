// app.js
// ======

// instantiate cli
const cli = require("./CLI");
const rl = cli.rl;
const print = cli.print;

// add functions
const example = require("./example.js");

const room1 = require("./rooms/room1.js").room1;
const room2 = require("./rooms/room2.js").room2;

const rooms = {"starting_room":room1, 
				"smooth_corridor":room2
			};

let current_room = room1;

const commands = {
    "hello": () => {print("world!\n");},
    "look":  () => {print("You are in " + current_room.name + "\n" );},
    "quit":  () => {rl.close();},
    "exit":  () => {rl.close();},
    "help": function(){print("I respond to the following commands: " + (Object.keys(this)).join(", ") + "\n");},
    "test":  example.example,

    "north":  go_north,
    "south": go_south

};


cli.activateCLI(commands);

function go_north(){
	var exits = Object.keys(current_room.exits);
	print("Going north.\n");
	print(exits + "\n");
	if (exits.includes("north")){
		var new_room_name = current_room.exits.north;
		print("arrived.\n");
		var new_room = rooms["smooth_corridor"];
		current_room = new_room;
	}
}

function go_south(){
	var exits = Object.keys(current_room.exits);
	print("Going south.\n");
	print(exits + "\n");
	if (exits.includes("south")){
		var new_room_name = current_room.exits.south;
		print("arrived.\n");
		var new_room = rooms["starting_room"];
		current_room = new_room;
	}
}