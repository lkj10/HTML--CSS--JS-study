const toggleButton = document.querySelector(".toggle-button");
const bodyBackground = document.querySelector(".body-background");
const headerNav = document.querySelector(".header-nav-list-wrapper");
const imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");
const bookmarkTexts = document.querySelectorAll(".bookmark-text");
const searchInput = document.querySelector("#search-input")
// 다크모드 변경시에 변경해야하는 것들 
//// 버튼
//// body의 배경화면 
////header의 글씨
////아이콘의 배경
////북마크의 텍스트

toggleButton.addEventListener('click', function(){
    toggleButton.textContent = "다크 모드"
    toggleButton.classList.toggle("toggle-button-darkmode");
    bodyBackground.classList.toggle("body-background-darkmode");
    headerNav.classList.toggle("text-darkmode");
    for(let i =0; i< imgIconWrappers.length; i++){
        imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
    }
    for(let i =0; i< bookmarkTexts.length; i++){
        bookmarkTexts[i].classList.toggle("text-darkmode");
    }

if(toggleButton.classList.contains("toggle-button-darkmode")){
    toggleButton.textContent ="일반 모드";
}
})

searchInput.addEventListener('keyup', function(e){
    // 엔터를 친 경우에만 이동을 한다.
    console.log(e.code);
    if(e.code === 'Enter'){
        // location.href = "https://www.google.com/search?q=" + e.target.value;
        // ``왼쪽 탭에 있는 ${자바스크립트 데이터를 넣을 수 있다.}
        // 백틱은 1줄 이상이 넘어가도 허용이 된다.
        if (!e.target.value){
            alert("검색어를 입력해 주세요.");
            return;
        }
        // 이동할 때 새창을 띄우지 않고 이동하기
        location.href = `https://www.google.com/search?q=${e.target.value}`;
        // 새창 띄워서 이동하기
        // window.open(`https://www.google.com/search?q=${e.target.value}`)
    }
})

