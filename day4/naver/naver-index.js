const searchInput = document.querySelector("#search-input")

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
        location.href = `https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${e.target.value}`;
        // 새창 띄워서 이동하기
        // window.open(`https://www.google.com/search?q=${e.target.value}`)
    }
})