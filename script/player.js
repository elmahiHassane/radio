class Player{
    constructor(){
        this.centent=document.getElementById("centent");
        this.centent.style.height=screen.height+"px";
        this.div=document.getElementById("div");
        this.div.style.height=screen.height-200+"px";
        if(screen.width<=800){
            this.centent.style.width=screen.width+"px";
        }
        this.file_audio=document.getElementById("file_audio");
        this.play=document.getElementById("play");
        this.play.addEventListener("click",()=>{
            this.play_pause();
        });
        this.isPlayed=false;
        this.counter=0;

        this.linkRadio=[];
        this.linkRadio[0]="https://biskra.ice.infomaniak.ch/07.aac";
        this.linkRadio[1]="https://tlemcen.ice.infomaniak.ch/13.aac";
        this.linkRadio[2]="https://blida.ice.infomaniak.ch/09.aac";

        this.nameRadio=[];
        this.nameRadio[0]="Biskra";
        this.nameRadio[1]="Tlemcen";
        this.nameRadio[2]="Blida";

        this.next=document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.nextRadio();
            this.play_pause();
        });

        this.back=document.getElementById("back");
        this.back.addEventListener("click",()=>{
            this.backRadio();
            this.play_pause();
        });
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src="img/pause.png";
            this.file_audio.play();
            this.isPlayed=true;
        }
        else if(this.isPlayed==true){
            this.play.src="img/play.png";
            this.file_audio.pause();
            this.isPlayed=false;
           
        }
    }
    nextRadio(){
        if(this.counter<this.linkRadio.length-1){
            ++this.counter;
            this.isPlayed =false; 
        }
        else{
            this.counter=0;
            this.isPlayed =false; 
        }
        this.for_nom_linkRadio();
    }
    backRadio(){
        if(this.counter>0){
            --this.counter;
            this.isPlayed = false; 
         }
         else{
            this.counter = this.linkRadio.length -1;
            this.isPlayed = false;
         }
      
         this.for_nom_linkRadio();
    }
    for_nom_linkRadio(){
        this.title=document.getElementById("title");
        this.title.innerHTML=this.nameRadio[this.counter];
        this.file_audio.src=this.linkRadio[this.counter];
    } 
}
onload=new Player();