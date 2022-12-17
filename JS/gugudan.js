function gugudan(){
    var num  = document.getElementById("number").value;

    if(numCheck(num)){
        var result = "";

        for(var i =1; i<=9;i++){
            result += num + "*" + i + "=" + (num * i) + "<br>";
        }

        document.getElementById("result").innerHTML = result;
    }


}

function numCheck(num){
    var result = true;

    return !(num.trim() == "" || isNaN(num) || (parseInt(num) < 1 || parseInt(num) > 9));

}