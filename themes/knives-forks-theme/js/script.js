(function ($) {
    $(function () {
        //***********instance and declarations */
        const $userWidth = document.documentElement.clientWidth;
        // click the hamburger menu
        // VICTOR'S VARIABLES
        const burger = $('#hamburger');
        const mobileMenu = $('.mobile-menu');
        const hiddenMenu = $('.hidden-menu');
        const cross = $('#cross');
        const hidCross = $('#hid-cross');
        const pendInvestment = $(
            '<li><a href="#investment">Our Investment</a></li>'
        );
        const navHiddenMenu = $('#hidden-menu');
        const investor = $('.menu-item-201');
        // END OF VICTOR'S VARIABLES


        // VICTOR'S WORK

        // add .btn to menu item
        investor.addClass('btn');
        // create a new list item for the hidden menu and link to our investments
        // when document is ready
        // click the hamburger menu
        // closing menu
        // opens up & display menu items
        burger.click(function () {
            mobileMenu.removeClass('hide');
            hiddenMenu.removeClass('hide');
        });

        cross.click(function () {
            mobileMenu.addClass('hide');
        });
        hidCross.click(function () {
            hiddenMenu.addClass('hide');
        });
        // create new list item after <li> events
        // const investor = $('.menu-item-181') //staging
        // pendInvestment.insertAfter('.menu-item-45'); //local
        pendInvestment.insertAfter('.menu-item-189'); //staging

        navHiddenMenu.prepend('<li><a href="#investment">Our Investment</a></li>');
        //====================

        //END OF  VICTOR'S WORK

        // ===================


        const thePage = getTerms(window.location.pathname);

        //implement styling and element's position
        if ($userWidth <= 499) {
            //**********************************for MOBILE
            // $('entry-content  ul  li:last-child()').append($('.how-btn'));
            $('.how-btn').appendTo('.steps-list li:last-child()');
            $('.how-img').appendTo('.steps-list li:last-child()');
        }
        checkInputs('#gform_page_' + gFormId + '_' + gFormCurrentPage);
      }
    );

    $.each(
      $(gField).find(
        'input',
        gField + ' input:not(.button), ' + gField + ' textarea',
        function() {
          if ($(this).val() !== '') {
            $(this).addClass('filled');
          }
          checkInputs('#gform_page_' + gFormId + '_' + gFormCurrentPage);
        }
      )
    );

    // $(document).bind('gform_post_render', function(
    //   event,
    //   form_id,
    //   current_page
    // ) {
    //   console.log('gform loading?');
    //   // code to be trigger when next/previous page is loaded
    //   // const $form = $( '.gform_page_' + form_id + '_' + current_page );
    //   console.log('.gform_page_' + form_id + '_' + current_page);
    // });

    // $.each($('.gform_page'), function(index, value) {
    //   const group = value;
    //   const $inputs = $(this).find(`input[type='text']`);
    //   const $inputsArea = $(this).find(`textarea`);

    //   //console.log('inputs', $inputs.length);
    //   //console.log('textareas', $inputsArea.length);

    //   $inputs.on('blur', function() {
    //     //console.log('keyup');
    //     if ($(this).val() !== '') {
    //       $(this).addClass('filled');
    //       //console.log('filled');
    //     } else {
    //       $(this).removeClass('filled');
    //     }
    //     checkInputs();
    //   });

    //   $inputsArea.on('blur', function() {
    //     //console.log('keyup');
    //     if ($(this).val() !== '') {
    //       $(this).addClass('filled');
    //       //console.log('filled');
    //     } else {
    //       $(this).removeClass('filled');
    //     }
    //     checkInputs();
    //   });
    // });

    function checkInputs(group) {
      const $inputs = $(group).find('input:not(.button)');
      const $inputsArea = $(this).find('textarea');
      console.log($inputs.length);
      console.log($(group).find('.filled').length);

      console.log($(group).find('.filled').length);
      console.log($inputsArea.length);
      if (
        $(group).find('.filled').length === $inputs.length &&
        $inputs.length > 0
      ) {
        console.log('all inputs in group filled');
        $(group)
          .removeClass('icon-default')
          .addClass('icon-complete');
      } else if (
        $(group).find('.filled').length === $inputsArea.length &&
        $inputsArea.length > 0
      ) {
        console.log('textfields filled');
        $(group)
          .removeClass('icon-default')
          .addClass('icon-complete');
      } else {
        $(group).removeClass('icon-complete');
      }
    }
    //work in progress for looping through each make-a-pitch section

    //anvit
    // for (let i = 0; i < myValidation.length; i++) {
    //     const element = myValidation[i];
    //     $(element.className + ' input[type="text"]').change(element, fn);
  }); //when document is ready
})(jQuery);
