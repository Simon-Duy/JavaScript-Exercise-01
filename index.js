// Câu 01
document.querySelector("#java01 .btnKetQua").onclick = function () {
    if(document.getElementById("txt-soNgayLam").value != "" && document.getElementById("txt-soNgayLam").value >= 0){
        var soNgayLam = document.getElementById("txt-soNgayLam").value;

        document.getElementById("ketQua01").innerHTML = `Lương của bạn là ${(soNgayLam * 100000).toLocaleString("en-VN", {
            style: "currency",
            currency: "VND"
        })}VND`;

    } else {
        alert("Vui lòng nhập số Ngày Làm việc và số Ngày phải lớn hơn hoặc bằng 0");
    }
}

// Câu 02
document.querySelector("#java02 .btnKetQua").onclick = function () {
    var soTB01 = parseFloat(document.getElementById("txt-so1").value);
    var soTB02 = parseFloat(document.getElementById("txt-so2").value);
    var soTB03 = parseFloat(document.getElementById("txt-so3").value);
    var soTB04 = parseFloat(document.getElementById("txt-so4").value);
    var soTB05 = parseFloat(document.getElementById("txt-so5").value);

    if (isNaN(soTB01))
        soTB01 = 0;
    if (isNaN(soTB02))
        soTB02 = 0;
    if (isNaN(soTB03))
        soTB03 = 0;
    if (isNaN(soTB04))
        soTB04 = 0;
    if (isNaN(soTB05))
        soTB05 = 0;

    document.getElementById("ketQua02").innerHTML = `Giá trị Trung bình của 5 Số Thực là: ${(soTB01 + soTB02 + soTB03 + soTB04 + soTB05) / 5}`;
}

// Câu 03
document.querySelector("#java03 .btnKetQua").onclick = function () {
    if(document.getElementById("txt-soUSD").value != "" && document.getElementById("txt-soUSD").value >= 0){
        var soUSD = parseFloat(document.getElementById("txt-soUSD").value);
    
        document.getElementById("ketQua03").innerHTML = `Số tiền VND được quy đổi từ ${soUSD}USD là: ${(soUSD * 23500).toLocaleString("en-VN", {
            style: "currency",
            currency: "VND"
        })}VND`;
    } else {
        alert("Vui lòng không để trống và nhập số tiền USD cần quy đổi lớn hơn hoặc bằng 0");
    }
}

// Câu 04
document.querySelector("#java04 .btnKetQua").onclick = function () {
    if(document.getElementById("txt-chieuDai").value != "" && document.getElementById("txt-chieuDai").value >= 0 && document.getElementById("txt-chieuRong").value != "" && document.getElementById("txt-chieuRong").value >= 0)
    {
        var chieuDai = parseFloat(document.getElementById("txt-chieuDai").value);

        var chieuRong = parseFloat(document.getElementById("txt-chieuRong").value);

        document.getElementById("ketQua04-CV").innerHTML = `Chu vi Hình chữ nhật: ${(chieuDai + chieuRong) * 2}`;

        document.getElementById("ketQua04-DT").innerHTML = `Diện tích Hình chữ nhật: ${chieuDai * chieuRong}`;

    } else {
        alert("Vui lòng không để trống các trường dữ liệu và nhập chiều Dài và chiều Rộng lớn hơn hoặc bằng 0");
    }
}

// Câu 05
document.querySelector("#java05 .btnKetQua").onclick = function () {
    if(document.getElementById("txt-kySo").value != "" && document.getElementById("txt-kySo").value >= 0) {
        var kySo = parseInt(document.getElementById("txt-kySo").value);

        // Cách 01
        var hangChuc = (kySo - (kySo % 10)) / 10;
        var hangDonVi = kySo % 10;

        document.getElementById("ketQua05").innerHTML = `Tổng 2 Ký số của ${kySo} là: ${hangChuc + hangDonVi}`;

        // Cách 02
        // document.getElementById("ketQua05").innerHTML = `Tổng 2 Ký số của ${kySo} là: ${Math.floor(kySo / 10) + (kySo % 10)}`;

    } else {
        alert("Vui lòng không để trống và nhập một số Tự nhiên gồm 2 Ký số");
    }
}