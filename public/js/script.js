$(document).ready(() => {
    $("#savePost").click (() => {
        swal({
            title: "Post Created!",
            icon: "success",
            buttons: false,
        });
      });

    $("#saveProfile").click (() => {
        swal({
            title: "Profile Saved!",
            icon: "success",
            buttons: false,
        });
    });

    $(".post").hover(event => {
        console.log("hello");
        $(event.target).addClass("animate__animated animate__headShake");
        setTimeout(() => { $(event.target).removeClass("animate__animated animate__headShake"); }, 2000);
    });
       
   


});