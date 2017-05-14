import { Inject } from '@angular/core';
import { isNode } from '../isNode';
declare var Zone : any;

export function waitForApollo(observer) {
    if (isNode()) {
        var isDone, finish, finishSuccess, subscription, intervalId;

        Zone.current.fork({}).run(() => {
            isDone = false;
            finish = () => isDone = true;
            finishSuccess = (val) => {
                if (val) {
                    isDone = true;
                }
            };
            subscription = observer.subscribe(finishSuccess, finish, finish);
            intervalId = setInterval(() => {
                if (isDone) {
                    isDone = false; // Do not re-enter; we do not immediately
                                    // clear the interval but we do not want to
                                    // re-run this cleanup

                    subscription.unsubscribe();

                    // We wrap interval clearing in setTimeout because it seems
                    // to have some magical effect with regards to allowing the
                    // Apollo cache to fill before Universal dehydrates it. This
                    // is likely to do to all of the patching of timeouts and
                    // intervals that Zone.js does, so let's just not question
                    // it too much. If this is taken out, sometimes it will work
                    // as expected but you will notice it doesn't always, maybe
                    // 50% of the time, so tread carefully when refactoring.
                    setTimeout(() => clearInterval(intervalId));
                }
            });
        });
    }

    return observer;
}