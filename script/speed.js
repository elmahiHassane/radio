class speed{
    constructor(){
        this.file_audio=document.getElementById("file_audio");
        var speed=document.getElementById("speed");
        speed.addEventListener("change",()=>{
            this.file_audio.playbackRate=speed.value*2/100;
        });
    }
}
onload=new speed();
