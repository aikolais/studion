$(document).ready(() => {
// MENU

$('.navbar__menu-btn').on('click', function(){
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
});

// CAROUSEL

    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>;',    };
    $('.slider').slick(slickOptions);
    setInterval(() => {
        const numbersCollection = document.querySelectorAll('.counter__number');
        numbersCollection.forEach((number) => {
            const currentNumber = parseInt(number.innerHTML);
            number.innerHTML = currentNumber + 1;
        });
    }, 1000);

    const counterOptions = {
        delay: 10,
        time: 1000
    }
    $('.counter__number').counterUp(counterOptions);


    // EMAIL 

    $('footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.yourisp.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: email,
            Subject: "Por favor adicione na newsletter",
            Body: `Olá, eu gostaria de ser adicionado na newsletter. 
            Meu e-mail é ${email}.
            
            Obrigado.`
        }).then(
            message => alert(message)
        );
    });
});