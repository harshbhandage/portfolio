let stars=document.getElementById('stars');
            let moon=document.getElementById('moon');
            let mountains_behind=document.getElementById('mountains_behind');
            let text=document.getElementById('text');
            let btn=document.getElementById('btn');
            let mountains_front=document.getElementById('mountains_front');
            let header=document.querySelector('header');

            window.addEventListener('scroll',function(){
                let value=window.scrollY;
                stars.style.left=value * 0.25+'px';
                moon.style.top=value *1.10+'px';
                mountains_behind.style.top=value*0.5+'px';
                mountains_front.style.top=value*0+'px';
                text.style.marginRight=value*4+'px';
                text.style.marginTop=value*1.5+'px';
                btn.style.marginTop=value*1.5+'px';
                header.style.top=value*0.5+'px';
            })

            var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    let $root = $('html, body');
      $('a[href^="#"]').click(function() {
          let href = $.attr(this, 'href');
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function() {
            window.location.hash = href;
          });
          return false;
        });