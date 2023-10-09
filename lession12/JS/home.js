var listProduct = [
    {
        id:1,
        type:"nam",
        name:"Áo polo",
        img:'https://canifa.com/img/1000/1500/resize/8/t/8te23w001-sg527-2-thumb.webp',
        detail:'Áo polo nam dệt dáng suông',
        price:500000,
        status:true,
        statusCheck:true,
    },
    {
        id:2,
        type:"nam",
        name:"Áo phông",
        img:'https://canifa.com/img/1000/1500/resize/5/t/5ts23w002-sw142-2-thumb.webp',
        detail:'Áo phông unisex cotton..',
        price:400000,
        status:true,
        statusCheck:true,
    },
    {
        id:3,
        type:"nam",
        name:"Quần shorts",
        img:'https://canifa.com/img/1000/1500/resize/8/b/8bs23s006-sa702-2-thumb.webp',
        detail:'Quần shorts nam có túi 2 bên',
        price:600000,
        status:true,
        statusCheck:true,
    },
    {
        id:4,
        type:"nam",
        name:"Quần khaki",
        img:'https://canifa.com/img/1000/1500/resize/8/b/8bk23a002-se331-2-thumb.webp',
        detail:'Quần khaki nam dáng ôm',
        price:560000,
        status:true,
        statusCheck:true,
    },
    {
        id:5,
        type:"nữ",
        name:"Váy",
        img:'https://canifa.com/img/1000/1500/resize/6/d/6ds23w024-sn334-1-thumb.webp',
        detail:'Váy liền nữ interlock cổ bẻ dáng A...',
        price:800000,
        status:true,
        statusCheck:true,
    },
    {
        id:6,
        type:"nữ",
        name:"Quần jeans",
        img:'https://canifa.com/img/1000/1500/resize/6/b/6bj23s005-sj809-2-thumb.webp',
        detail:'Quần jeans nữ dáng flare',
        price:500000,
        status:true,
        statusCheck:true,
    },
    {
        id:7,
        type:"nữ",
        name:"Áo nỉ",
        img:'https://canifa.com/img/1000/1500/resize/6/t/6tw23w007-sp234-2.webp',
        detail:'Áo nỉ nữ bo gấu có in hình',
        price:900000,
        status:true,
        statusCheck:true,
    },
    {
        id:8,
        type:"nữ",
        name:"Bộ mặc nhà nữ",
        img:'https://canifa.com/img/1000/1500/resize/6/l/6ls23w013-sy239-1-thumb.webp',
        detail:'Bộ mặc nhà nữ áo dài tay... ',
        price:1500000,
        status:true,
        statusCheck:true,
    },
    {
        id:9,
        type:"Bé gái",
        name:"Váy",
        img:'https://canifa.com/img/1000/1500/resize/1/d/1ds23c002-fm229-1-thumb.webp',
        detail:'Váy liền bé gái tay cánh tiên đuôi cá',
        price:300000,
        status:true,
        statusCheck:true,
    },
    {
        id:10,
        type:"Bé gái",
        name:"Quần váy",
        img:'https://canifa.com/img/1000/1500/resize/1/b/1bs23c002-se392-120-1.webp',
        detail:'Quần giả váy bé gái cotton...',
        price:500000,
        status:true,
        statusCheck:true,
    },
    {
        id:11,
        type:"Bé trai",
        name:"Áo phông",
        img:'https://canifa.com/img/1000/1500/resize/2/t/2ts23w002-so185-1-thumb.webp',
        detail:'Áo phông bé trai có in hình',
        price:200000,
        status:true,
        statusCheck:true,
    },
    {
        id:12,
        type:"Bé trai",
        name:"Quần khaki",
        img:'https://canifa.com/img/1000/1500/resize/2/b/2bk23c003-se002-2-thumb.webp',
        detail:'Quần khaki bé trai cạp chun...',
        price:350000,
        status:true,
        statusCheck:true,
    },    
    
]

function ShowItems(listProductFilter){
    $("#list-items").html("");
    for(let i=0; i<listProductFilter.length;i++){
    var item = ` <div class="col-3">
                <div class="card card-style" >
                <img class="w-100" src="${listProductFilter[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${listProductFilter[i].name}</h5>
                <p class="card-text">${listProductFilter[i].detail}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${listProductFilter[i].price} đ</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Mua Ngay</a>
                </div>
            </div>
            <div>`;
        $('#list-items').append(item);
    }
}


function Check(){

    debugger;
    var type = $(".type").val();
    var name = $(".name").val();
    var price = $(".price").val();
    for(let i=0; i<listProduct.length;i++){
        listProduct[i].statusCheck=true;
    }
    for(let i=0; i<listProduct.length;i++){
        if(type!=""){
            if(listProduct[i].type!=type){
               listProduct[i].statusCheck=false
            }
        }
        if(name!=""){
            if(listProduct[i].name!=name){
               listProduct[i].statusCheck=false
            }
        }
        if(price!=""){
            if(listProduct[i].price>price){
               listProduct[i].statusCheck=false
            }
        }

    }
    var ProductFilter=[];
    var j=0;
    for(let i=0; i<listProduct.length;i++){
        if(listProduct[i].statusCheck===true){
            ProductFilter[j]=listProduct[i];
            j++;
        }
    }

    ShowItems(ProductFilter);
}




// function checkType(){
//     debugger;
//     $("#list-items").html("");
//     var type = $('.type').val();
   
//     for(let i=0; i<listProduct.length;i++){
//         if(listProduct[i].type==type){
//             Print(i);
//         }
//     }
      
// }
// function checkName(){
//     debugger;
//     $("#list-items").html("");
//     var name = $('.name').val();
   
//     for(let i=0; i<listProduct.length;i++){
//         if(listProduct[i].name==name){
//             Print(i);
//         }
//     }
      
// }
// function checkPrice(){
//     debugger;
//     $("#list-items").html("");
//     var price = $('.price').val();
   
//     for(let i=0; i<listProduct.length;i++){
//         if(listProduct[i].price==price){
//             Print(i);
//         }
//     }
      
// }
// function checkNamePrice(){
//     debugger;
//     $("#list-items").html("");
//     var name = $('.name').val();
//     var price = $('.price').val();
   
//     for(let i=0; i<listProduct.length;i++){
//         if(listProduct[i].name==name&&listProduct[i].price==price){
//             Print(i);
//         }
//     }
      
// }



