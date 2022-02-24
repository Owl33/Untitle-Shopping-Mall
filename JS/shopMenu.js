

function mainSectionEvent() {
    const categories = document.querySelectorAll(".categories>ul>li");
    const AllhidenDownMenu = document.querySelectorAll(".clickdown");

    let defalutHeight = []; //기본 하이트값

    for (let i = 0; i < AllhidenDownMenu.length; i++) {
        defalutHeight[i] = AllhidenDownMenu[i].clientHeight;
    }

    categories.forEach(function (obj, idx) {
        const hiddenDownMenu = obj.querySelector(".clickdown");
        for (let obj of AllhidenDownMenu) {
            obj.style.height = "0";
        }
        obj.addEventListener("click", function () {
            for (let obj of AllhidenDownMenu) {
                obj.style.height = "0";
            }
            document.querySelector("section").style.height = "100%";

            if (this === categories[1]) {
                hiddenDownMenu.style.height = defalutHeight[idx - 1]-10 + "px";
            } else if (this === categories[2]) {
                hiddenDownMenu.style.height = defalutHeight[idx - 1]-10 + "px";
            }
            //  else if (this === categories[3]) {
            //     hiddenDownMenu.style.height = defalutHeight[idx - 1] + "px";
            // }
            else {
                alert("상품이 존재하지 않습니다.");
                window.location.reload(true);
            }
        });
    });
}
mainSectionEvent();
