$(function(){

  $('#sellPhone').on('click', function(){
    $('#sellingPhoneCnt').show(),
    $('#buyingPhoneCnt').hide(),
    $('#sellPhone.text-btn').addClass('active'),
    $('#buyPhone.text-btn').removeClass('active')
  })
  $('#buyPhone').on('click', function(){
    $('#buyingPhoneCnt').show(),
    $('#sellingPhoneCnt').hide(),
    $('#buyPhone.text-btn').addClass('active'),
    $('#sellPhone.text-btn').removeClass('active')
  }) 
  
  window.addEventListener('scroll', function(event){
    let scroll = this.scrollY;
    if(scroll > 590){
      $('.header-nav').css({
        background:'linear-gradient(rgb(4, 5, 5),rgb(68, 68, 69))'
      }),
      $('.logoname').css({
        color:'#fff'
      }),
      $('.header-nav .sign-up-btn').css({
        backgroundColor: '#fff',
        color:'rgb(4, 5, 5)',
        borderColor: '(4, 5, 5)'
      })
      $('.header-nav .sign-up-btn').on('mouseenter', function(){
        $(this).css({
          backgroundColor: 'transparent',
          color:'#fff',
          borderColor:'#fff'
        })
      })
      $('.header-nav .sign-up-btn').on('mouseout', function(){
        $(this).css({
          backgroundColor: '#fff',
          color:'rgb(4, 5, 5)',
          borderColor: 'rgb(4, 5, 5)'
        })
      })
      $('.flexible-menu').css({
        backgroundColor:'rgb(68, 68, 69)'
      })
    } else if(scroll < 590){
      $('.header-nav').css({
        background:'linear-gradient(rgb(58, 76, 148),rgb(88, 88, 152))'
      })
      $('.logoname').css({
        color:'rgb(181, 194, 210)'
      })
      $('.header-nav .sign-up-btn').css({
        backgroundColor: 'rgb(70, 52, 175)',
        color:'#fff',
        border: '1px solid transparent'
      })
      $('.header-nav .sign-up-btn').on('mouseenter', function(){
        $(this).css({
          backgroundColor: 'transparent',
          color:'#fff',
          borderColor:'#fff'
        })
      })
      $('.header-nav .sign-up-btn').on('mouseout', function(){
        $(this).css({
          backgroundColor: 'rgb(70, 52, 175)',
          color:'#fff',
          borderColor:'rgb(70, 52, 175)'
        })
      })
      $('.flexible-menu').css({
        backgroundColor:'rgb(88, 88, 152)'
      })
    }
  })

  $('.exit-icon').on('click', function(){
    $('.special-offer').fadeOut(500),
    $('header').css({
      marginBottom : '0'
    })
  });

  $('.warning-confirm').on('click',function(){
    $('.confirm-cookies').css({
      animationName:'hidingY',
      animationDuration:'.5s',
      animationIterationCount:'1'
    })
    $('.confirm-cookies').fadeOut(500)
  })

  $('.menu-icon i').on('click', function(){
    $('.flexible-menu').toggleClass('active-menu')
  })

});

                                                  // Just Javascript without jQuery
                                                  // Just Javascript without jQuery
                                                  // Just Javascript without jQuery
                                                  

let commentInput = document.querySelector('#leave-comment-input');
let inputComment = document.querySelector('#comment-input')

                                                  // Input System set-ups
                                                  // Input System set-ups
                                                  // Input System set-ups


commentInput.addEventListener('submit', function(event){
  event.preventDefault()
  let commentBlock = document.querySelector('.new-comment_block');
  let commentBlockValue = document.querySelector('.new-comment_block .comment p');
  let  commentsSection = document.querySelector('.others-comments_place');
  let commentData = document.querySelector('.new-comment_block .comment-info .comment-date');
  let latestComment = document.querySelector('.latest-comment_block');
  const rt = new Date();

  let getDay = rt.getUTCDate();
  let getMonth = rt.getMonth();
  let getYear = rt.getUTCFullYear();
  let getHour = rt.getHours();
  let getMinute = rt.getUTCMinutes();

  commentBlock.classList.add('d-flex')

  if(commentBlock.style.display = 'flex'){
    commentBlockValue.textContent = inputComment.value;
    inputComment.value = ('');
    commentData.textContent = getDay + '.' + getMonth + '.' + getYear + '/' + getHour + ':' + getMinute;
  }
  if(getDay <= 9){
    commentData.textContent = '0' + getDay + '.' + getMonth + '.' + getYear + '/' + getHour + ':' + getMinute
  }
  if(getMonth <= 9){
    commentData.textContent = getDay + '.' + '0' + getMonth + '.' + getYear + '/' + getHour + ':' + getMinute
  }
  if(getHour <= 9){
    commentData.textContent = getDay + '.' + getMonth + '.' + getYear + '/' + '0' + getHour + ':' + getMinute
  } 
  if(getMinute <= 9){
    commentData.textContent = getDay + '.' + getMonth + '.' + getYear + '/' + getHour + ':' + '0' + getMinute
  }
  if(getMonth <= 9, getDay <= 9){
    commentData.textContent = '0' + getDay + '.' + '0' + getMonth + '.' + getYear + '/' + getHour + ':' + getMinute
  }
  if(getMonth <= 9, getDay <= 9, getHour <= 9){
    commentData.textContent = '0' + getDay + '.' + '0' + getMonth + '.' + getYear + '/' + '0' + getHour + ':' + getMinute
  }
  if(getMonth <= 9, getDay <= 9, getHour <= 9, getMinute <= 9){
    commentData.textContent = '0' + getDay + '.' + '0' + getMonth + '.' + getYear + '/' + getHour + ':' + '0' + getMinute
  }
})