const LoadProduct = JSON.parse(localStorage.getItem("product"));
const ProductSubsrc = LoadProduct.detailsrc;
const btnprev = document.querySelector(".btn-prev");
const btnnext = document.querySelector(".btn-next");
const bigimg = document.querySelector(".bigimgview img");
const slidebar = document.querySelector(".slidebar");

let countInt = 1;
let overIdx = 0;

(function () {
    //로컬스토리지에 저장되어있는 프로덕트 객체를 불러와서 보여주는 함수
    const productname = document.querySelector(".slidebar>h2");
    const productprice = document.querySelector(".price");
    bigimg.src = `../` + LoadProduct.src;
    productname.innerText = LoadProduct.name;
    productprice.innerText = LoadProduct.price;
    for (let i = 0; i < 4; i++) {
        const subimg = document.createElement("img");
        const smallimgView = document.querySelector(".smallimgview");
        subimg.src = ProductSubsrc[i];
        smallimgView.append(subimg);
    }
    for (let i = 0; i < ProductSubsrc.length; i++) {
        const detailimg = document.createElement("img");
        const prodimgpage = document.querySelector(".prodimgpage");
        detailimg.src = ProductSubsrc[i];
        prodimgpage.append(detailimg);
    }
})();

const smallimg = document.querySelectorAll(".smallimgview img");

const overhideanimation = () => {
    //이미지 애니메이션
    bigimg.classList.add("imganimationhide");
    setTimeout(() => {
        bigimg.classList.remove("imganimationhide");
    }, 100);
    bigimg.classList.add("imganimationover");
};

const clicknext = () => {
    //우측 클릭 이벤트 함수
    if (overIdx < smallimg.length - 1) {
        overIdx++;
        bigimg.classList.add("imganimationover");
    } else {
        overIdx = 0;
    }

    bigimg.setAttribute("src", smallimg[overIdx].getAttribute("src"));
    overhideanimation();
};
const clickprev = () => {
    //좌측 클릭 이벤트 함수
    if (overIdx <= 0) {
        overIdx = smallimg.length - 1;
    } else {
        overIdx--;
    }
    bigimg.setAttribute("src", smallimg[overIdx].getAttribute("src"));
    overhideanimation();
};

const clickDetailChange = () => {
    //디테일 메뉴 본문 체인지

    const detailselect = document.querySelectorAll(".detailmenu li");
    const detailpage = document.querySelectorAll(
        ".detailmenu .detailpage .page"
    );
    detailselect.forEach(function (obj, idx) {
        obj.addEventListener("click", function () {
            const detailSelectRemove = document.querySelector(".on");
            for (let detail of detailpage) {
                //디테일페이지 삭제
                detail.style.display = "none";
            }

            detailSelectRemove.classList.remove("on"); //클래스리스트 삭제

            const detailSelectView = obj.querySelector("div");
            detailSelectView.classList.add("on"); //클래스리스트 전환

            if (this === detailselect[0]) {
                //디테일 페이지 전환
                detailpage[0].style.display = "block";
            } else {
                detailpage[idx].style.display = "flex";
            }
        });
    });
};
const sizeSelectEvent = () => {
    //사이즈 클릭 이벤트
    const sizeSelect = document.querySelectorAll(".sizebox li");

    sizeSelect.forEach(function (obj) {
        obj.addEventListener("click", function () {
            const sizeSelectRemove =
                document.querySelectorAll(".sizebox ul li div");
            for (let sizeRemove of sizeSelectRemove) {
                sizeRemove.classList.remove("sizeselecton");
            }
            const sizeSelectView = obj.querySelector("div");
            sizeSelectView.classList.add("sizeselecton");
        });
    });
};

const countEVENT = () => {
    const countPlus = document.querySelector(".plus");
    const countMinus = document.querySelector(".minus");
    const countView = document.querySelector(".countview");
    countPlus.addEventListener("click", function () {
        if (countInt < LoadProduct.stock) {
            countInt++;
            countView.innerText = countInt;
        } else if (countInt == LoadProduct.stock) {
            alert(
                "이 상품은 " +
                    LoadProduct.stock +
                    "개 까지만 구매 하실 수 있습니다."
            );
        }
    });
    countMinus.addEventListener("click", function () {
        if (countInt > 1) {
            countInt--;
            countView.innerText = countInt;
        }
    });
};

const oversmallidx = (obj) => {
    //마우스오버 인덱스값 저장
    for (let i = 0; i <= smallimg.length; i++) {
        if (smallimg[i] == obj) {
            return i;
        }
    }
};

const productinit = () => {
    for (let obj of smallimg) {
        obj.addEventListener("mouseover", function () {
            //bigimg 이미지 변경
            bigimg.setAttribute("src", this.src);

            overIdx = oversmallidx(this);
            overhideanimation();
        });
    }
    btnprev.addEventListener("click", clickprev);
    btnnext.addEventListener("click", clicknext);

    sizeSelectEvent();
    clickDetailChange();
    countEVENT();
};
// import {OuterProduct, TopProduct} from '../product/product.js';
productinit();
