let turn = true;
let arr = [];
function checkWinner(){
    for(let i = 1 ; i <=9 ; i++){
        arr[i] = document.getElementById("A" + i).innerHTML;
        // horizontal
    }if(arr[1]==arr[2] && arr[2]== arr[3] && arr[1] != ""){
        alert(arr[1] + " is the winner");

    }if(arr[4]==arr[5] && arr[5]== arr[6] && arr[4] != ""){
        alert(arr[4] + " is the winner");

    }if(arr[7]==arr[8] && arr[8]== arr[9] && arr[7] != ""){
        alert(arr[7] + " is the winner");
    }  //vertical
    if(arr[1]==arr[4] && arr[4]== arr[7] && arr[1] != ""){
        alert(arr[1] + " is the winner");

    }if(arr[2]==arr[5] && arr[5]== arr[8] && arr[2] != ""){
        alert(arr[2] + " is the winner");

    }if(arr[3]==arr[6] && arr[6]== arr[9] && arr[3] != ""){
        alert(arr[3] + " is the winner");
    }
    //diagonal
    if(arr[1]==arr[5] && arr[5]== arr[9] && arr[1] != ""){
        alert(arr[1] + " is the winner");

    }if(arr[3]==arr[5] && arr[5]== arr[7] && arr[3] != ""){
        alert(arr[3] + " is the winner");
        

    }


}


function fn1(id){
    let v = document.getElementById(id)
    if(turn && v.innerHTML ==""){
        v.innerHTML = "X";
        turn = !turn;
    }else if(!turn && v.innerHTML==""){
        v.innerHTML = "O";
        turn = !turn;
    }
    checkWinner();
}