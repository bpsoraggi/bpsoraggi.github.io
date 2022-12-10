$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Student", "Programmer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Programmer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function sendEmail() {
    var element = document.querySelector("form");
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("text").value,
    }

    const serviceID = "service_e5apj1k";
    const templateID = "template_d2t2ngs"

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value;
            document.getElementById("email").value;
            document.getElementById("phone").value;
            document.getElementById("text").value;
            console.log(res);
            showSent();
        }).catch((err) => console.log(err));
}

function showSent() {
    var x = document.getElementById('sent');

    if (x.style.display == '' || x.style.display == 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}
