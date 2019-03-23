var keey;
var elem;
var moves=[1,2,3,4,5,6,7,8,9,10];
var score_x=0;
var score_o=0;
var occup={};
var count=0;
var X=true;
function getMove(index){
    keey=parseInt(index);
    var temp;
    temp=moves;
    elem=document.getElementById(index);
    var valid_move=(temp[keey-1] in temp);

    if (X && valid_move){
        document.getElementById('warning').innerText='';
        elem.innerText='X';
        elem.style.color='Crimson';
        temp[keey-1]='occ';
        occup[index]='X';
        X=false;

    }else if(!X && valid_move){
        document.getElementById('warning').innerText='';
        elem.innerText='O';
        elem.style.color='blue';
        temp[keey-1]='occ';
        occup[index]='O';
        X=true;


    }
    else {
        document.getElementById('warning').innerText='Already Occupied !'
    }

    winner();
}

function winner(){
    var i=1;
    count++;
    game=false;
    for (i;i<10;i+=3){
        if (typeof occup[i]!='undefined'){
            if ((occup[i]==occup[i+1]) && (occup[i+1]==occup[i+2])){
                if (occup[i]=='X'){score_x++}else score_o++;
                document.getElementById('warning').innerText=occup[i]+' WINS !';
                game=true;
                break
            }
            else if ((occup[i]==occup[i+3]) && (occup[i+3]==occup[i+6])){
                if (occup[i]=='X'){score_x++}else score_o++;
                document.getElementById('warning').innerText=occup[i]+' WINS !';
                game=true;
                break
            }
            else if ((occup[1]==occup[5]) && (occup[5]==occup[9]) && (typeof occup[1]!='undefined')){
                if (occup[1]=='X'){score_x++}else score_o++;
                document.getElementById('warning').innerText=occup[5]+' WINS !';
                game=true;
                break
            }
            else if ((occup[3]==occup[5]) && (occup[5]==occup[7]) && (typeof occup[3]!='undefined')){
                if (occup[3]=='X'){score_x++}else score_o++;
                document.getElementById('warning').innerText=occup[3]+' WINS !';
                game=true;
                break
            }
            else if ((occup[2]==occup[5]) && (occup[5]==occup[8]) && (typeof occup[2]!='undefined')){
                if (occup[2]=='X'){score_x++}else score_o++;
                document.getElementById('warning').innerText=occup[2]+' WINS !';
                game=true;
                break}

            else if (count==9){
                document.getElementById('warning').innerText='Draw !';
                game=true;
                break
            }
        }

    }

    document.getElementById('x').innerText='X'+'-'+score_x;
    document.getElementById('o').innerText='O'+'-'+score_o;
    if (game){
        for (let i=1;i<10;i++){
            document.getElementById(String(i)).innerText='';
        }
        occup={};
        count=0;
        moves=[1,2,3,4,5,6,7,8,9,10];
    }
}
