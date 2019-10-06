import 'zone.js/dist/zone';
import 'zone.js/dist/task-tracking';
import 'zone.js/dist/long-stack-trace-zone';

Zone.current
  .fork({
    onHandleError: function(
      parentZoneDelegate,
      currentZone,
      targetZone,
      error
    ) {
      console.log(error.stack);
    }
  })
  .fork(Zone.longStackTraceZoneSpec)
  .fork(Zone.TaskTrackingZoneSpec)
  .run(() => {
    setTimeout(() => {});
    new Promise(resolve => resolve(true)).then();
    setTimeout(() => {
      setTimeout(() => {
        throw new Error('asdasd');
      });
    });

    Zone.current.get('TaskTrackingZone'); // ?
  });
