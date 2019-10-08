import 'zone.js/dist/zone.js';

async function test1() {
  console.log('before', Zone.current.name);
  const val = await asyncFunction();
  console.log('after', Zone.current.name);
}

function asyncFunction() {
  return new Promise(resolve => setTimeout(() => resolve('some value'), 200));
}

Zone.current.fork({ name: 'myZone' }).run(() => {
  test1();
});
