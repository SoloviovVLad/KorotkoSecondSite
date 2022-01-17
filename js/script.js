let caption = document.getElementsByClassName('main-caption'),
    captionWrapper = document.getElementsByClassName('main-caption__wrapper'),
    captionItemFirst = document.getElementsByClassName('main-caption__wrapper__item--first'),
    container = document.getElementsByClassName('container'),
    widthContainer,
    marginRightOfItem,
    widthCaption;

for(let j = 0; j < container.length; j++){
    let style = window.getComputedStyle(container[j]);
    widthContainer = parseInt(style.paddingLeft);
}

const mainCaption = () =>{
    for(let i = 0; i < captionWrapper.length; i++){
        captionWrapper[i].parentElement.style.height = `${captionWrapper[i].offsetHeight}px`;
        for(let i = 0; i<captionItemFirst.length; i++){
            widthCaption = captionItemFirst[i].offsetWidth;
            marginRightOfItem = parseInt(getComputedStyle(captionWrapper[i].children[0]).marginRight),
            captionItemFirst[i].style.left = -widthCaption - marginRightOfItem + 'px';
        }
    }
}
mainCaption();
window.addEventListener('resize',function(){
    mainCaption();
});



//*******************************************************//

let positionSlider = [0,0,0,0,0,0,0],
    slidesToShow,
    slidesToScroll = 1,
    sliderContainer = document.querySelectorAll('.slider-container'),
    sliderTrack = document.querySelectorAll('.slider-track'),
    btnPrev = document.querySelectorAll('.slider-button-prev'),
    btnNext = document.querySelectorAll('.slider-button-next'),
    sliderItems = document.querySelectorAll('.slider-track .slide-of-slider'),
    sliderItemsCount,
    sliderItemWidth,
    movePosition = slidesToScroll * sliderItemWidth;

  
for(let i = 0; i<btnPrev.length; i++){
    btnPrev[i].addEventListener('click', () => {
        
        positionSlider[i] += sliderItemWidth;
        
        setPosition(i);

        checkBtns();

    })
}
for(let i = 0; i<btnNext.length; i++){
    
    btnNext[i].addEventListener('click', () =>{

        sliderItemsCount  = sliderTrack[i].querySelectorAll('.slide-of-slider').length;
        sliderItemWidth = sliderTrack[i].children[0].clientWidth;

        slidesToShow = parseFloat( (sliderContainer[i].clientWidth/sliderItemWidth).toFixed(1));

        positionSlider[i] -= sliderItemWidth;
        setPosition(i);
        
        checkBtns();

    });
}
const setPosition = (i) =>{
        sliderTrack[i].style.transform = `translate(${positionSlider[i]}px)`;
}

const checkBtns = () =>{
    for(let i = 0; i<sliderTrack.length; i++){
        if(positionSlider[i] === 0){
            btnPrev[i].parentElement.children[0].classList.add('disable-btn');
            btnPrev[i].style.opacity = '0.3';
        }else{
            btnPrev[i].parentElement.children[0].classList.remove('disable-btn');
            btnPrev[i].style.opacity = '1';
        }
        if(positionSlider[i] <=  -(sliderItemsCount - slidesToShow) * sliderItemWidth ){
            btnNext[i].parentElement.children[0].classList.add('disable-btn');
            btnNext[i].style.opacity = '0.3';
        }else{
            btnNext[i].parentElement.children[0].classList.remove('disable-btn');
            btnNext[i].style.opacity = '1';
        }
    }

}
for(let i = 0; i<sliderTrack.length;i++){
    checkBtns();  
}

//***********************************************************//


let scrollBlockWrapper = document.querySelectorAll('.scroll-block__wrapper'),
    progressBar = document.querySelectorAll('.scroll-block__progress-bar div');
    
    

function rangeFunc(){
    let range = document.querySelectorAll('.range')
    for(let i = 0; i < scrollBlockWrapper.length; i++){
        let rangeValue,
            oneStep;
        if(scrollBlockWrapper[i].classList.contains('scroll-block__wrapper--slider')){
            rangeValue = parseInt(range[i].value), 
            oneStep = (scrollBlockWrapper[i].scrollWidth - scrollBlockWrapper[i].clientWidth + parseInt(window.getComputedStyle(scrollBlockWrapper[i].children[0]).marginRight))*0.01;
        }else{
            rangeValue = parseInt(range[i].value), 
            oneStep = (scrollBlockWrapper[i].scrollWidth - scrollBlockWrapper[i].clientWidth)*0.01;
        }
        scrollBlockWrapper[i].style.transform = "translateX(-"+rangeValue*oneStep +"px)"
    }
}
//intewiev open

let plusToOpen = document.querySelectorAll('.fifth-block__interviews__item .fifth-block__interviews__item__plus');

    for(let i = 0 ; i<plusToOpen.length; i++){
        plusToOpen[i].addEventListener('click', function(){
            if((this.parentElement.parentElement).classList.contains('fifth-block__interviews__item--open')){
                this.parentElement.parentElement.classList.remove('fifth-block__interviews__item--open')
                this.classList.remove('fifth-block__interviews__item__plus--open');
            }else{
                this.parentElement.parentElement.classList.add('fifth-block__interviews__item--open')
                this.classList.add('fifth-block__interviews__item__plus--open');
            }
        })
    }

let navGedichte = document.getElementById('gedichte'),
    navPoeme = document.getElementById('poeme'),
    navMiniaturen = document.getElementById('miniaturen'),
    navProsa = document.getElementById('prosa'),
    navEssays = document.getElementById('essays'),
    //sliders
    sliderGedichte = document.getElementById('gedichte-slider'),
    sliderPoeme = document.getElementById('poeme-slider'),
    sliderMiniaturen = document.getElementById('miniaturen-slider'),
    sliderProsa = document.getElementById('prosa-slider'),
    sliderEssays = document.getElementById('essay-slider'),
    sliderOfSevenBlock = document.querySelectorAll('.seventh-block__wrapper__slider')
    navItem = document.querySelectorAll('.seventh-block__name-of-slider__item');

for(let i = 0; i < navItem.length; i++){
    navItem[i].addEventListener('click', function(){
        for(let j = 0; j < navItem.length; j++){
            navItem[j].classList.remove('seventh-block__name-of-slider__item--current');
        }
        for(let k = 0; k < sliderOfSevenBlock.length; k++){
            sliderOfSevenBlock[k].classList.add('seventh-block__wrapper__slider--hide');
        }
        if(navItem[i].id === navGedichte.id){
            navItem[i].classList.add('seventh-block__name-of-slider__item--current')
            sliderGedichte.classList.remove('seventh-block__wrapper__slider--hide');
        }else if(navItem[i].id === navPoeme.id){
            navItem[i].classList.add('seventh-block__name-of-slider__item--current')
            sliderPoeme.classList.remove('seventh-block__wrapper__slider--hide');

        }else if(navItem[i].id === navMiniaturen.id){
            navItem[i].classList.add('seventh-block__name-of-slider__item--current')
            sliderMiniaturen.classList.remove('seventh-block__wrapper__slider--hide');

        }else if(navItem[i].id === navProsa.id){
            navItem[i].classList.add('seventh-block__name-of-slider__item--current');
            sliderProsa.classList.remove('seventh-block__wrapper__slider--hide');
        }else if(navItem[i].id === navEssays.id){
            navItem[i].classList.add('seventh-block__name-of-slider__item--current');
            sliderEssays.classList.remove('seventh-block__wrapper__slider--hide');
        }
        closeBlockNameOfSlider();
    })
}
    
let arrowNameSlider = document.getElementById('arrow-name-of-slider'),
    NameSliderBlock = document.getElementById('name-of-slider'),
    ItemNameSliderBlock = document.querySelectorAll('.seventh-block__name-of-slider__item'),
    countItemsNameSliderBlock,
    heightItemNameSliderBlock = NameSliderBlock.children[0].offsetHeight;

for(let i = 0; i<=ItemNameSliderBlock.length; i++){
    countItemsNameSliderBlock = i;
}

arrowNameSlider.addEventListener('click', function(){
    if(arrowNameSlider.classList.contains('open')){
       closeBlockNameOfSlider();
    }else{
        arrowNameSlider.children[0].style.transform = 'rotate(180deg)';
        NameSliderBlock.style.height = `${NameSliderBlock.children[0].offsetHeight*countItemsNameSliderBlock}px`
        for(let i = 0; i<ItemNameSliderBlock.length; i++){
            ItemNameSliderBlock[i].style.top = `${heightItemNameSliderBlock*i}px`;
        }
        arrowNameSlider.classList.add('open');
    }
})

const closeBlockNameOfSlider = () =>{
    arrowNameSlider.children[0].style.transform = 'rotate(0deg)';
    NameSliderBlock.style.height = `${heightItemNameSliderBlock}px`
    for(let i = 0; i<ItemNameSliderBlock.length; i++){
        ItemNameSliderBlock[i].style.top = `1px`;
    }
    arrowNameSlider.classList.remove('open');
}

let wrapperBuyBook = document.getElementById("wrapperBuyBook"),
    wrapperBuyBookItem = document.querySelectorAll('.third-block__wrapper__item'),
    wrapperBuyBookItemHeight,
    btnMoreBuyBook = document.getElementById('buttonMoreBuyBook'),
    allItemsBuyBook;

    
    for(let i = 0; i<=wrapperBuyBookItem.length; i++){
        allItemsBuyBook = i;
        wrapperBuyBookItemHeight = wrapperBuyBookItem[1].offsetHeight;
    }

    wrapperBuyBook.style.height = `${wrapperBuyBookItemHeight*5 + 60}px`;
    
    btnMoreBuyBook.addEventListener('click',function(){
        toggleBuyBook();
    }) 

    const toggleBuyBook = () =>{

        if(btnMoreBuyBook.classList.contains('buy-book-open')){
            btnMoreBuyBook.classList.remove('buy-book-open');
            wrapperBuyBook.style.height = `${wrapperBuyBookItemHeight*5 + 60}px`;
            wrapperBuyBook.classList.remove('third-block__wrapper--open')

        }else{
            btnMoreBuyBook.classList.add('buy-book-open');
            wrapperBuyBook.style.height = `${wrapperBuyBookItemHeight*allItemsBuyBook + 60}px`;
            wrapperBuyBook.classList.add('third-block__wrapper--open')
        }
    }

    let btnBiog = document.getElementById('btnBiografie'),
        paragraphFullBiog = document.getElementById('paragraphFullBiog'),
        photoBiog = document.getElementById('photoBiog');

    btnBiog.addEventListener('click', function(){
        toggleBiografie();
    })
    const toggleBiografie = () =>{
        if(btnBiog.classList.contains('button-readmore--open-biog')){
            btnBiog.classList.remove('button-readmore--open-biog');
            paragraphFullBiog.classList.remove('second-block__content-wrapper__description__text--after-btn--open');
            photoBiog.style.position = 'absolute' ;
            photoBiog.style.top = 0 ;
        }else{
            btnBiog.classList.add('button-readmore--open-biog');
            paragraphFullBiog.classList.add('second-block__content-wrapper__description__text--after-btn--open');
            photoBiog.style.position = 'sticky';
            photoBiog.style.top = `${25}px`;
            
        }
    }


//fourth-block data

let wrapper4Block = document.getElementById('fourth-block__content-of-slide'),
    wrapperItems4Block = document.querySelectorAll('.fourth-block__content-of-slide__item'),
    itemsSlider4Block = [...document.querySelectorAll('.fourth-block__wrapper__slider__item')],
    wrapperItems4BlockHeight,
    indexItem4Block;
  
let open4NewsBlock = () =>{
    for(let i=0; i<wrapperItems4Block.length; i++){
        if(wrapperItems4Block[i].classList.contains('fourth-block__content-of-slide__item--current')){
            wrapperItems4BlockHeight = wrapperItems4Block[i].offsetHeight,
            wrapperItems4Block[i].style.height = `${wrapperItems4BlockHeight}px`,
            wrapper4Block.style.height = `${wrapperItems4BlockHeight}px`;
        }
    }
}
open4NewsBlock(); 

for(let i=0; i<itemsSlider4Block.length; i++){
    itemsSlider4Block[i].addEventListener('click',function(){
        indexItem4Block = itemsSlider4Block.indexOf(this);

        for(let j=0; j<itemsSlider4Block.length; j++){
            if(itemsSlider4Block[j].classList.contains('fourth-block__wrapper__slider__item--current')){
                itemsSlider4Block[j].classList.remove('fourth-block__wrapper__slider__item--current')
            }
        }

        for(let i=0; i<wrapperItems4Block.length; i++){
            if(wrapperItems4Block[i].classList.contains('fourth-block__content-of-slide__item--current')){
                wrapperItems4Block[i].classList.remove('fourth-block__content-of-slide__item--current')
        
            }
        }

        if(wrapperItems4Block[indexItem4Block].classList.contains('fourth-block__content-of-slide__item--current')){
         
        }else{
            wrapperItems4Block[indexItem4Block].classList.add('fourth-block__content-of-slide__item--current')
            wrapperItems4BlockHeight = wrapperItems4Block[indexItem4Block].offsetHeight
            wrapperItems4Block[indexItem4Block].style.height = `${wrapperItems4BlockHeight}px`
            wrapper4Block.style.height = `${wrapperItems4BlockHeight}px`
        }
        this.classList.add('fourth-block__wrapper__slider__item--current')
    })
}

let btnClose4Block = document.querySelectorAll('.fourth-block__content-of-slide__item__close');

for(let i = 0; i<btnClose4Block.length; i++){
    btnClose4Block[i].addEventListener('click', function(){
        // this.parentElement.style.height = 0;
        wrapper4Block.style.height = 0;
        for(let j=0; j<itemsSlider4Block.length; j++){
            itemsSlider4Block[j].classList.remove('fourth-block__wrapper__slider__item--current')
        }
    })
}
let wrapper9Block = document.getElementById('ninth-block__content-of-slide'),
    wrapperItems9Block = document.querySelectorAll('.ninth-block__content-of-slide__item'),
    itemsSlider9Block = [...document.querySelectorAll('.ninth-block__wrapper__slider__item')],
    wrapperItems9BlockHeight,
    indexItem9Block;
  
let open9NewsBlock = () =>{
    for(let i=0; i<wrapperItems9Block.length; i++){
        if(wrapperItems9Block[i].classList.contains('ninth-block__content-of-slide__item--current')){
            wrapperItems9BlockHeight = wrapperItems9Block[i].offsetHeight,
            wrapperItems9Block[i].style.height = `${wrapperItems9BlockHeight}px`,
            wrapper9Block.style.height = `${wrapperItems9BlockHeight}px`;
        }
    }
}
open9NewsBlock();  

for(let i=0; i<itemsSlider9Block.length; i++){

    itemsSlider9Block[i].addEventListener('click',function(i){
        indexItem9Block = itemsSlider9Block.indexOf(this);

        for(let j=0; j<itemsSlider9Block.length; j++){
            if(itemsSlider9Block[j].classList.contains('ninth-block__wrapper__slider__item--current')){
                itemsSlider9Block[j].classList.remove('ninth-block__wrapper__slider__item--current')
            }
        }

        for(let i=0; i<wrapperItems9Block.length; i++){
            if(wrapperItems9Block[i].classList.contains('ninth-block__content-of-slide__item--current')){
                wrapperItems9Block[i].classList.remove('ninth-block__content-of-slide__item--current')
        
            }
        }
        if(wrapperItems9Block[indexItem9Block].classList.contains('ninth-block__content-of-slide__item--current')){
            
        }else{
            wrapperItems9Block[indexItem9Block].classList.add('ninth-block__content-of-slide__item--current')
            wrapperItems9BlockHeight = wrapperItems9Block[indexItem9Block].offsetHeight,
            wrapperItems9Block[indexItem9Block].style.height = `${wrapperItems9BlockHeight}px`,
            wrapper9Block.style.height = `${wrapperItems9BlockHeight}px`;
        }
        this.classList.add('ninth-block__wrapper__slider__item--current')
    })
}




let btnClose9Block = document.querySelectorAll('.ninth-block__content-of-slide__item__close');

for(let i = 0; i<btnClose9Block.length; i++){
    btnClose9Block[i].addEventListener('click', function(){
        // this.parentElement.style.height = 0;
        wrapper9Block.style.height = 0;
        for(let j=0; j<itemsSlider9Block.length; j++){
            itemsSlider9Block[j].classList.remove('ninth-block__wrapper__slider__item--current')
        }
    })
}

//open burger menu

let burger = document.getElementById('burger'),
    burgerMenu = document.getElementById('burger-menu');

burger.addEventListener('click', function(){
    if(burger.classList.contains('header__burger--open')){
        closeBurgerMenu();
    }else{
        burger.classList.add('header__burger--open');
        burgerMenu.classList.add('burger-menu--open');
        document.body.style.overflowY = 'hidden'

    }
})
const closeBurgerMenu = () =>{
    burger.classList.remove('header__burger--open');
    burgerMenu.classList.remove('burger-menu--open');
    document.body.style.overflowY = 'scroll'
}
//nav-scroll

let navItemHeader = document.querySelectorAll('.header__nav-and-lang__nav__item');
    navItemBurgerMenu = document.querySelectorAll('.burger-menu__wrapper__nav__item');

const ZurPersonCaption = document.getElementById('zurPersonCaption'),
    KunstCaption = document.getElementById('KunstCaption'),
    BildergallerieCaption = document.getElementById('bildergallerieCaption'),
    AktuellesCaption = document.getElementById('AktuellCaption'),
    Kontakt = document.getElementById('Kontakt');

    for(let i= 0; i<navItemHeader.length;i++){
        navItemHeader[i].addEventListener('click', function(){

            if(this.classList.contains('zurPersonCaption')){
                ZurPersonCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
            }else if(this.classList.contains('KunstCaption')){
                KunstCaption.scrollIntoView({behavior: 'smooth', inline: 'start'});
            }else if(this.classList.contains('bildergallerieCaption')){
                BildergallerieCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
            }else if(this.classList.contains('AktuellCaption')){
                AktuellesCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
            }else if(this.classList.contains('Kontakt')){
                Kontakt.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        })
    }

    for(let i =0;i<navItemBurgerMenu.length; i++){
        navItemBurgerMenu[i].addEventListener('click', function(){
          
            if(this.classList.contains('zurPersonCaption')){
                ZurPersonCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
                closeBurgerMenu();
            }else if(this.classList.contains('KunstCaption')){
                KunstCaption.scrollIntoView({behavior: 'smooth', inline: 'start'});
                closeBurgerMenu();

            }else if(this.classList.contains('bildergallerieCaption')){
                BildergallerieCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
                closeBurgerMenu();

            }else if(this.classList.contains('AktuellCaption')){
                AktuellesCaption.scrollIntoView({behavior: 'smooth', block: 'start'});
                closeBurgerMenu();

            }else if(this.classList.contains('Kontakt')){
                Kontakt.scrollIntoView({behavior: 'smooth', block: 'start'});
                closeBurgerMenu();

            }
        })
    }
    //fake footer anchor
    const footer = document.getElementById('footer')
    
    Kontakt.style.bottom = `${-footer.offsetHeight}px`

    
/**************************************************/

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let i = 0; i<animItems.length; i++){
            const animItem = animItems[i],
                  animItemHeight = animItem.offsetHeight,
                  animItemOffset = offset(animItem).top,
                  animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if( animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active-anim');
            }else{
                animItem.classList.remove('_active-anim');
            }
        }
    }
    animOnScroll();
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left  + screenLeft}
    }
}