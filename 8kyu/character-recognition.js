// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.


//P:string, uppercase, numbers, never empty
//R: string with correct letters
//E: "L0ND0N", "LONDON"
//   "51NGAP0RE", "SINGAPORE"
//   "PAR1S", "PARIS"
//P: separeta each letter if its a number 5 change it to S, 0 to O and 1 is I, return string

function correct(string){
    let str = ""
	for(let i=0; i<string.length; i++){
        if(string[i]=="5"){
            str += string[i].replace("5", "S")
        }else if(string[i]=="0"){
            str += string[i].replace("0", "O")
        }else if(string[i]=="1"){
            str +=  string[i].replace("1", "I")
        }else{
            str += string[i]
        }
    }
    return str
}

