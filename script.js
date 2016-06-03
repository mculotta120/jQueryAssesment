var num = 0;
$(document).ready (function(){
    $('#generate').on('click', function(){
      num++;
      console.log("generate button clicked...why do I keep typing 'generage'?");

      var newDiv = document.createElement('div');
      newDiv.className = "container";
      newDiv.id = 'row' + num;
      newDiv.style = 'background-color: yellow';

      var changeButton = document.createElement('button');
      changeButton.textContent = 'change';
      changeButton.className = 'change';
      newDiv.appendChild(changeButton);

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.className = 'delete';
      newDiv.appendChild(deleteButton);

      var numOutput = document.createElement('p');
      newDiv.appendChild(numOutput);

      $('body').append(newDiv);
      $('p').text("generate has been clicked: " + num + " times.");

    });

    $(document).on('click', '.delete', function(){
      console.log("delete clicked.");
      num--;
      $(this).parent().remove();
    });

    $(document).on('click', '.change', function(){
      console.log("change clicked");
      var parent= $(this).parent();
      var parentClass = parent.attr('class');
      if (parentClass == 'red'){
        parent.removeClass().addClass('yellow');
        parent.css({'background-color':'yellow'});
      }
      else{
        parent.removeClass().addClass('red');
        parent.css({'background-color':'red'});
      }
    });
});
