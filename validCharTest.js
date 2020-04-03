var btnCheck = document.getElementById('btnCheck');
var strInput = document.getElementById('inputText');
var preRules = document.getElementById('rules');

preRules.innerHTML = printValidChars();

btnCheck.addEventListener('click', ()=>{ 
	var messGood = validCharTest(strInput.value);
	if(messGood) {
		alert("Message is good to go!");
	}
}, false);


function validCharTest(text)
{
	var index=0;
	var returnval=true;
	var VALIDCHARACTERS=" 1234567890-=qwertyuiop[]\asdfghjkl;''zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?áéíóúüñ¿¡";

	for (index = text.length - 1; index >= 0; --index)
	{
		testchar=text.substring(index, index + 1);
		if(testchar!="\"" && testchar!="\\"  && testchar!="\r\n" && testchar!="\n")
		{
			test=VALIDCHARACTERS.indexOf(text.substring(index, index + 1));
			if (test < 0 && returnval)
			{
				alert("Invalid Character found in message body." + `\n\nBad char: ${text.substring(index, index + 1)}\n\nIn part:
	${text.substring(index-25, index + 25)}`);
				return false;
			}
		}
	}

	return true;
}



function printValidChars() {
	var VALIDCHARACTERS = " 1234567890-=qwertyuiop[]\asdfghjkl;''zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?áéíóúüñ¿¡" + `\"\\`;

	var str = `(Note: " is not the same as “ \nAnd    ' is not the same as ‘) \n\n\nThe only valid chars are: `;
	for(var i=0; i<VALIDCHARACTERS.length; i++) {
		str += '\n" ' + VALIDCHARACTERS[i] + ' "';
	}

	return str;
}
