type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer = null
    return function (...args) {
        if (timer != null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
