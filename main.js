$(function(){
    var Array1=["しがない","優秀な","気まぐれな","世界一の","The・","ビギナーズ・","ランクAの","高度な","クリエイティブ","機械的"]
    var Array2=["エンジニア","コーダー","AI","Webデザイナー","設計者","スペシャリスト","python好き","javaマスター","C#ジュニア","COBOL使い"]
    if(Math.random()*100>90){
        $(".name1").html(Array1[9]);
    }else if(Math.random()*100>80){
        $(".name1").html(Array1[8]);
    }else if(Math.random()*100>70){
        $(".name1").html(Array1[7]);
    }else if(Math.random()*100>60){
        $(".name1").html(Array1[6]);
    }else if(Math.random()*100>50){
        $(".name1").html(Array1[5]);
    }else if(Math.random()*100>40){
        $(".name1").html(Array1[4]);
    }else if(Math.random()*100>30){
        $(".name1").html(Array1[3]);
    }else if(Math.random()*100>20){
        $(".name1").html(Array1[2]);
    }else if(Math.random()*100>10){
        $(".name1").html(Array1[1]);
    }else{
        $(".name1").html(Array1[0]);
    }

    if(Math.random()*100>90){
        $(".name2").html(Array2[9]);
    }else if(Math.random()*100>80){
        $(".name2").html(Array2[8]);
    }else if(Math.random()*100>70){
        $(".name2").html(Array2[7]);
    }else if(Math.random()*100>60){
        $(".name2").html(Array2[6]);
    }else if(Math.random()*100>50){
        $(".name2").html(Array2[5]);
    }else if(Math.random()*100>40){
        $(".name2").html(Array2[4]);
    }else if(Math.random()*100>30){
        $(".name2").html(Array2[3]);
    }else if(Math.random()*100>20){
        $(".name2").html(Array2[2]);
    }else if(Math.random()*100>10){
        $(".name2").html(Array2[1]);
    }else{
        $(".name2").html(Array2[0]);
    }
});