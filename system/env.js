// export myName=production  linux, unix, macos  echo $myName
// set myName=production     windows             echo %myName%
// $env:myName="production"  powerShell          echo %myName%

let server = process.env.SERVER;

console.log(server);

if (server === 'production') {
    console.log('je suis sur le server de production')
}
if (server === 'development') {
    console.log('mot de passe:', '1234')
    console.log('je suis sur le server de development')
}

process.exit(1);
console.log('process done');