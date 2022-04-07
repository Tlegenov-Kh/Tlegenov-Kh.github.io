AOS.init();
console.log(window.location)
window.addEventListener('DOMContentLoaded',()=>{
    // // Loader------------------------>
    const body = document.querySelector('body');
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        body.classList.add('hide-overflow');
        loader.style.opacity = 0
        setTimeout(() => {
            loader.style.display = "none"
        }, 1000)
        body.classList.remove('hide-overflow')
    }, 1500);
    
    
    
    // Header fixed and scrolled down------------------------------>
    
    const header = document.querySelector('header');
    
    window.addEventListener('scroll',()=>{
        if(window.scrollY>55){
            header.classList.add('fixed')
            header.style.transitionDuration = '1s'
        }else{
            header.classList.remove('fixed')
            header.style.transitionDuration = '1s'
        }
    })
    
    
    
    
    // Modal window opening----------------------------------------->
    
    const openModal = document.querySelector('.bar_btn');
    const modal = document.querySelector('.modal-window');
    const closeModal = document.querySelector('.modal-exit_btn');
    
    openModal.addEventListener('click',()=>{
        modal.style.right = '0'
    })
    closeModal.addEventListener('click',()=>{
        modal.style.right = '-110%'
    })
    
    // Mobile nav------------------------------------------------------>
    
    const openMobileNav = document.querySelector('.mobile-menu_btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMobileNav = document.querySelector('.mobile_close');
    
    openMobileNav.addEventListener('click',()=>{
        mobileNav.style.right = '0';
    })
    closeMobileNav.addEventListener('click',()=>{
        mobileNav.style.right = '-110%';
    })
    
    
    // Main-page slider----------------------------------------------->
    
    const mainParentBtns = document.querySelector('.main-page_btn_block');
    const mainBtns = document.querySelectorAll('.main-page_btn');
    const mainParents = document.querySelectorAll('.main-slider_wrapper');
    const firstItem = document.querySelector('.main-slider_img');
    const secondItem = document.querySelector('.main-slider_info');
    const thirdItem = document.querySelector('.img_second');
    const fourthItem = document.querySelector('.info_second');
    
    
        let i=1
        function hideMainSlider(){
            mainParents.forEach(mainParent=>{
                mainParent.style.display = 'none'
            })
            mainBtns.forEach(mainBtn=>{
                mainBtn.classList.remove('main-active_btn')
            })
        }
        function showMainSlider(i){
            mainParents[i].style.display = 'flex';
            mainBtns[i].classList.add('main-active_btn');
            if(i==0){
                firstItem.style.animation = 'firstItemShown 1.5s';
                secondItem.style.animation = 'secondItemShown 1.75s';
            }else if(i==1){
                thirdItem.style.animation = 'firstItemShown 1.5s';
                fourthItem.style.animation = 'secondItemShown 1.75s';
            }
        }
        hideMainSlider()
        showMainSlider(i)
    
        mainParentBtns.addEventListener('click',(event)=>{
            mainBtns.forEach((item,i)=>{
                if (event.target == item){
                    hideMainSlider()
                    showMainSlider(i)
                }
            })
        })
    
    
        // Slick Slider =--------------------------------->
    $(document).ready(function(){
        $('.project-slider').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1300,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.comment-slider').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1600
        });
        $('.blog-slider').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.footer-slider').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    });
    
    
    /*Fixed button swipe up--------------------->*/
    const fixedBtn = document.querySelector('.fixed-btn');
    
    window.addEventListener('scroll',()=>{
        if(window.scrollY>150){
            fixedBtn.classList.add('visible-btn')
        }else{
            fixedBtn.classList.remove('visible-btn')
        }
    })
})
