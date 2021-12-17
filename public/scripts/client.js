/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  $('#tweet-form').submit(function (event) {

    event.preventDefault();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: () => {
        $(this)[0].reset();

        loadTweets();

      },
      error: (error) => {
        console.log('this request failed and this was the error', error);
      }
    });



  })


  const renderTweets = function (tweets) {

    $('#tweet').empty();
    tweets.forEach(function (tweet) {
      $('#tweet').append(createTweetElement(tweet))
    })
  }

  const createTweetElement = function (tweet) {
    let $tweet = `
<article class="tweet-placeholder">
<div class="tweet-con-top">
    <div class="tweet-con-top-left">
      <img width="50px" height="50px"
        src=${tweet.user.avatars}>
      <h5 class="username">${tweet.user.name}</h5>
    </div>
    <!--space between-->
    <h5 class="handle">${tweet.user.handle}</h5>
  </div>
  <!--Top Tweet Con END-->


  <div class="tweet-con-mid">
    <h4>${tweet.content.text}</h4>
  </div>


  <div class="tweet-con-bottom">
    <div class="tweet-con-bottom-left">
      <h6 class="time-ago">${timeago.format(tweet.created_at)}</h6>
    </div>
    <!--space between-->
    <div class="tweet-con-bottom-right">
      <i class="fa-solid fa-flag hovered"></i>
      <i class="fa-solid fa-retweet hovered"></i>
      <i class="fa-solid fa-heart hovered"></i>
    </div>
  </div>
    
    `
    // ...
    return $tweet;
  }


  const loadTweets = function () {

    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then(function (results) {
        renderTweets(results);
      })

  }
  loadTweets();

})