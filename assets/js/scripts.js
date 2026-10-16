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

    // cloneItem.querySelector(".inner-schedule-body textarea").value = "";
    const body = cloneItem.querySelector(".inner-schedule-body");
    const id = `mec_${Date.now()}`;
    body.innerHTML = `<textarea textarea-mce id="${id}"></textarea>`;

    listItem.appendChild(cloneItem);
    inittialTinyMCE(`#${id}`);
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

  //Kéo thả, sắp sếp
  new Sortable(listItem, {
    handle: ".inner-move",
    animation: 150,
    onStart: (event) => {
      const textarea = event.item.querySelector("[textarea-mce");
      const id = textarea.id;
      tinymce.get(id).remove();
      inittialTinyMCE(`#${id}`);
    },
    // onEnd: (event) => {
    //   const textarea = event.item.querySelector("[textarea-mce");
    //   const id = textarea.id;
    //   inittialTinyMCE(`#${id}`);
    // },
  });
}
//End Schedule Section-8

//Filepond Image
const listFilepondImage = document.querySelectorAll("[filepond-image]");
let filePond = {};
if (listFilepondImage.length > 0) {
  listFilepondImage.forEach((filepondImage) => {
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginFileValidateType);
    filePond[filepondImage.name] = FilePond.create(filepondImage, { labelIdle: "+" });
  });
}
//End Filepond Image

//Biểu đồ doanh thu
const revenueChart = document.querySelector("#revenue-chart");
if (revenueChart) {
  new Chart(revenueChart, {
    type: "line",
    data: {
      labels: ["01", "02", "03", "04", "05", "06"],
      datasets: [
        {
          label: "Tháng 02/2026",
          data: [120000, 18000000, 3000000, 9000000, 16000000, 30000000],
          borderColor: "#36A1EA",
          borderWidth: 1.5,
        },
        {
          label: "Tháng 01/2026",
          data: [320000, 300000, 100000, 940000, 20000000, 20000000],
          borderColor: "#FE6383",
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Ngày",
          },
        },
        y: {
          title: {
            display: true,
            text: "Doanh thu (VNĐ)",
          },
        },
      },
      maintainAspectRatio: false,
    },
  });
}
//Form Create Category
const categoryCreateForm = document.querySelector("#category-create-form");
if (categoryCreateForm) {
  const validator = new JustValidate(categoryCreateForm);
  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên danh mục!",
      },
    ])
    .onSuccess((event) => {
      const name = event.target.name.value;
      const parent = event.target.parent.value;
      const position = event.target.position.value;
      const status = event.target.status.value;
      const avatars = filePond.avatar.getFiles();
      const description = tinymce.get("description").getContent();
      let avatar = null;
      if (avatars.length > 0) {
        avatar = avatars[0].file;
      }
      console.log(filePond);
      console.log(parent);
      console.log(position);
      console.log(status);
      console.log(avatar);
      console.log(description);
    });
}
