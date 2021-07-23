        const btn = document.querySelector(".btn");
        btn.addEventListener('click', gogo);

        // addEventListner ("이벤트명", 콜백함수(이벤트핸들러이름) )

        // 함수선언식이라 호이스팅이 됨.
        function gogo(){ 
            alert("gogo");
        }