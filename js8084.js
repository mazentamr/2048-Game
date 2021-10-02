
function startGame(){
    let game=document.querySelector(".game");
    let chaeld;
    let scor=0;
    // Function create element and tow numbar randome
    function creatbord(){
        for(let i=0;i<16;i++){
            let element=document.createElement("div");
            element.className="app";
        //   element.innerHTML=0;
            game.appendChild(element);
        }   
        random_numbar() 
        random_numbar()     
    }
    creatbord()

    // Selection
    function random_numbar(){
        chaeld=document.getElementById("id_game").getElementsByTagName("div");
        let rand=Math.floor(Math.random()*16);
        if(chaeld[rand].innerHTML=="" || chaeld[rand].innerHTML==0){
            chaeld[rand].innerHTML=2;
        }else random_numbar();
    }
    let swap;

    //Move ragth
    let n=0;
    function move_rigth(){
        lose_and_win();
        for(let i=0;i<16;i++){
            if(i % 4 === 0){
                let totalOne=chaeld[i].innerHTML;
                let totalTOw=chaeld[i+1].innerHTML;
                let totalThre=chaeld[i+2].innerHTML;
                let totalFor=chaeld[i+3].innerHTML;    

                let row=[Number(totalOne),Number(totalTOw),Number(totalThre),Number(totalFor)];

                let filter_arr=row.filter(num=>num>0);
                let length_zero=4-filter_arr.length;
                let new_row=Array(length_zero).fill(0);
                new_row=new_row.concat(filter_arr);

                if(JSON.stringify(row)==JSON.stringify(new_row)){
                    n+=1;
                }
                for(let j=0;j<4;j++){
                    if(new_row[j]==0){
                        new_row[j]="";
                    }
                }

                chaeld[i].innerHTML= new_row[0];
                chaeld[i+1].innerHTML=new_row[1];
                chaeld[i+2].innerHTML=new_row[2];
                chaeld[i+3].innerHTML=new_row[3];
            }
        }
    }
    //Move left
    let n2=0;
    function move_left(){
        lose_and_win()
        for(let i=0;i<16;i++){
            if(i % 4 === 0){
                let totalOne=chaeld[i].innerHTML;
                let totalTOw=chaeld[i+1].innerHTML;
                let totalThre=chaeld[i+2].innerHTML;
                let totalFor=chaeld[i+3].innerHTML;

                let row=[Number(totalOne),Number(totalTOw),Number(totalThre),Number(totalFor)];
                
                let filter_arr=row.filter(num=>num>0);
                let length_zero=4-filter_arr.length;
                let new_row=Array(length_zero).fill(0);
                new_row=filter_arr.concat(new_row);

                if(JSON.stringify(row)==JSON.stringify(new_row)){
                    n2+=1;
                }
                for(let j=0;j<4;j++){
                    if(new_row[j]==0){
                        new_row[j]="";
                    }
                }

                chaeld[i].innerHTML=new_row[0];
                chaeld[i+1].innerHTML=new_row[1];
                chaeld[i+2].innerHTML=new_row[2];
                chaeld[i+3].innerHTML=new_row[3];
            }
        }
    }

    //Move up
    let n3=0;
    function move_up(){
        lose_and_win()
        for(let i=0;i<4;i++){
                let totalOne=chaeld[i].innerHTML;
                let totalTOw=chaeld[i+4].innerHTML;
                let totalThre=chaeld[i+8].innerHTML;
                let totalFor=chaeld[i+12].innerHTML;

                let row=[Number(totalOne),Number(totalTOw),Number(totalThre),Number(totalFor)];
                let filter_arr=row.filter(num=>num>0);
                let length_zero=4-filter_arr.length;
                
                let new_row=Array(length_zero).fill(0);
                new_row=filter_arr.concat(new_row);

                if(JSON.stringify(row)==JSON.stringify(new_row)){
                    n3+=1;
                }
                for(let j=0;j<4;j++){
                    if(new_row[j]==0){
                        new_row[j]="";
                    }
                }
                chaeld[i].innerHTML=new_row[0];
                chaeld[i+4].innerHTML=new_row[1];
                chaeld[i+8].innerHTML=new_row[2];
                chaeld[i+12].innerHTML=new_row[3];
  
        }
    }
    //Move bottom
    let n4=0;
    function move_bottom(){
        lose_and_win()
        for(let i=0;i<4;i++){
                let totalOne=chaeld[i].innerHTML;
                let totalTOw=chaeld[i+4].innerHTML;
                let totalThre=chaeld[i+8].innerHTML;
                let totalFor=chaeld[i+12].innerHTML;
                let row=[Number(totalOne),Number(totalTOw),Number(totalThre),Number(totalFor)];
                let filter_arr=row.filter(num=>num>0);
                let length_zero=4-filter_arr.length;
                
                let new_row=Array(length_zero).fill(0);
                new_row=new_row.concat(filter_arr);
                if(JSON.stringify(row)==JSON.stringify(new_row)){
                    n4+=1;
                }
                for(let j=0;j<4;j++){
                    if(new_row[j]==0){
                        new_row[j]="";
                    }
                }
                chaeld[i].innerHTML=new_row[0];
                chaeld[i+4].innerHTML=new_row[1];
                chaeld[i+8].innerHTML=new_row[2];
                chaeld[i+12].innerHTML=new_row[3];
        }
    }

    //Concat left or rigth
    function concat_left_rigth(){
        for(let i=0;i<15;i++){
            if( i%4!==3 && chaeld[i].innerHTML===chaeld[i+1].innerHTML && chaeld[i+1].innerHTML!=""){
                let concat=Number(chaeld[i].innerHTML)+Number(chaeld[i+1].innerHTML)
                chaeld[i+1].innerHTML=0;
                chaeld[i].innerHTML=concat;
                chaeld[i+1].style.animation="slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
                scor=scor+concat;
                document.getElementById("r_scor").innerHTML=scor;
            }
        }
    }

    // Concat nounbar up or bottom
    function concat_up_daun(){
        for(let i=0;i<12;i++){
            if(i<12 && chaeld[i].innerHTML===chaeld[i+4].innerHTML &&chaeld[i+4].innerHTML!=""){
                let concat=Number(chaeld[i].innerHTML)+Number(chaeld[i+4].innerHTML)
                chaeld[i].innerHTML=0;
                chaeld[i+4].innerHTML=concat;
                chaeld[i+4].style.animation="slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
                scor=scor+concat;
                document.getElementById("r_scor").innerHTML=scor;
            }       

         }
    }

    function coordinet_color(){
        for(let i=0;i<16;i++){
            if(chaeld[i].innerHTML==""){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app"
            }else if(chaeld[i].innerHTML==2){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_1"
            }else if(chaeld[i].innerHTML==4){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_2"
            }else if(chaeld[i].innerHTML==8){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_3"
            }else if(chaeld[i].innerHTML==16){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_4"
            }else if(chaeld[i].innerHTML==32){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_5"
            }else if(chaeld[i].innerHTML==64){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_6"
            }else if(chaeld[i].innerHTML==128){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_7"
            }else if(chaeld[i].innerHTML==256){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_8"
            }else if(chaeld[i].innerHTML==512){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_9"
            }else if(chaeld[i].innerHTML==1024){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_10"
            }else if(chaeld[i].innerHTML==2048){
                chaeld[i].removeAttribute("class");
                chaeld[i].className="app_11"
            }
        }
    }
     
    function lose_and_win(){
        let i=0;
        while(i<16){
            if(chaeld[i].innerHTML==2048){ 
                alert("win") 
                break;
            }
            else if(chaeld[i].innerHTML==0){break}
            else if( i%4 !==3 && chaeld[i].innerHTML==chaeld[i+1].innerHTML){break}
            else if( i%4 !==0 && chaeld[i].innerHTML==chaeld[i-1].innerHTML){break}
            else if( i<12 && chaeld[i].innerHTML==chaeld[i+4].innerHTML){break}
            else if( i>3 && chaeld[i].innerHTML==chaeld[i-4].innerHTML ){break}
            else if(i===15){
                setTimeout(() => document.querySelector(".lose").style.visibility="visible", 1000);
            }
            i++;
        }
    }

    // Control in arrow
    function control(e) {
        if(e.keyCode === 39) { //Right arrow
            move_rigth()
            concat_left_rigth()
            move_rigth()
            if(n===8){
               
                n=0;
            }else{
                random_numbar();
                n=0;
            }
            coordinet_color()

        } 
        else if (e.keyCode === 37){//Left arrow
            move_left()
            concat_left_rigth()
            move_left()
           // coordinet_color()
           if(n2===8){
               
            n2=0;
            }else{
                random_numbar();
                n2=0;
            }
            coordinet_color()
        }
        else if (e.keyCode === 38){//Up arrow
            move_up()
            concat_up_daun()
            move_up()
            
            if(n3===8){
               
                n3=0;
            }else{
                random_numbar();
                n3=0;
            }
            coordinet_color()
        }
        else if (e.keyCode === 40){//Bottom arrow
            move_bottom()
            concat_up_daun()
            move_bottom()
            if(n4===8){
               
                n4=0;
            }else{
                random_numbar();
                n4=0;
            }
            coordinet_color()
        }
    }
    document.addEventListener('keyup', control);
}

startGame()

