$(document).ready(function () {
  $("btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api",
      datatype: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});
