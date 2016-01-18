document.addEventListener('DOMContentLoaded', function()
{
  window.onscroll = function()
  {
    var s = window.scrollY;
    var h = document.getElementById('header').offsetHeight;
    var n = document.getElementById('navbar');

    if(s < h)
    {
       n.style.top = (h-s).toString() + 'px';
    }
    else
    {
      n.style.top = '0px';
    }
  }
});
