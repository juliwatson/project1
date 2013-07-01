
    var ToDo = ['Do homework', 'Feed cats', 'Call mom', 'Go to the grocery store', 'Clean up'];
    
    document.write('<ul>');

        for(var i = 0; i < ToDo.length; i++) {
        document.write('<li>' + ToDo[i] + '</li>');
        }

    document.write('</ul>');

