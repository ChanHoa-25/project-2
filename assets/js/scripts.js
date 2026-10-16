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
//End Form Create Category

// Form Create Tour

const tourCreateForm = document.querySelector("#tour-create-form");

if (tourCreateForm) {
  const validator = new JustValidate(tourCreateForm);
  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên tour!",
      },
    ])
    .onSuccess((event) => {
      const name = event.target.name.value;
      const category = event.target.category.value;
      const position = event.target.position.value;
      const status = event.target.status.value;
      const avatars = filePond.avatar.getFiles();
      let avatar = null;
      if (avatars.length > 0) {
        avatar = avatars[0].file;
      }
      const priceAdult = event.target.priceAdult.value;
      const priceChildren = event.target.priceChildren.value;
      const priceBaby = event.target.priceBaby.value;
      const priceNewAdult = event.target.priceNewAdult.value;
      const priceNewChildren = event.target.priceNewChildren.value;
      const priceNewBaby = event.target.priceNewBaby.value;
      const stockAdult = event.target.stockAdult.value;
      const stockChildren = event.target.stockChildren.value;
      const stockBaby = event.target.stockBaby.value;

      const locations = [];
      //Locations
      const listElementLocation = tourCreateForm.querySelectorAll(`input[name="locations"]:checked`);
      listElementLocation.forEach((input) => {
        locations.push(input.value);
      });
      //End Loactions
      const schedules = [];

      //Schedules
      const listElementSchedules = tourCreateForm.querySelectorAll(".inner-schedule-item");
      listElementSchedules.forEach((scheduleItem) => {
        const input = scheduleItem.querySelector("input");
        const title = input.value;

        const textarea = scheduleItem.querySelector("textarea");
        const idTextarea = textarea.id;
        const description = tinymce.get(idTextarea).getContent();
        schedules.push({
          title: title,
          description: description,
        });
      });

      //End Schedules

      const time = event.target.time.value;
      const vehicle = event.target.vehicle.value;
      const departureDate = event.target.departureDate.value;
      const information = tinymce.get("information").getContent();

      console.log(name);
      console.log(category);
      console.log(position);
      console.log(status);
      console.log(avatar);

      console.log(priceAdult);
      console.log(priceChildren);
      console.log(priceBaby);

      console.log(priceNewAdult);
      console.log(priceNewChildren);
      console.log(priceNewBaby);

      console.log(stockAdult);
      console.log(stockChildren);
      console.log(stockBaby);

      console.log(locations);

      console.log(time);
      console.log(vehicle);
      console.log(departureDate);
      console.log(information);
      console.log(schedules);
    });
}
//Form Edit Order
const orderEditForm = document.querySelector("#order-edit-form");
if (orderEditForm) {
  const validator = new JustValidate(orderEditForm);
  validator
    .addField("#fullName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập họ và tên!",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Họ và tên phải có ít nhất 5 ký tự!",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Họ và tên không được vượt quá 50 ký tự!",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập số điện thoại!",
      },
      {
        rule: "customRegexp",
        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        errorMessage: "Số điện thoại không đúng định dạng",
      },
    ])
    .onSuccess((event) => {
      const fullName = event.target.fullName.value;
      const phone = event.target.phone.value;
      const note = event.target.note.value;
      const paymentMethod = event.target.paymentMethod.value;
      const paymentStatus = event.target.paymentStatus.value;

      console.log(fullName);
      console.log(phone);
      console.log(note);
      console.log(paymentMethod);
      console.log(paymentStatus);
    });
}
//End Form Eidt Order

//Form Setting Infor Website
const settingWebsiteInforForm = document.querySelector("#setting-infor-website-form");
if (settingWebsiteInforForm) {
  const validator = new JustValidate(settingWebsiteInforForm);
  validator
    .addField("#websiteName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên website!",
      },
    ])
    .addField("#email", [
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng!",
      },
    ])
    .onSuccess((event) => {
      const websiteName = event.target.websiteName.value;
      const phone = event.target.phone.value;
      const email = event.target.email.value;
      const address = event.target.address.value;
      const logos = filePond.logo.getFiles();
      let logo = null;
      if (logos.length > 0) {
        logo = logos[0].file;
      }
      const favicons = filePond.favicon.getFiles();
      let favicon = null;
      if (favicons.length > 0) {
        favicon = favicons[0].file;
      }

      console.log(websiteName);
      console.log(phone);
      console.log(email);
      console.log(address);
      console.log(logo);
      console.log(favicons);
    });
}
