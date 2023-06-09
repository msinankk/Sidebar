$("#toggleSidebar,.toggle-sidebar").click(function (e) { 
    e.preventDefault();
    $("#sidebar").toggleClass("sidebar-collapsed");
    $(".nav-item").toggleClass("nav-item-collapsed");    
    $(".profile-image-container").toggleClass("profile-image-container-collapsed");
    $("#sidebar").removeClass("hovered");

    
    
});

$(".sidebar-item").click(function (e) { 
    $(".sidebar-item-active").removeClass("sidebar-item-active");
    $(this).addClass("sidebar-item-active");
});

$(".nav-item--dropdown").click(function (e) { 
    e.preventDefault();
    $(this).next().toggleClass("dropdown-items--hidden")
    
});

$(".sidebar").hover(function () {
        // over
        if ($('#sidebar').hasClass('sidebar-collapsed')) {
            // Class exists
            $("#sidebar").toggleClass("sidebar-collapsed");
            $(".nav-item").toggleClass("nav-item-collapsed");    
            $(".profile-image-container").toggleClass("profile-image-container-collapsed");
            $(this).addClass("hovered");
        } 
        
    }, function () {
        // out
        if ($(".sidebar").hasClass('hovered')) {
            // Class exists
            $("#sidebar").toggleClass("sidebar-collapsed");
            $(".nav-item").toggleClass("nav-item-collapsed");    
            $(".profile-image-container").toggleClass("profile-image-container-collapsed");
            $(this).addClass("hovered");
        }
    }
);