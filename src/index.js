const events = {};

function on(name, ctx, fn) {
    if (typeof fn != "function") {
        console.error('event fn must be a function')
        return
    }
    const tuple = {ctx: ctx, fn: fn};
    // var tuple = [ctx, fn];
    const callbacks = events[name];
    console.log(tuple)
    if (Array.isArray(callbacks)) {
        callbacks.push(tuple);
    } else {
        events[name] = [tuple];
    }
    console.log(events)
}

function off(name, ctx) {
    const callbacks = events[name];
    if (Array.isArray(callbacks)) {
        events[name] = callbacks.filter((tuple) => {
            // return tuple[0] != ctx;
            return tuple.ctx != ctx;
        });
    }
}

function emit(name) {
    let callbacks = events[name];
    let args;
    if (Array.isArray(callbacks)) {
        args = [].slice.call(arguments, 1)
        callbacks.map((tuple) => {
            // var self = tuple[0];
            // var callback = tuple[1];
            // callback.call(self, args);
            // const ctx = tuple[0];
            // const callback = tuple[1];
            // callback.call(ctx, data);
            console.log(tuple, args)
            tuple.fn.call(tuple.ctx, args)
        });
    }
}

const _on = on;
export { _on as on };
const _off = off;
export { _off as off };
const _emit = emit;
export { _emit as emit };
