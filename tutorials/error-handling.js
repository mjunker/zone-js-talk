import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

Zone.current
  .fork({
    onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
      console.log(error.stack);
    }
  })
  .fork(Zone.longStackTraceZoneSpec)
  .run(() => {
    setTimeout(() => {
      setTimeout(() => {
        throw new Error('asdasd');
      }, 200);
    }, 100);
  });
