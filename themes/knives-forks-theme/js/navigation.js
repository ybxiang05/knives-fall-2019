/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function() {
  let container, button, menu, links, i, len;

  container = document.getElementById('site-navigation');
  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];
  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0];

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function() {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName('a');

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    let self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  (function(container) {
    let touchStartFn,
      i,
      parentLink = container.querySelectorAll(
        '.menu-item-has-children > a, .page_item_has_children > a'
      );

    if ('ontouchstart' in window) {
      touchStartFn = function(e) {
        let menuItem = this.parentNode,
          i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();

(function($) {
  //************DECLARATIONS and INSTANCES here */
  let $userWidth = document.documentElement.clientWidth;
  let thePage = getTerms(location.pathname);
  let scrollIndex = 0;
  let prevIndex = 0;
  let tmpBool = false;

  function getTerms(pathname) {
    if (window.location.protocol === 'https:') {
      pathname = pathname.replace('/', '');
    } else {
      pathname = pathname.replace('/kf/', '');
      pathname = pathname.replace('/', '');
    }
    return pathname;
  }

  if (thePage == 'apply-to-pitch' || thePage == 'become-investor') {
    return;
  }
  if ($userWidth > 500) {
    $(window).on('scroll', function() {
      // console.clear();
      scrollIndex = $(document).scrollTop();
      // console.log(scrollIndex);
      if (scrollIndex > 100 && scrollIndex < 130) {
        tmpBool = true;
        prevIndex = scrollIndex;
        // console.log('outside nav menu HEIGHT');
      } else if (scrollIndex < 100) {
        prevIndex = 0;
        tmpBool = false;
        // console.log('back to DEFAULT');
        return;
      }

      if (scrollIndex > prevIndex) {
        if (tmpBool) {
          // console.log(scrollIndex + ' going DOWN! ' + prevIndex);
          $('.main-navigation').fadeOut('fast');
        }
        tmpBool = false;
        prevIndex = scrollIndex;
      } else if (scrollIndex <= prevIndex) {
        if (!tmpBool) {
          // console.log(scrollIndex + ' going UP! ' + prevIndex);
          $('.main-navigation').fadeIn('fast');
        }
        tmpBool = true;
        prevIndex = scrollIndex;
      } else {
        tmpBool = false;
        prevIndex = scrollIndex;
      }
    });
  }
})(jQuery);
