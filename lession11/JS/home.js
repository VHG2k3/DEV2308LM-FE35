var listNews = [
    {
        id:1,
        img:'https://devmaster.edu.vn/uploads/images/2023/08/vn-top-dev.jpg',
        title:'Việt Nam thiếu khoảng 150.000 đến 200.000 nhân sự mỗi năm',
        date:'15/09/2023',
        content:'Đến 2025, TopDev dự báo Việt Nam sẽ còn cần đến 700.000 nhân lực trong ngành công nghệ thông tin. Trong khi đó, số lượng lập trình viên hiện tại của V...'
    },
    {
        id:2,
        img:'https://devmaster.edu.vn/uploads/images/2021/11/khoa-hoc-may-tinh.jpg',
        title:'Tổng quan ngành khoa học máy tính ',
        date:'04/11/2021',
        content:' Khoa học máy tính là ngành học khá là hot trong những năm trở lại đây, luôn là ngành top đầu trong các trường đại học. Vậy học khoa học máy tính chúng..'
    },
    {
        id:3,
        img:'https://devmaster.edu.vn/uploads/images/2021/10/devmaster-xu-huo-ng-cong-nghe-dang-chu-y-trong-nam-2021.jpeg',
        title:'8 xu thế công nghệ đáng chú ý nhất trong năm 2021',
        date:'06/10/2021',
        content:'Trí tuệ nhân tạo (AI), công nghệ chuỗi khối (Blockchain), Internet vạn vật (IoT), mạng 5G, tự động hóa quy trình bằng robot (RPA),... được đánh giá là...'
    }
]

for(let i=0; i<listNews.length;i++){
    var news = `<div class="news w-22 mr-2 news-${listNews[i].id}">
                <div class="news-img mt-5">
                    <img class="w-100"src="${listNews[i].img}" alt="">
                </div>
                <div class="news-content mt-5">
                    <a href="#" >${listNews[i].title}</a>
                    <p class="mt-5">${listNews[i].date}</p>
                    <p class="mt-5">${listNews[i].content}
                        <a href="#"> Đọc thêm…</a>
                    </p>
                </div>
            </div>`;

    $('.list-news').append(news);
}