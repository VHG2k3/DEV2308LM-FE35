//BTVN: viết hàm tìm kiếm trong tập dữ liệu có sãn bất kỳ, kiểm tra giá trị đầu vào xuất hiện bn lần? ở đâu?
//      Nếu không tồn tại in ra : no data
var arrDemo = ["anc",'dev',123,'72842',"js",123,"dev"];
function filter(x){
    var stt=1;
    var check=false;
    for(var i=0; i<arrDemo.length;i++){
        if(x==arrDemo[i]){
            console.log("Tìm thấy giá trị " + x + " lần thứ " + stt + " ở vị trí thứ: " + parseInt(i+1));
            stt++;
            check=true
        }
    }
    if(check==false){
        console.log("Không tìm thấy giá trị " + x);
    }
}

filter(123);
filter("dev");

//BTVN: tạo listUser(array object)
//Dùng lại form đăng nhập có sẵn, bắt sự kiện khi click button Đăng nhập thì lấy ra giá trị 2 ô input username,pass
//So sánh giá trị người dùng nhập với dữ liệu listUser
//nếu tồn tại ==>...
// nếu không tồn tai ==>
// nếu người dùng không nhập vào 1 trong 2 (Hoặc cả 2 ) thì thông báo người dùng không được để trống

var listUser = [
    {
        id:1,
        username: "admin",
        password: "admin",
    },
    {
        id:2,
        username: "test",
        password: "test",
    },
    {
        id:3,
        username: "giang",
        password: "123",
    },
    {
        id:4,
        username: "0964267898",
        password: "12345",
    },
    {
        id:5,
        username: "giang@gmail.com",
        password: "222",
    },
    {
        id:6,
        username: "VHG",
        password: "123456",
    },
    {
        id:7,
        username: "0962357313",
        password: "admin123",
    },
    {
        id:8,
        username: "admin2k3",
        password: "admin2k3",
    },
    {
        id:9,
        username: "giang2003",
        password: "2345",
    },
    {
        id:10,
        username: "admin1",
        password: "admin1",
    },
]

function checkLoop(){
    for(var i=0; i<listUser.length;i++){
        for(var j=i+1; j<listUser.length;j++){
            if(listUser[i].username==listUser[j].username){
                console.log("data bị trùng!");
            }
        }
    }
}
checkLoop();

function login(){

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
     
    if(username=='' || password=='' || username==''&&password==''){
        alert("Tên đăng nhập hoặc mật khẩu không được để trống");
        return;
    }
    var tempt = false;
    for(var i=0; i<listUser.length;i++){
        if(username==listUser[i].username && password==listUser[i].password){
            alert("Đăng nhập thành công!");
            tempt=true;  
        }
    }
    if(tempt==false){
        alert("Tên đăng nhập hoặc mật khẩu bị sai");
    }
}