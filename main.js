$(function(){
    var Array1=["しがない","優秀な","気まぐれな","世界一の","The・","ビギナーズ・","ランクAの","高度な","クリエイティブ","機械的"]
    var Array2=["エンジニア","コーダー","AI","Webデザイナー","設計者","スペシャリスト","python好き","javaマスター","C#ジュニア","COBOL使い"]
    $('button').click(function() {
        var random1=Math.random()*100;
        var random2=Math.random()*100;
        $(".pre").html("あなたの二つ名は...");
        if(random1>90){
            $(".name1").html(Array1[9]);
        }else if(random1>80){
            $(".name1").html(Array1[8]);
        }else if(random1>70){
            $(".name1").html(Array1[7]);
        }else if(random1>60){
            $(".name1").html(Array1[6]);
        }else if(random1>50){
            $(".name1").html(Array1[5]);
        }else if(random1>40){
            $(".name1").html(Array1[4]);
        }else if(random1>30){
            $(".name1").html(Array1[3]);
        }else if(random1>20){
            $(".name1").html(Array1[2]);
        }else if(random1>10){
            $(".name1").html(Array1[1]);
        }else{
            $(".name1").html(Array1[0]);
        }

        if(random2>90){
            $(".name2").html(Array2[9]);
        }else if(random2>80){
            $(".name2").html(Array2[8]);
        }else if(random2>70){
            $(".name2").html(Array2[7]);
        }else if(random2>60){
            $(".name2").html(Array2[6]);
        }else if(random2>50){
            $(".name2").html(Array2[5]);
        }else if(random2>40){
            $(".name2").html(Array2[4]);
        }else if(random2>30){
            $(".name2").html(Array2[3]);
        }else if(random2>20){
            $(".name2").html(Array2[2]);
        }else if(random2>10){
            $(".name2").html(Array2[1]);
        }else{
            $(".name2").html(Array2[0]);
        }        
    })

});
