var h = 0
var p = 14
var f = 15
var d = -1
var cont=0

while(cont == 0){
    if (d == -1) {
        f--
    } else {
        f++
    }
    if(f == 15){
        f = 0
        d = 1
    }else if( f == 0){
        f = 15
        d = -1
    }
    if(f == p){
        console.log('N')
        cont = 1
    }
    if(f == h){
        console.log('S')
        cont = 1
    }
}
