//btvn: tính tích tất cả các phần tử convert về số
// Tính tổng,tích các phần tử ở vị trí chẵn 


var array = [1,3,5,2,'7','9','15'];
var tong=0,tong_chan=0;
var tich=tich_chan=1;
if(array.length==0){
    console.log("mảng rỗng");
}
else{
    for(var i=0; i<array.length;i++){
        tong = parseInt(tong) + parseInt(array[i]);
        tich = parseInt(tich) * parseInt(array[i]);
        if(i%2==0){
            tong_chan = parseInt(tong_chan) + parseInt(array[i]);
            tich_chan = parseInt(tich_chan) * parseInt(array[i]);
        }
    }
    console.log("Tổng của mảng = ",tong);
    console.log("Tích của mảng = ",tich);
    console.log("Tổng các phần tử ở vị trí chẵn của mảng = ",tong_chan);
    console.log("Tích các phần tử ở vị trí chẵn của mảng = ",tich_chan);
}

// Bài tập về nhà: Biện luận phương trình bậc 2: a*x^2+b*x+c=0;
var a=1;
var b=5;
var c=6;

if(a==0){
    console.log("Giải phương trình bậc nhất");
}
else{
    var d = b*b-4*a*c;
    if(d>0){
        console.log("Phương trình có 2 nghiệm phân biệt: " );
        console.log("x1 = ", ((-b+ Math.sqrt(d))/(2*a)));
        console.log("x2 = ", ((-b- Math.sqrt(d))/(2*a)));

    }
    else if(d==0){
        console.log("Phương trình có 1 nghiệm kép x1=x2= ",-b/(2*a));
    }
    else{
        console.log("Phương trình vô nghiệm");
    }
}

// Switch -case 
var thang = 2;
var nam = 2028;
switch(thang){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng: ",thang + " có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng: ",thang + " có 30 ngày");
        break;
    case 2:
        if(nam%4==0){
            console.log("Tháng: ",thang +" có 29 ngày");
            break;
        }
        else{
            console.log("Tháng: ",thang +" có 28 ngày");
            break;
        }
}




