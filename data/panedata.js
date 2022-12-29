document.getElementById("pane2").innerHTML=`

<button class="menu-close" onclick="
  if($('#main').hasClass('container-collaspe')){
  $('#main').removeClass('container-collaspe')
  $('#pane2').animate({width: '250px'}, {
        duration: 550,
        specialEasing: {
            width: 'swing'
        }
    });
  $('#main').animate({marginLeft: '255px'}, {
        duration: 550,
        specialEasing: {
            width: 'swing'
        }
    });
  $('#pane-content').slideDown(500);
  }else{
  $('#pane-content').slideUp(500);
  $('#pane2').animate({width: '45px'}, {
        duration: 550,
        specialEasing: {
            width: 'swing'
        }
    });
  $('#main').animate({marginLeft: '50px'}, {
        duration: 550,
        specialEasing: {
            width: 'swing'
        }
    });
  $('#main').addClass('container-collaspe');
  }">&#9776;</button>


<div class="pane-content" id="pane-content" style="display: none; top: 0px;">
<a href="/ai2/"><button class="pane-button">Main Page :)</button></a>
<a href="/ai2/text2code"><button class="pane-button">Generate Code</button></a>
<a href="/ai2/codeexplain"><button class="pane-button">Explain Code</button></a>
<a href="/ai2/settings"><button class="pane-button">Settings</button></a>

</div>
`
