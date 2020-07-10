import {table_e, table_d} from "./tables.js";

function encode(str) {
	let n = str.length, extraN = 0;
	
	//Make sure n is divisible by 3
	if (n % 3 != 0){
		if (Math.abs((n-3)) % 2 == 0)
			extraN = 1;
		else
			extraN = 0;
	}
	
	let padding = (8*(n+extraN)) - (8*n);
	let zeros = 0;
	console.log("extraN = " + extraN);
	//Determine the number of zeroes to append
	if (padding == 16) zeros = padding - 12;
	else if (padding == 8) zeros = padding - 6;

	//Convert string into equivalent binary ascii values
	let bitString = (str.split(""))
				.map((e)=>{return e.charCodeAt(0)})
				.map((e)=>{return e.toString(2).padStart(8, '0')})
				.join("") + '0'.repeat(zeros);

	console.log(bitString);
	//Split encoding into a sequence of 6 groups
	let encoding = bitString.match(/.{6}/g);
	
	//Map each encoding to base64 character	
	encoding = encoding.map((e)=> {return table_e[e]})
	
	return encoding.join("") + '='.repeat((padding-zeros)/6);
}

function decode(str) {
	return "";
}

console.log(encode("Ngolo"));