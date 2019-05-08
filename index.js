var OSinfo = require('./modules/OSinfo');


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();

    //console.log(process.env.LANG);
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'node version':
                process.stdout.write(' Node version: ' + process.version);
                break;
            case 'system lang':
                process.stdout.write(' System language: ' + process.env.LANG + ' ');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});

