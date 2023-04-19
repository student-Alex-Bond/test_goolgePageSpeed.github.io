window.addEventListener('DOMContentLoaded', () => {
    const cookie = document.querySelector('.cookie');
    const button = cookie.querySelector('.cookie__btn');
    const blckOurMission = document.querySelector('.our-mission');
    const animateImage = document.querySelector('.our-mission__img_phone');
    const animateText = document.querySelector('.our-mission__text');
    const elipseBg = blckOurMission.querySelector('.our-mission__elipse')
        //view cookie
    const timerId = setTimeout(() => {
        cookie.style.transform = `none`;

    }, 5000);
    button.addEventListener('click', () => {
        clearTimeout(timerId)
        cookie.style.transform = `translateY(18rem)`;
    });

    //animate block out-mission
    if (window.matchMedia("(min-width: 376px)").matches) {
        const blckOurMissionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateImage.style.left = '50%';
                    animateImage.style.transform = `translateX(-50%) rotate(90deg)`;
                    animateText.style.transform = `translateX(50rem)`;
                    animateText.style.opacity = '0';
                    const timerIDForImage = setTimeout(() => {
                        animateImage.style.transform = `translateX(-50%) rotate(0deg) scale(0.7)`;
                        clearTimeout(timerIDForImage)
                    }, 3000)
                    const timerIDForElipse = setTimeout(() => {
                        elipseBg.style.display = 'block';
                        elipseBg.style.opacity = 0.2;
                        clearTimeout(timerIDForElipse)
                    }, 6000)
                    observer.unobserve(blckOurMission)
                }
            })
        }, { threshold: [0.5, 0.7] })

        blckOurMissionObserver.observe(blckOurMission)
    }


});