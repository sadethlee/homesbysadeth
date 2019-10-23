$(function() {
    $(window).resize(function() {
      var originalHeight, newHeight, originalWidth, newWidth, screenHeight, screenWidth;
      originalHeight = 480;
      originalWidth = 852;
      screenHeight = $(window).height();
      screenWidth = $(window).width();
  
      if (originalWidth / screenWidth < originalHeight / screenHeight) {
        newWidth = screenWidth;
        newHeight = screenWidth / originalWidth * originalHeight;
      } else {
        newHeight = screenHeight;
        newWidth = screenHeight / originalHeight * originalWidth;
      }
  
      return $("video").css({
        height: newHeight,
        width: newWidth
      });
    });
    $(window).resize();
  });
