"use strict"
function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};

//scroll
document.addEventListener('DOMContentLoaded', ()=> {
    const scrollItems = document.querySelectorAll('.scrol-items');

    const scrol = () => {
        let windowH = (window.innerHeight * 5 / 6) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 10);
            if (windowH >= scrollOffset) {
                el.classList.add('animation');
                el.classList.remove('animation-none');
                anime({
                    targets: '.animation',
                    opacity: 1,
                    duration: 5000 ,
                });
            } else {
                el.classList.remove('animation');
                el.classList.add('animation-none');
                anime({
                    targets: '.animation-none',
                    opacity:0,
                    duration: 5000 ,
                });
                ;
            }
        });
    };
    scrol();
    window.addEventListener('scroll', ()=> {
        scrol();    
    })
    // scrol();
});
let HomeS = document.querySelector('.s-one');
let ClassOneS = document.querySelector('.s-two');
let ClassTwoS = document.querySelector('.s-fife');
let TourOneS = document.querySelector('.s-three');
let TourTwoS = document.querySelector('.s-four');
let TourThreeS = document.querySelector('.s-six');
let TourFourS = document.querySelector('.s-seven > .block-botton');
let MapsS = document.querySelector('.s-nine');
let ContactS = document.querySelector('footer');

addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let ButtonTours = document.querySelector('.navigationTours');
    let ButtonHome = document.querySelector('.navigationHome');
    let ButtonClass = document.querySelector('.navigationClass');
    let Button = document.querySelector ('.tours') ;
    let ButtonC = document.querySelector ('.classess') ;
    let ButtonOneC = ButtonC.firstElementChild;
    let ButtonTwoC = ButtonOneC.nextElementSibling;
    let ButtonOne = Button.firstElementChild;
    let ButtonTwo = ButtonOne.nextElementSibling;
    let ButtonThree = ButtonTwo.nextElementSibling;
    let ButtonFour = ButtonThree.nextElementSibling;
    let ButtonMaps = document.querySelector('.navigationMaps');
    let ButtonContact = document.querySelector('.navigationContact');
    if (isTouchScreendevice()){
        if (scrollTop / HomeS.offsetTop <=2.7){
            ButtonHome.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonHome.style.cssText = '';
        }
        if ((scrollTop / ClassOneS.offsetTop >= 0.8) && (scrollTop / ClassOneS.offsetTop < 3)) {
            ButtonClass.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonOneC.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonOneC.style.cssText = '';
        }
        if ((scrollTop / ClassTwoS.offsetTop >= 0.95) && (scrollTop / ClassTwoS.offsetTop < 1.15)) {
            ButtonClass.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonTwoC.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonTwoC.style.cssText = '';
        }
        if ((scrollTop / ClassOneS.offsetTop < 0.8) ||((scrollTop / ClassOneS.offsetTop >= 3) && (scrollTop / ClassTwoS.offsetTop < 0.95)) || (scrollTop / ClassTwoS.offsetTop >= 1.15)){
            ButtonClass.style.cssText = '';
        }
        if ((scrollTop / TourOneS.offsetTop >= 0.88) && (scrollTop / TourOneS.offsetTop < 1) ){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonOne.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonOne.style.cssText = '';
        }
        if ((scrollTop / TourTwoS.offsetTop >= 0.85) && (scrollTop / TourTwoS.offsetTop <= 1.1)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonTwo.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonTwo.style.cssText = '';
        } 
        if ((scrollTop / TourThreeS.offsetTop >=0.93) && (scrollTop / TourThreeS.offsetTop <= 1.05)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonThree.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonThree.style.cssText = '';
        } 
        if ((scrollTop / TourFourS.offsetTop >=0.92) && (scrollTop / TourFourS.offsetTop <= 1.07)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonFour.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonFour.style.cssText = '';
        }
        if((scrollTop / TourOneS.offsetTop < 0.88) || ((scrollTop / TourTwoS.offsetTop > 1.1) && (scrollTop / TourThreeS.offsetTop < 0.93)) || ((scrollTop / TourThreeS.offsetTop > 1.05) && (scrollTop / TourFourS.offsetTop < 0.92)) || (scrollTop / TourFourS.offsetTop > 1.07)) {
            ButtonTours.style.cssText = '';
        }
        if ((scrollTop / MapsS.offsetTop >=0.93) && (scrollTop / MapsS.offsetTop <0.98)){
            ButtonMaps.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonMaps.style.cssText = '';
        }
        if (scrollTop / ContactS.offsetTop >=0.95){
            ButtonContact.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonContact.style.cssText = '';
        }
    }else {
        if (scrollTop / HomeS.offsetTop <=7.7){
            ButtonHome.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonHome.style.cssText = '';
        }
        if ((scrollTop / ClassOneS.offsetTop >= 0.8) && (scrollTop / ClassOneS.offsetTop < 1.9)) {
            ButtonClass.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonOneC.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonOneC.style.cssText = '';
        }
        if ((scrollTop / ClassTwoS.offsetTop >= 0.95) && (scrollTop / ClassTwoS.offsetTop < 1.342)) {
            ButtonClass.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonTwoC.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonTwoC.style.cssText = '';
        }
        if ((scrollTop / ClassOneS.offsetTop < 0.8) ||((scrollTop / ClassOneS.offsetTop >= 1.9) && (scrollTop / ClassTwoS.offsetTop < 0.95)) || (scrollTop / ClassTwoS.offsetTop >= 1.342)){
            ButtonClass.style.cssText = '';
        }
        if ((scrollTop / TourOneS.offsetTop >= 0.8) && (scrollTop / TourOneS.offsetTop < 1.2) ){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonOne.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonOne.style.cssText = '';
        }
        if ((scrollTop / TourTwoS.offsetTop >= 0.9) && (scrollTop / TourTwoS.offsetTop <= 1.4)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonTwo.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonTwo.style.cssText = '';
        } 
        if ((scrollTop / TourThreeS.offsetTop >=0.97) && (scrollTop / TourThreeS.offsetTop <= 1.1)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonThree.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonThree.style.cssText = '';
        } 
        if ((scrollTop / TourFourS.offsetTop >=0.98) && (scrollTop / TourFourS.offsetTop <= 1.15)){
            ButtonTours.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
            ButtonFour.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';

        } else {
            ButtonFour.style.cssText = '';
        }
        if((scrollTop / TourOneS.offsetTop < 0.8) || ((scrollTop / TourTwoS.offsetTop > 1.4) && (scrollTop / TourThreeS.offsetTop < 0.97)) || ((scrollTop / TourThreeS.offsetTop > 1.1) && (scrollTop / TourFourS.offsetTop < 0.98)) || (scrollTop / TourFourS.offsetTop > 1.15)) {
            ButtonTours.style.cssText = '';
        }
        if ((scrollTop / MapsS.offsetTop >=0.98) && (scrollTop / MapsS.offsetTop <1.08)){
            ButtonMaps.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonMaps.style.cssText = '';
        }
        if (scrollTop / ContactS.offsetTop >=0.98){
            ButtonContact.style.cssText = 'border-bottom: 1px solid black; font-weight: bold';
        } else {
            ButtonContact.style.cssText = '';
        }
    }
  })

//scroll

//header

var burgerButton = function(){
    let HideOrNone = document.querySelector('.navigation');
    HideOrNone.classList.toggle('navigation-no-hide');
    HideOrNone.classList.toggle('navigation-hide');
    if (HideOrNone.classList.contains('navigation-no-hide')){
        anime ({
            targets: '.navigation-no-hide',
            opacity: 0.95,
            translateY: [-25, -1],
        })
    } else if (HideOrNone.classList.contains('navigation-hide')) {
        anime ({
            targets: '.navigation-hide',
            translateY: [0, -25],
            opacity: 0,
        })
    }

};
if (isTouchScreendevice()) {
anime ({
    targets: '.navigation-hide',
    opacity: 0
})

document.querySelector('.burger').onclick = burgerButton ;};
  
document.querySelector('.navigationHome').onclick = function(){
    
        let ButtonHome = document.querySelector('.navigationHome');
        let ButtonClass = document.querySelector('.navigationClass');
        let ButtonTours = document.querySelector('.navigationTours');
        let ButtonMaps = document.querySelector('.navigationMaps');
        let ButtonContact = document.querySelector('.navigationContact');
        ButtonHome.classList.toggle('button-active');
        ButtonHome.classList.toggle('button-no-active');
            if (ButtonTours.classList.contains('button-active')){
                anime ({
                    targets: '.tours',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.tours');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('tours-active');
                 }, 1000);
                 ButtonTours.classList.add('button-no-active');
                 ButtonTours.classList.remove('button-active');
            }
            if (ButtonClass.classList.contains('button-active')){
                anime ({
                    targets: '.classess',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.classess');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('classes-active');
                 }, 1000);
            ButtonClass.classList.add('button-no-active');
            ButtonClass.classList.remove('button-active');
            }
            if (ButtonContact.classList.contains('button-active')){
                ButtonContact.classList.add('button-no-active');
                ButtonContact.classList.remove('button-active');
            };
            if (ButtonMaps.classList.contains('button-active')){
                ButtonMaps.classList.add('button-no-active');
                ButtonMaps.classList.remove('button-active');
            };
         let Home =document.querySelector('.s-one');
         Home.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    
};
document.querySelector('.navigationClass').onclick = function(){
    if (isTouchScreendevice()){
        let ClassesNoHide= document.querySelector('.classess');
        let ToursNoHide= document.querySelector('.tours');
        if (ClassesNoHide.classList.contains('classes-hide')){
            ClassesNoHide.classList.remove('classes-hide'); 
            ClassesNoHide.classList.add('classes-no-hide');   
        } else {
            ClassesNoHide.classList.add('classes-hide');
            setTimeout(function(){
                ClassesNoHide.classList.remove('classes-no-hide');
            }, 500);
        }
        
        anime ({
            targets: '.classes-no-hide',
            opacity: [0,1],
            translateY: [ 0, '50%'],
            duration: 1000 ,
        });
        anime ({
            targets: '.classes-hide',
            opacity: [1,0],
            translateY: [ '50%', 0],
            duration: 1000 ,
        });
        if (ToursNoHide.classList.contains('tours-no-hide')){
            ToursNoHide.classList.remove('tours-no-hide');
            ToursNoHide.classList.add('tours-hide');
        }
        let Button = document.querySelector ('.classess') ;
    let ButtonOne = Button.firstElementChild;
    ButtonOne.addEventListener('click', function(){
        let Button_One =document.querySelector('.s-two');
        Button_One.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         
    });
    let ButtonTwo = ButtonOne.nextElementSibling;
    ButtonTwo.addEventListener('click', function(){
        let Button_Two =document.querySelector('.s-fife');
        Button_Two.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         
    })
    }else {
        let ButtonHome = document.querySelector('.navigationHome');
        let ButtonClass = document.querySelector('.navigationClass');
        let ButtonTours = document.querySelector('.navigationTours');
        let ButtonMaps = document.querySelector('.navigationMaps');
        let ButtonContact = document.querySelector('.navigationContact');
    if (ButtonClass.classList.contains('button-no-active')){
        if (ButtonTours.classList.contains('button-active')){
            anime ({
                targets: '.tours',
                height: '0vw' ,
                easing: 'easeInOutExpo',
            });
            let ButtonClasses= document.querySelector('.tours');
            setTimeout(()=>
            {ButtonClasses.classList.toggle('tours-active');
             }, 1000);
             ButtonTours.classList.add('button-no-active');
             ButtonTours.classList.remove('button-active');
        }
    anime ({
        targets: '.classess',
        height: '7.5vw' ,
        easing: 'easeInOutExpo',
    });
    let ButtonClasses= document.querySelector('.classess');
    ButtonClasses.classList.toggle('classes-active');
    ButtonClass.classList.remove('button-no-active');
    ButtonClass.classList.add('button-active');
    } else if (ButtonClass.classList.contains('button-active')){
        anime ({
            targets: '.classess',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
        let ButtonClasses= document.querySelector('.classess');
        setTimeout(()=>
        {ButtonClasses.classList.toggle('classes-active');
         }, 1000);
    ButtonClass.classList.add('button-no-active');
    ButtonClass.classList.remove('button-active');
    };
    if (ButtonContact.classList.contains('button-active')){
        ButtonContact.classList.add('button-no-active');
        ButtonContact.classList.remove('button-active');
    };
    if (ButtonMaps.classList.contains('button-active')){
        ButtonMaps.classList.add('button-no-active');
        ButtonMaps.classList.remove('button-active');
    };
    if (ButtonHome.classList.contains('button-active')){
        ButtonHome.classList.add('button-no-active');
        ButtonHome.classList.remove('button-active');
    };
    let Button = document.querySelector ('.classess') ;
    let ButtonOne = Button.firstElementChild;
    ButtonOne.addEventListener('click', function(){
        let Button_One =document.querySelector('.s-two');
        Button_One.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.classess',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    });
    let ButtonTwo = ButtonOne.nextElementSibling;
    ButtonTwo.addEventListener('click', function(){
        let Button_Two =document.querySelector('.s-fife');
        Button_Two.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.classess',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    })
}  
};
document.querySelector('.navigationTours').onclick = function(){
    if (isTouchScreendevice()){
        let ToursNoHide= document.querySelector('.tours');
        let ClassesNoHide= document.querySelector('.classess');
        // ToursNoHide.classList.toggle('tours-no-hide');
        if (ToursNoHide.classList.contains('tours-hide')){
            ToursNoHide.classList.remove('tours-hide'); 
            ToursNoHide.classList.add('tours-no-hide');   
        } else {
            ToursNoHide.classList.add('tours-hide');
            setTimeout(function(){
            ToursNoHide.classList.remove('tours-no-hide');
            }, 500);
        }
        
        anime ({
            targets: '.tours-no-hide',
            opacity: [0,1],
            translateY: [ 0, '50%'],
            duration: 1000 ,
        });
        anime ({
            targets: '.tours-hide',
            opacity: [1,0],
            translateY: [ '50%', 0],
            duration: 1000 ,
        });
        if (ClassesNoHide.classList.contains('classes-no-hide')){
            ClassesNoHide.classList.remove('classes-no-hide');
            ClassesNoHide.classList.add('classes-hide');
        }
        let Button = document.querySelector ('.tours') ;
    let ButtonOne = Button.firstElementChild;
    ButtonOne.addEventListener('click', function(){
        let Button_One =document.querySelector('.s-three');
        Button_One.scrollIntoView({
            block: "center" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    });
    let ButtonTwo = ButtonOne.nextElementSibling;
    ButtonTwo.addEventListener('click', function(){
        let Button_Two =document.querySelector('.s-four');
        Button_Two.scrollIntoView({
            block: "end" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    });
    let ButtonThree = ButtonTwo.nextElementSibling;
    ButtonThree.addEventListener('click', function(){
        let Button_Three =document.querySelector('.s-six');
        Button_Three.scrollIntoView({
            block: "center" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    });
    let ButtonFour = ButtonThree.nextElementSibling;
    ButtonFour.addEventListener('click', function(){
        let Button_Four =document.querySelector('.s-seven > .block-botton');
        Button_Four.scrollIntoView({
            block: "center" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    });
    }else {
        let ButtonHome = document.querySelector('.navigationHome');
        let ButtonClass = document.querySelector('.navigationClass');
        let ButtonTours = document.querySelector('.navigationTours');
        let ButtonMaps = document.querySelector('.navigationMaps');
        let ButtonContact = document.querySelector('.navigationContact');
    if (ButtonTours.classList.contains('button-no-active')){
        if (ButtonClass.classList.contains('button-active')){
            anime ({
                targets: '.classess',
                height: '0vw' ,
                easing: 'easeInOutExpo',
            });
            let ButtonClasses= document.querySelector('.classess');
            setTimeout(()=>
            {ButtonClasses.classList.toggle('classes-active');
             }, 1000);
        ButtonClass.classList.add('button-no-active');
        ButtonClass.classList.remove('button-active');
        }
    anime ({
        targets: '.tours',
        height: '12vw' ,
        easing: 'easeInOutExpo',
    });
    let ButtonClasses= document.querySelector('.tours');
    ButtonClasses.classList.toggle('tours-active');
    ButtonTours.classList.remove('button-no-active');
    ButtonTours.classList.add('button-active');
    } else if (ButtonTours.classList.contains('button-active')){
        anime ({
            targets: '.tours',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
        let ButtonClasses= document.querySelector('.tours');
        setTimeout(()=>
        {ButtonClasses.classList.toggle('tours-active');
         }, 1000);
         ButtonTours.classList.add('button-no-active');
         ButtonTours.classList.remove('button-active');
    };
    if (ButtonContact.classList.contains('button-active')){
        ButtonContact.classList.add('button-no-active');
        ButtonContact.classList.remove('button-active');
    };
    if (ButtonMaps.classList.contains('button-active')){
        ButtonMaps.classList.add('button-no-active');
        ButtonMaps.classList.remove('button-active');
    };
    if (ButtonHome.classList.contains('button-active')){
        ButtonHome.classList.add('button-no-active');
        ButtonHome.classList.remove('button-active');
    };
    let Button = document.querySelector ('.tours') ;
    let ButtonOne = Button.firstElementChild;
    ButtonOne.addEventListener('click', function(){
        let Button_One =document.querySelector('.s-three');
        Button_One.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.tours',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    });
    let ButtonTwo = ButtonOne.nextElementSibling;
    ButtonTwo.addEventListener('click', function(){
        let Button_Two =document.querySelector('.s-four');
        Button_Two.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.tours',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    });
    let ButtonThree = ButtonTwo.nextElementSibling;
    ButtonThree.addEventListener('click', function(){
        let Button_Three =document.querySelector('.s-six');
        Button_Three.scrollIntoView({
            block: "center" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.tours',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    });
    let ButtonFour = ButtonThree.nextElementSibling;
    ButtonFour.addEventListener('click', function(){
        let Button_Four =document.querySelector('.s-seven > .block-botton');
        Button_Four.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
         anime ({
            targets: '.tours',
            height: '0vw' ,
            easing: 'easeInOutExpo',
        });
    });
    }
};
document.querySelector('.navigationMaps').onclick = function(){

        let ButtonHome = document.querySelector('.navigationHome');
        let ButtonClass = document.querySelector('.navigationClass');
        let ButtonTours = document.querySelector('.navigationTours');
        let ButtonMaps = document.querySelector('.navigationMaps');
        let ButtonContact = document.querySelector('.navigationContact');
        ButtonMaps.classList.toggle('button-active');
        ButtonMaps.classList.toggle('button-no-active');
        if (ButtonHome.classList.contains('button-active')){
            ButtonHome.classList.add('button-no-active');
            ButtonHome.classList.remove('button-active');
        };
            if (ButtonTours.classList.contains('button-active')){
                anime ({
                    targets: '.tours',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.tours');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('tours-active');
                 }, 1000);
                 ButtonTours.classList.add('button-no-active');
                 ButtonTours.classList.remove('button-active');
            }
            if (ButtonClass.classList.contains('button-active')){
                anime ({
                    targets: '.classess',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.classess');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('classes-active');
                 }, 1000);
            ButtonClass.classList.add('button-no-active');
            ButtonClass.classList.remove('button-active');
            };
            if (ButtonContact.classList.contains('button-active')){
                ButtonContact.classList.add('button-no-active');
                ButtonContact.classList.remove('button-active');
            };
        let Maps =document.querySelector('.s-nine');
        Maps.scrollIntoView({
            block: "center" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
};
document.querySelector('.navigationContact').onclick = function(){

        let ButtonHome = document.querySelector('.navigationHome');
        let ButtonClass = document.querySelector('.navigationClass');
        let ButtonTours = document.querySelector('.navigationTours');
        let ButtonMaps = document.querySelector('.navigationMaps');
        let ButtonContact = document.querySelector('.navigationContact');
        ButtonContact.classList.toggle('button-active');
        ButtonContact.classList.toggle('button-no-active');
        if (ButtonHome.classList.contains('button-active')){
            ButtonHome.classList.add('button-no-active');
            ButtonHome.classList.remove('button-active');
        };
            if (ButtonTours.classList.contains('button-active')){
                anime ({
                    targets: '.tours',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.tours');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('tours-active');
                 }, 1000);
                 ButtonTours.classList.add('button-no-active');
                 ButtonTours.classList.remove('button-active');
            }
            if (ButtonClass.classList.contains('button-active')){
                anime ({
                    targets: '.classess',
                    height: '0vw' ,
                    easing: 'easeInOutExpo',
                });
                let ButtonClasses= document.querySelector('.classess');
                setTimeout(()=>
                {ButtonClasses.classList.toggle('classes-active');
                 }, 1000);
            ButtonClass.classList.add('button-no-active');
            ButtonClass.classList.remove('button-active');
            };
            if (ButtonMaps.classList.contains('button-active')){
                ButtonMaps.classList.add('button-no-active');
                ButtonMaps.classList.remove('button-active');
            };
            let Contact =document.querySelector('footer');
            Contact.scrollIntoView({
            block: "start" ,
            inline: "nearest" ,
            behavior: "smooth"
         }) ;
    }

//header

//s-one

anime ({
    targets: ['.back-one', '.back-two', '.text'],
    translateY: [-50, 0],
    duration: 3000 ,
})
// s-one

// s-two

anime ({
    targets: ['.p-anima', '.border-s-two'],
    translateY: [-50, 0],
    duration: 3000 ,
})
// s-two
//s-fife
var MoreOneTel = function () {
    let HideONone = document.querySelector('.information-place-one');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '16%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};
var MoreTwoTel = function () {
    let HideONone = document.querySelector('.information-place-two');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '16%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};
var MoreThreeTel = function () {
    let HideONone = document.querySelector('.information-place-three');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '16%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};
var MoreOneComp = function () {
    let HideONone = document.querySelector('.information-place-one');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '10%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};
var MoreTwoComp = function () {
    let HideONone = document.querySelector('.information-place-two');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '10%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};
var MoreThreeComp = function () {
    let HideONone = document.querySelector('.information-place-three');
    if (HideONone.classList.contains('information-hidden')){
        HideONone.classList.add('information-no-hidden');
        HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        anime({
            targets: HideONone,
            height:['0%', '60%'] ,
            easing: 'easeInOutExpo',
            delay: 0 ,
                duration: 1000 ,
        });
        HideONone.classList.remove('information-hidden');
    } else if (HideONone.classList.contains('information-no-hidden')) {
        HideONone.classList.add('information-hidden');
        HideONone.classList.remove('information-no-hidden');
        anime({
            targets: HideONone,
            height:['60%', '10%'] ,
            easing: 'easeInOutExpo',
                duration: 1000 ,
        });
        setTimeout(()=>
        {HideONone.innerHTML= 'Lorem ipsum dolor amet, consectetur  adipisicing...';
         }, 1000);
        

    }
};

    document.querySelector('.more-one').onclick = function(){
        if (isTouchScreendevice()){
            MoreOneTel();
        }else {
            MoreOneComp();
        }
    } ;
    document.querySelector('.more-two').onclick = function(){
        if (isTouchScreendevice()){
            MoreTwoTel();
        }else {
            MoreTwoComp();
        }
    } ;
    document.querySelector('.more-three').onclick = function(){
        if (isTouchScreendevice()){
            MoreThreeTel();
        }else {
            MoreThreeComp();
        }
    } ;
//s-fife

//s-six
//s-six

//s-seven

anime({
    targets: '.border-s-seven',
    keyframes: [
        {width: '17%' },
        {width: '8%' }
    ],
    duration:3000,
    easing: 'easeOutCubic',
    delay:5000,
    loop: true,

})

//s-seven
//footer


//footer
