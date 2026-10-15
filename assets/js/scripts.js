//Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if (buttonMenuMobile) {
  const sider = document.querySelector(".sider");
  const siderOverlay = document.querySelector(".sider-overlay");
  buttonMenuMobile.addEventListener("click", () => {
    sider.classList.add("active");
    siderOverlay.classList.add("active");
  });

  siderOverlay.addEventListener("click", () => {
    sider.classList.remove("active");
    siderOverlay.classList.remove("active");
  });
}
//End Menu Mobile

//Schedule Section-8
const scheduleSection8 = document.querySelector(".section-8 .inner-schedule");
if (scheduleSection8) {
  const buttonCreate = scheduleSection8.querySelector(".inner-schedule-create");
  const listItem = scheduleSection8.querySelector(".inner-schedule-list");

  //Tạo mới
  buttonCreate.addEventListener("click", () => {
    const firstItem = listItem.querySelector(".inner-schedule-item");
    const cloneItem = firstItem.cloneNode(true);
    cloneItem.querySelector(".inner-schedule-head input").value = "";
    cloneItem.querySelector(".inner-schedule-body textarea").value = "";
    listItem.appendChild(cloneItem);
  });

  listItem.addEventListener("click", (event) => {
    //Đóng/mở item
    if (event.target.closest(".inner-more")) {
      const parentItem = event.target.closest(".inner-schedule-item");
      if (parentItem) {
        parentItem.classList.toggle("hidden");
      }
    }
    //Xóa item
    if (event.target.closest(".inner-remove")) {
      const parentItem = event.target.closest(".inner-schedule-item");
      const totalItem = listItem.querySelectorAll(".inner-schedule-item").length;
      if (parentItem && totalItem > 1) {
        parentItem.remove();
      }
    }
  });
}
//End Schedule Section-8
