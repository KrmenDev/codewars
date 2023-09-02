// DESCRIPTION:
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead



//My Solution


//P: string, symbols, letters, never empty, never numbers
//R: a string if 15 bumps or less, return Woohoo!, else return Car Dead
//E:
/// "n" => "Woohoo!"
// "_nnnnnnn_n__n______nn__nn_nnn" => "Car Dead"
// "__n_n___nnnnn___n__nnn__" => "Woohoo!"
//P: if string includes n put them in new string
// if new string includes 15 or less n
// return  Woohoo!


function bump(x){
    let nCount = x.split('').map((e) => e == 'n').filter(Boolean).length
    if(nCount <= 15){
        return "Woohoo!"
    }else{
        return "Car Dead"
    }
    
}



//CodeWars
const bump = x => x.split('n').length>16 ? "Car Dead" : "Woohoo!"



//CodeWars
const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';