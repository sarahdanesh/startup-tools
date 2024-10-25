// startup.js
// A lightweight JavaScript library for startups with common utility functions
// License: MIT
// Author: [Your Name or Your Startup Name]
// Version: 1.0.0

(function (global) {
    // Define a startup namespace to avoid polluting the global scope
    const startup = {};

    // ======================
    // Core Utility Functions
    // ======================

    // 1. General helper to check data types
    startup.isType = function (obj, type) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type.toLowerCase();
    };

    // 2. Deep clone an object
    startup.deepClone = function (obj) {
        if (!startup.isType(obj, 'object')) return obj;
        return JSON.parse(JSON.stringify(obj));
    };

    // 3. Generate a unique ID (UUID v4)
    startup.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    // 4. Throttling function for performance optimization
    startup.throttle = function (func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    // 5. Debouncing function for performance optimization
    startup.debounce = function (func, delay) {
        let timer;
        return function () {
            const args = arguments;
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // ======================
    // DOM Manipulation
    // ======================

    // 6. Simple DOM selector like jQuery's $
    startup.$ = function (selector) {
        return document.querySelector(selector);
    };

    // 7. Add event listener utility
    startup.on = function (element, event, handler) {
        if (element && event && handler) {
            element.addEventListener(event, handler);
        }
    };

    // 8. Remove event listener utility
    startup.off = function (element, event, handler) {
        if (element && event && handler) {
            element.removeEventListener(event, handler);
        }
    };

    // 9. Set multiple CSS styles on an element
    startup.setStyles = function (element, styles) {
        if (element && startup.isType(styles, 'object')) {
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    element.style[property] = styles[property];
                }
            }
        }
    };

    // ======================
    // AJAX and Fetch
    // ======================

    // 10. Basic GET request using Fetch API
    startup.httpGet = async function (url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch GET Error:', error);
            throw error;
        }
    };

    // 11. Basic POST request using Fetch API
    startup.httpPost = async function (url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch POST Error:', error);
            throw error;
        }
    };

    // ======================
    // Storage Utilities
    // ======================

    // 12. Set a value in local storage
    startup.setLocalStorage = function (key, value) {
        if (key) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    // 13. Get a value from local storage
    startup.getLocalStorage = function (key) {
        if (key) {
            return JSON.parse(localStorage.getItem(key));
        }
        return null;
    };

    // 14. Remove a value from local storage
    startup.removeLocalStorage = function (key) {
        if (key) {
            localStorage.removeItem(key);
        }
    };

    // ======================
    // Form Utilities
    // ======================

    // 15. Serialize form data into an object
    startup.serializeForm = function (form) {
        if (!form || form.nodeName !== "FORM") return {};
        const obj = {};
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i];
            if (element.name && !element.disabled && element.type !== 'file') {
                obj[element.name] = element.value;
            }
        }
        return obj;
    };

    // ======================
    // Initialization & Export
    // ======================

    // Expose startup to the global object
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = startup;
    } else {
        global.startup = startup;
    }
})(this);
