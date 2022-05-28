
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function get_root_for_style(node) {
        if (!node)
            return document;
        const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        if (root && root.host) {
            return root;
        }
        return node.ownerDocument;
    }
    function append_empty_stylesheet(node) {
        const style_element = element('style');
        append_stylesheet(get_root_for_style(node), style_element);
        return style_element.sheet;
    }
    function append_stylesheet(node, style) {
        append(node.head || node, style);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    // unfortunately this can't be a constant as that wouldn't be tree-shakeable
    // so we cache the result instead
    let crossorigin;
    function is_crossorigin() {
        if (crossorigin === undefined) {
            crossorigin = false;
            try {
                if (typeof window !== 'undefined' && window.parent) {
                    void window.parent.document;
                }
            }
            catch (error) {
                crossorigin = true;
            }
        }
        return crossorigin;
    }
    function add_resize_listener(node, fn) {
        const computed_style = getComputedStyle(node);
        if (computed_style.position === 'static') {
            node.style.position = 'relative';
        }
        const iframe = element('iframe');
        iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
            'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
        iframe.setAttribute('aria-hidden', 'true');
        iframe.tabIndex = -1;
        const crossorigin = is_crossorigin();
        let unsubscribe;
        if (crossorigin) {
            iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
            unsubscribe = listen(window, 'message', (event) => {
                if (event.source === iframe.contentWindow)
                    fn();
            });
        }
        else {
            iframe.src = 'about:blank';
            iframe.onload = () => {
                unsubscribe = listen(iframe.contentWindow, 'resize', fn);
            };
        }
        append(node, iframe);
        return () => {
            if (crossorigin) {
                unsubscribe();
            }
            else if (unsubscribe && iframe.contentWindow) {
                unsubscribe();
            }
            detach(iframe);
        };
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    // we need to store the information for multiple documents because a Svelte application could also contain iframes
    // https://github.com/sveltejs/svelte/issues/3624
    const managed_styles = new Map();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_style_information(doc, node) {
        const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
        managed_styles.set(doc, info);
        return info;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = get_root_for_style(node);
        const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
        if (!rules[name]) {
            rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            managed_styles.forEach(info => {
                const { stylesheet } = info;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                info.rules = {};
            });
            managed_styles.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail, { cancelable = false } = {}) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail, { cancelable });
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
                return !event.defaultPrevented;
            }
            return true;
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_bidirectional_transition(node, fn, params, intro) {
        let config = fn(node, params);
        let t = intro ? 0 : 1;
        let running_program = null;
        let pending_program = null;
        let animation_name = null;
        function clear_animation() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function init(program, duration) {
            const d = (program.b - t);
            duration *= Math.abs(d);
            return {
                a: t,
                b: program.b,
                d,
                duration,
                start: program.start,
                end: program.start + duration,
                group: program.group
            };
        }
        function go(b) {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            const program = {
                start: now() + delay,
                b
            };
            if (!b) {
                // @ts-ignore todo: improve typings
                program.group = outros;
                outros.r += 1;
            }
            if (running_program || pending_program) {
                pending_program = program;
            }
            else {
                // if this is an intro, and there's a delay, we need to do
                // an initial tick and/or apply CSS animation immediately
                if (css) {
                    clear_animation();
                    animation_name = create_rule(node, t, b, duration, delay, easing, css);
                }
                if (b)
                    tick(0, 1);
                running_program = init(program, duration);
                add_render_callback(() => dispatch(node, b, 'start'));
                loop(now => {
                    if (pending_program && now > pending_program.start) {
                        running_program = init(pending_program, duration);
                        pending_program = null;
                        dispatch(node, running_program.b, 'start');
                        if (css) {
                            clear_animation();
                            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                        }
                    }
                    if (running_program) {
                        if (now >= running_program.end) {
                            tick(t = running_program.b, 1 - t);
                            dispatch(node, running_program.b, 'end');
                            if (!pending_program) {
                                // we're done
                                if (running_program.b) {
                                    // intro — we can tidy up immediately
                                    clear_animation();
                                }
                                else {
                                    // outro — needs to be coordinated
                                    if (!--running_program.group.r)
                                        run_all(running_program.group.c);
                                }
                            }
                            running_program = null;
                        }
                        else if (now >= running_program.start) {
                            const p = now - running_program.start;
                            t = running_program.a + running_program.d * easing(p / running_program.duration);
                            tick(t, 1 - t);
                        }
                    }
                    return !!(running_program || pending_program);
                });
            }
        }
        return {
            run(b) {
                if (is_function(config)) {
                    wait().then(() => {
                        // @ts-ignore
                        config = config();
                        go(b);
                    });
                }
                else {
                    go(b);
                }
            },
            end() {
                clear_animation();
                running_program = pending_program = null;
            }
        };
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.48.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const mobile = writable(false);
    const openModal = writable(false);

    /* src/components/Section.svelte generated by Svelte v3.48.0 */
    const file$8 = "src/components/Section.svelte";

    function create_fragment$8(ctx) {
    	let span;
    	let a;
    	let a_class_value;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			span = element("span");
    			a = element("a");
    			if (default_slot) default_slot.c();
    			attr_dev(a, "class", a_class_value = "" + (null_to_empty(/*mobileValue*/ ctx[1] ? "mobile" : "not-mobile") + " svelte-1uvri9t"));
    			attr_dev(a, "href", /*segment*/ ctx[0]);
    			add_location(a, file$8, 21, 4, 505);
    			add_location(span, file$8, 20, 0, 494);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, a);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(a, "click", prevent_default(/*handleClick*/ ctx[2]), false, true, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[3],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
    						null
    					);
    				}
    			}

    			if (!current || dirty & /*mobileValue*/ 2 && a_class_value !== (a_class_value = "" + (null_to_empty(/*mobileValue*/ ctx[1] ? "mobile" : "not-mobile") + " svelte-1uvri9t"))) {
    				attr_dev(a, "class", a_class_value);
    			}

    			if (!current || dirty & /*segment*/ 1) {
    				attr_dev(a, "href", /*segment*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Section', slots, ['default']);
    	const dispatch = createEventDispatcher();
    	let { segment } = $$props;
    	let mobileValue;

    	mobile.subscribe(value => {
    		$$invalidate(1, mobileValue = value);
    	});

    	function handleClick({ target }) {
    		const ref = target.getAttribute("href");

    		dispatch("click", {
    			section: document.querySelector(ref),
    			ref
    		});

    		if (mobileValue) {
    			openModal.set(false);
    		}
    	}

    	const writable_props = ['segment'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Section> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('segment' in $$props) $$invalidate(0, segment = $$props.segment);
    		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		mobile,
    		openModal,
    		createEventDispatcher,
    		dispatch,
    		segment,
    		mobileValue,
    		handleClick
    	});

    	$$self.$inject_state = $$props => {
    		if ('segment' in $$props) $$invalidate(0, segment = $$props.segment);
    		if ('mobileValue' in $$props) $$invalidate(1, mobileValue = $$props.mobileValue);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [segment, mobileValue, handleClick, $$scope, slots];
    }

    class Section extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, { segment: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Section",
    			options,
    			id: create_fragment$8.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*segment*/ ctx[0] === undefined && !('segment' in props)) {
    			console.warn("<Section> was created without expected prop 'segment'");
    		}
    	}

    	get segment() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set segment(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Hamburger.svelte generated by Svelte v3.48.0 */

    const file$7 = "src/components/Hamburger.svelte";

    function create_fragment$7(ctx) {
    	let button;
    	let svg;
    	let path0;
    	let path1;
    	let path2;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			path2 = svg_element("path");
    			attr_dev(path0, "class", "top svelte-1ks11a7");
    			attr_dev(path0, "d", "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20");
    			add_location(path0, file$7, 17, 8, 400);
    			attr_dev(path1, "class", "middle svelte-1ks11a7");
    			attr_dev(path1, "d", "m 30,50 h 40");
    			add_location(path1, file$7, 21, 8, 567);
    			attr_dev(path2, "class", "bottom svelte-1ks11a7");
    			attr_dev(path2, "d", "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20");
    			add_location(path2, file$7, 22, 8, 616);
    			attr_dev(svg, "viewBox", "0 0 100 100");
    			attr_dev(svg, "fill", "none");
    			attr_dev(svg, "stroke", "currentColor");
    			attr_dev(svg, "stroke-width", "5");
    			attr_dev(svg, "width", /*width*/ ctx[3]);
    			attr_dev(svg, "class", "svelte-1ks11a7");
    			toggle_class(svg, "open", /*open*/ ctx[0]);
    			add_location(svg, file$7, 9, 4, 241);
    			attr_dev(button, "aria-expanded", /*open*/ ctx[0]);
    			attr_dev(button, "aria-label", /*ariaLabel*/ ctx[2]);
    			attr_dev(button, "class", "svelte-1ks11a7");
    			add_location(button, file$7, 8, 0, 165);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, svg);
    			append_dev(svg, path0);
    			append_dev(svg, path1);
    			append_dev(svg, path2);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*onClick*/ ctx[1])) /*onClick*/ ctx[1].apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			if (dirty & /*width*/ 8) {
    				attr_dev(svg, "width", /*width*/ ctx[3]);
    			}

    			if (dirty & /*open*/ 1) {
    				toggle_class(svg, "open", /*open*/ ctx[0]);
    			}

    			if (dirty & /*open*/ 1) {
    				attr_dev(button, "aria-expanded", /*open*/ ctx[0]);
    			}

    			if (dirty & /*ariaLabel*/ 4) {
    				attr_dev(button, "aria-label", /*ariaLabel*/ ctx[2]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Hamburger', slots, []);
    	let { open = false } = $$props;

    	let { onClick = () => {
    		$$invalidate(0, open = !open);
    	} } = $$props;

    	let { ariaLabel = "toggle menu" } = $$props;
    	let { width = 80 } = $$props;
    	const writable_props = ['open', 'onClick', 'ariaLabel', 'width'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Hamburger> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('open' in $$props) $$invalidate(0, open = $$props.open);
    		if ('onClick' in $$props) $$invalidate(1, onClick = $$props.onClick);
    		if ('ariaLabel' in $$props) $$invalidate(2, ariaLabel = $$props.ariaLabel);
    		if ('width' in $$props) $$invalidate(3, width = $$props.width);
    	};

    	$$self.$capture_state = () => ({ open, onClick, ariaLabel, width });

    	$$self.$inject_state = $$props => {
    		if ('open' in $$props) $$invalidate(0, open = $$props.open);
    		if ('onClick' in $$props) $$invalidate(1, onClick = $$props.onClick);
    		if ('ariaLabel' in $$props) $$invalidate(2, ariaLabel = $$props.ariaLabel);
    		if ('width' in $$props) $$invalidate(3, width = $$props.width);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [open, onClick, ariaLabel, width];
    }

    class Hamburger extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
    			open: 0,
    			onClick: 1,
    			ariaLabel: 2,
    			width: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Hamburger",
    			options,
    			id: create_fragment$7.name
    		});
    	}

    	get open() {
    		throw new Error("<Hamburger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set open(value) {
    		throw new Error("<Hamburger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get onClick() {
    		throw new Error("<Hamburger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set onClick(value) {
    		throw new Error("<Hamburger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get ariaLabel() {
    		throw new Error("<Hamburger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ariaLabel(value) {
    		throw new Error("<Hamburger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get width() {
    		throw new Error("<Hamburger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set width(value) {
    		throw new Error("<Hamburger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity);
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
        };
    }

    /* src/components/Topbar.svelte generated by Svelte v3.48.0 */
    const file$6 = "src/components/Topbar.svelte";
    const get_center_slot_changes_1 = dirty => ({});
    const get_center_slot_context_1 = ctx => ({});
    const get_center_slot_changes = dirty => ({});
    const get_center_slot_context = ctx => ({});
    const get_left_slot_changes = dirty => ({});
    const get_left_slot_context = ctx => ({ class: "home" });

    // (26:8) {:else}
    function create_else_block$1(ctx) {
    	let div;
    	let current;
    	const center_slot_template = /*#slots*/ ctx[5].center;
    	const center_slot = create_slot(center_slot_template, ctx, /*$$scope*/ ctx[4], get_center_slot_context);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (center_slot) center_slot.c();
    			attr_dev(div, "class", "horizontal");
    			add_location(div, file$6, 26, 12, 648);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (center_slot) {
    				center_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (center_slot) {
    				if (center_slot.p && (!current || dirty & /*$$scope*/ 16)) {
    					update_slot_base(
    						center_slot,
    						center_slot_template,
    						ctx,
    						/*$$scope*/ ctx[4],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
    						: get_slot_changes(center_slot_template, /*$$scope*/ ctx[4], dirty, get_center_slot_changes),
    						get_center_slot_context
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(center_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(center_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (center_slot) center_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(26:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (24:8) {#if mobileValue}
    function create_if_block_1$1(ctx) {
    	let div;
    	let hamburger;
    	let current;

    	hamburger = new Hamburger({
    			props: {
    				open: /*open*/ ctx[1],
    				onClick: /*onClick*/ ctx[3],
    				width: "30"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(hamburger.$$.fragment);
    			attr_dev(div, "class", "right svelte-1a3ag97");
    			add_location(div, file$6, 24, 12, 553);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(hamburger, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const hamburger_changes = {};
    			if (dirty & /*open*/ 2) hamburger_changes.open = /*open*/ ctx[1];
    			hamburger.$set(hamburger_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(hamburger.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(hamburger.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(hamburger);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(24:8) {#if mobileValue}",
    		ctx
    	});

    	return block;
    }

    // (32:4) {#if open}
    function create_if_block$1(ctx) {
    	let div;
    	let div_transition;
    	let current;
    	const center_slot_template = /*#slots*/ ctx[5].center;
    	const center_slot = create_slot(center_slot_template, ctx, /*$$scope*/ ctx[4], get_center_slot_context_1);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (center_slot) center_slot.c();
    			attr_dev(div, "class", "vertical");
    			add_location(div, file$6, 32, 8, 779);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (center_slot) {
    				center_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (center_slot) {
    				if (center_slot.p && (!current || dirty & /*$$scope*/ 16)) {
    					update_slot_base(
    						center_slot,
    						center_slot_template,
    						ctx,
    						/*$$scope*/ ctx[4],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
    						: get_slot_changes(center_slot_template, /*$$scope*/ ctx[4], dirty, get_center_slot_changes_1),
    						get_center_slot_context_1
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(center_slot, local);

    			add_render_callback(() => {
    				if (!div_transition) div_transition = create_bidirectional_transition(div, fly, { y: -100, duration: 400 }, true);
    				div_transition.run(1);
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(center_slot, local);
    			if (!div_transition) div_transition = create_bidirectional_transition(div, fly, { y: -100, duration: 400 }, false);
    			div_transition.run(0);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (center_slot) center_slot.d(detaching);
    			if (detaching && div_transition) div_transition.end();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(32:4) {#if open}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let nav;
    	let div;
    	let t0;
    	let current_block_type_index;
    	let if_block0;
    	let t1;
    	let current;
    	const left_slot_template = /*#slots*/ ctx[5].left;
    	const left_slot = create_slot(left_slot_template, ctx, /*$$scope*/ ctx[4], get_left_slot_context);
    	const if_block_creators = [create_if_block_1$1, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*mobileValue*/ ctx[2]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = /*open*/ ctx[1] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div = element("div");
    			if (left_slot) left_slot.c();
    			t0 = space();
    			if_block0.c();
    			t1 = space();
    			if (if_block1) if_block1.c();
    			attr_dev(div, "class", "bar svelte-1a3ag97");
    			add_location(div, file$6, 21, 4, 455);
    			set_style(nav, "background-color", /*color*/ ctx[0]);
    			attr_dev(nav, "class", "svelte-1a3ag97");
    			add_location(nav, file$6, 20, 0, 411);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div);

    			if (left_slot) {
    				left_slot.m(div, null);
    			}

    			append_dev(div, t0);
    			if_blocks[current_block_type_index].m(div, null);
    			append_dev(nav, t1);
    			if (if_block1) if_block1.m(nav, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (left_slot) {
    				if (left_slot.p && (!current || dirty & /*$$scope*/ 16)) {
    					update_slot_base(
    						left_slot,
    						left_slot_template,
    						ctx,
    						/*$$scope*/ ctx[4],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
    						: get_slot_changes(left_slot_template, /*$$scope*/ ctx[4], dirty, get_left_slot_changes),
    						get_left_slot_context
    					);
    				}
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				} else {
    					if_block0.p(ctx, dirty);
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(div, null);
    			}

    			if (/*open*/ ctx[1]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*open*/ 2) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block$1(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(nav, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*color*/ 1) {
    				set_style(nav, "background-color", /*color*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(left_slot, local);
    			transition_in(if_block0);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(left_slot, local);
    			transition_out(if_block0);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    			if (left_slot) left_slot.d(detaching);
    			if_blocks[current_block_type_index].d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Topbar', slots, ['left','center']);
    	let { color } = $$props;
    	let x;
    	let open;

    	let onClick = () => {
    		$$invalidate(1, open = !open);
    	};

    	let mobileValue;

    	mobile.subscribe(value => {
    		$$invalidate(2, mobileValue = value);
    	});

    	openModal.subscribe(value => {
    		$$invalidate(1, open = value);
    	});

    	const writable_props = ['color'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Topbar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('color' in $$props) $$invalidate(0, color = $$props.color);
    		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Hamburger,
    		fly,
    		mobile,
    		openModal,
    		color,
    		x,
    		open,
    		onClick,
    		mobileValue
    	});

    	$$self.$inject_state = $$props => {
    		if ('color' in $$props) $$invalidate(0, color = $$props.color);
    		if ('x' in $$props) x = $$props.x;
    		if ('open' in $$props) $$invalidate(1, open = $$props.open);
    		if ('onClick' in $$props) $$invalidate(3, onClick = $$props.onClick);
    		if ('mobileValue' in $$props) $$invalidate(2, mobileValue = $$props.mobileValue);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*open*/ 2) {
    			openModal.set(open);
    		}
    	};

    	return [color, open, mobileValue, onClick, $$scope, slots];
    }

    class Topbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { color: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Topbar",
    			options,
    			id: create_fragment$6.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*color*/ ctx[0] === undefined && !('color' in props)) {
    			console.warn("<Topbar> was created without expected prop 'color'");
    		}
    	}

    	get color() {
    		throw new Error("<Topbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Topbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Card.svelte generated by Svelte v3.48.0 */

    const file$5 = "src/components/Card.svelte";

    function create_fragment$5(ctx) {
    	let link_1;
    	let t0;
    	let div2;
    	let div1;
    	let h2;
    	let t1;
    	let t2;
    	let div0;
    	let a;
    	let t3;
    	let i;
    	let t4;
    	let p0;
    	let t5;
    	let hr;
    	let t6;
    	let p1;

    	const block = {
    		c: function create() {
    			link_1 = element("link");
    			t0 = space();
    			div2 = element("div");
    			div1 = element("div");
    			h2 = element("h2");
    			t1 = text(/*title*/ ctx[0]);
    			t2 = space();
    			div0 = element("div");
    			a = element("a");
    			t3 = text("Repo ");
    			i = element("i");
    			t4 = space();
    			p0 = element("p");
    			t5 = space();
    			hr = element("hr");
    			t6 = space();
    			p1 = element("p");
    			attr_dev(link_1, "rel", "stylesheet");
    			attr_dev(link_1, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    			add_location(link_1, file$5, 8, 4, 149);
    			attr_dev(h2, "class", "title svelte-1vw57mp");
    			add_location(h2, file$5, 16, 8, 378);
    			attr_dev(i, "class", "fa fa-github");
    			add_location(i, file$5, 18, 47, 483);
    			attr_dev(a, "href", /*link*/ ctx[2]);
    			attr_dev(a, "class", "button svelte-1vw57mp");
    			add_location(a, file$5, 18, 12, 448);
    			attr_dev(div0, "class", "repo svelte-1vw57mp");
    			add_location(div0, file$5, 17, 8, 417);
    			attr_dev(div1, "class", "top svelte-1vw57mp");
    			add_location(div1, file$5, 15, 4, 352);
    			attr_dev(p0, "class", "description");
    			add_location(p0, file$5, 21, 4, 544);
    			attr_dev(hr, "class", "separator svelte-1vw57mp");
    			add_location(hr, file$5, 22, 4, 595);
    			attr_dev(p1, "class", "contribution");
    			add_location(p1, file$5, 23, 4, 624);
    			attr_dev(div2, "class", "box svelte-1vw57mp");
    			set_style(div2, "--top-color", /*color*/ ctx[4]);
    			add_location(div2, file$5, 14, 0, 301);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link_1);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, h2);
    			append_dev(h2, t1);
    			append_dev(div1, t2);
    			append_dev(div1, div0);
    			append_dev(div0, a);
    			append_dev(a, t3);
    			append_dev(a, i);
    			append_dev(div2, t4);
    			append_dev(div2, p0);
    			p0.innerHTML = /*description*/ ctx[1];
    			append_dev(div2, t5);
    			append_dev(div2, hr);
    			append_dev(div2, t6);
    			append_dev(div2, p1);
    			p1.innerHTML = /*contribution*/ ctx[3];
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*title*/ 1) set_data_dev(t1, /*title*/ ctx[0]);

    			if (dirty & /*link*/ 4) {
    				attr_dev(a, "href", /*link*/ ctx[2]);
    			}

    			if (dirty & /*description*/ 2) p0.innerHTML = /*description*/ ctx[1];			if (dirty & /*contribution*/ 8) p1.innerHTML = /*contribution*/ ctx[3];
    			if (dirty & /*color*/ 16) {
    				set_style(div2, "--top-color", /*color*/ ctx[4]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			detach_dev(link_1);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Card', slots, []);
    	let { title } = $$props;
    	let { description } = $$props;
    	let { link } = $$props;
    	let { contribution } = $$props;
    	let { color } = $$props;
    	const writable_props = ['title', 'description', 'link', 'contribution', 'color'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Card> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('description' in $$props) $$invalidate(1, description = $$props.description);
    		if ('link' in $$props) $$invalidate(2, link = $$props.link);
    		if ('contribution' in $$props) $$invalidate(3, contribution = $$props.contribution);
    		if ('color' in $$props) $$invalidate(4, color = $$props.color);
    	};

    	$$self.$capture_state = () => ({
    		title,
    		description,
    		link,
    		contribution,
    		color
    	});

    	$$self.$inject_state = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('description' in $$props) $$invalidate(1, description = $$props.description);
    		if ('link' in $$props) $$invalidate(2, link = $$props.link);
    		if ('contribution' in $$props) $$invalidate(3, contribution = $$props.contribution);
    		if ('color' in $$props) $$invalidate(4, color = $$props.color);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [title, description, link, contribution, color];
    }

    class Card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			title: 0,
    			description: 1,
    			link: 2,
    			contribution: 3,
    			color: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[0] === undefined && !('title' in props)) {
    			console.warn("<Card> was created without expected prop 'title'");
    		}

    		if (/*description*/ ctx[1] === undefined && !('description' in props)) {
    			console.warn("<Card> was created without expected prop 'description'");
    		}

    		if (/*link*/ ctx[2] === undefined && !('link' in props)) {
    			console.warn("<Card> was created without expected prop 'link'");
    		}

    		if (/*contribution*/ ctx[3] === undefined && !('contribution' in props)) {
    			console.warn("<Card> was created without expected prop 'contribution'");
    		}

    		if (/*color*/ ctx[4] === undefined && !('color' in props)) {
    			console.warn("<Card> was created without expected prop 'color'");
    		}
    	}

    	get title() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get link() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set link(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get contribution() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contribution(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Competence.svelte generated by Svelte v3.48.0 */

    const file$4 = "src/components/Competence.svelte";

    function create_fragment$4(ctx) {
    	let div2;
    	let h3;
    	let t0;
    	let t1;
    	let div1;
    	let div0;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			h3 = element("h3");
    			t0 = text(/*name*/ ctx[0]);
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			attr_dev(h3, "class", "svelte-93ljz6");
    			add_location(h3, file$4, 6, 4, 111);
    			attr_dev(div0, "id", "level");
    			set_style(div0, "width", /*level*/ ctx[1]);
    			set_style(div0, "background-color", /*color*/ ctx[2]);
    			attr_dev(div0, "class", "svelte-93ljz6");
    			add_location(div0, file$4, 8, 8, 162);
    			attr_dev(div1, "id", "progressbar");
    			attr_dev(div1, "class", "svelte-93ljz6");
    			add_location(div1, file$4, 7, 4, 131);
    			attr_dev(div2, "class", "competence svelte-93ljz6");
    			add_location(div2, file$4, 5, 0, 82);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, h3);
    			append_dev(h3, t0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*name*/ 1) set_data_dev(t0, /*name*/ ctx[0]);

    			if (dirty & /*level*/ 2) {
    				set_style(div0, "width", /*level*/ ctx[1]);
    			}

    			if (dirty & /*color*/ 4) {
    				set_style(div0, "background-color", /*color*/ ctx[2]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Competence', slots, []);
    	let { name } = $$props;
    	let { level } = $$props;
    	let { color } = $$props;
    	const writable_props = ['name', 'level', 'color'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Competence> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('level' in $$props) $$invalidate(1, level = $$props.level);
    		if ('color' in $$props) $$invalidate(2, color = $$props.color);
    	};

    	$$self.$capture_state = () => ({ name, level, color });

    	$$self.$inject_state = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('level' in $$props) $$invalidate(1, level = $$props.level);
    		if ('color' in $$props) $$invalidate(2, color = $$props.color);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [name, level, color];
    }

    class Competence extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { name: 0, level: 1, color: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Competence",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*name*/ ctx[0] === undefined && !('name' in props)) {
    			console.warn("<Competence> was created without expected prop 'name'");
    		}

    		if (/*level*/ ctx[1] === undefined && !('level' in props)) {
    			console.warn("<Competence> was created without expected prop 'level'");
    		}

    		if (/*color*/ ctx[2] === undefined && !('color' in props)) {
    			console.warn("<Competence> was created without expected prop 'color'");
    		}
    	}

    	get name() {
    		throw new Error("<Competence>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Competence>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get level() {
    		throw new Error("<Competence>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set level(value) {
    		throw new Error("<Competence>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<Competence>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Competence>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/IconCircle.svelte generated by Svelte v3.48.0 */
    const file$3 = "src/components/IconCircle.svelte";

    function create_fragment$3(ctx) {
    	let link_1;
    	let t;
    	let a;
    	let a_class_value;

    	const block = {
    		c: function create() {
    			link_1 = element("link");
    			t = space();
    			a = element("a");
    			attr_dev(link_1, "rel", "stylesheet");
    			attr_dev(link_1, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    			add_location(link_1, file$3, 10, 1, 205);
    			attr_dev(a, "href", /*link*/ ctx[0]);
    			attr_dev(a, "class", a_class_value = "" + (null_to_empty("fa fa-" + /*name*/ ctx[1]) + " svelte-vuyq9m"));
    			add_location(a, file$3, 17, 0, 386);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link_1);
    			insert_dev(target, t, anchor);
    			insert_dev(target, a, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*link*/ 1) {
    				attr_dev(a, "href", /*link*/ ctx[0]);
    			}

    			if (dirty & /*name*/ 2 && a_class_value !== (a_class_value = "" + (null_to_empty("fa fa-" + /*name*/ ctx[1]) + " svelte-vuyq9m"))) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			detach_dev(link_1);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('IconCircle', slots, []);
    	let { link } = $$props;
    	let { name } = $$props;
    	const writable_props = ['link', 'name'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<IconCircle> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('link' in $$props) $$invalidate(0, link = $$props.link);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    	};

    	$$self.$capture_state = () => ({ link, name });

    	$$self.$inject_state = $$props => {
    		if ('link' in $$props) $$invalidate(0, link = $$props.link);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [link, name];
    }

    class IconCircle extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { link: 0, name: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "IconCircle",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*link*/ ctx[0] === undefined && !('link' in props)) {
    			console.warn("<IconCircle> was created without expected prop 'link'");
    		}

    		if (/*name*/ ctx[1] === undefined && !('name' in props)) {
    			console.warn("<IconCircle> was created without expected prop 'name'");
    		}
    	}

    	get link() {
    		throw new Error("<IconCircle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set link(value) {
    		throw new Error("<IconCircle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get name() {
    		throw new Error("<IconCircle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<IconCircle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/Contact.svelte generated by Svelte v3.48.0 */
    const file$2 = "src/components/Contact.svelte";

    function create_fragment$2(ctx) {
    	let link;
    	let t0;
    	let span;
    	let i;
    	let i_class_value;
    	let t1;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

    	const block = {
    		c: function create() {
    			link = element("link");
    			t0 = space();
    			span = element("span");
    			i = element("i");
    			t1 = space();
    			if (default_slot) default_slot.c();
    			attr_dev(link, "rel", "stylesheet");
    			attr_dev(link, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    			add_location(link, file$2, 9, 1, 188);
    			attr_dev(i, "class", i_class_value = "" + (null_to_empty("fa fa-" + /*icon*/ ctx[0]) + " svelte-vuyq9m"));
    			add_location(i, file$2, 17, 1, 393);
    			attr_dev(span, "class", "contact");
    			add_location(span, file$2, 16, 0, 369);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, span, anchor);
    			append_dev(span, i);
    			append_dev(span, t1);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*icon*/ 1 && i_class_value !== (i_class_value = "" + (null_to_empty("fa fa-" + /*icon*/ ctx[0]) + " svelte-vuyq9m"))) {
    				attr_dev(i, "class", i_class_value);
    			}

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[1],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[1])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null),
    						null
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			detach_dev(link);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Contact', slots, ['default']);
    	let { icon } = $$props;
    	const writable_props = ['icon'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Contact> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('icon' in $$props) $$invalidate(0, icon = $$props.icon);
    		if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ icon });

    	$$self.$inject_state = $$props => {
    		if ('icon' in $$props) $$invalidate(0, icon = $$props.icon);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [icon, $$scope, slots];
    }

    class Contact extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { icon: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Contact",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*icon*/ ctx[0] === undefined && !('icon' in props)) {
    			console.warn("<Contact> was created without expected prop 'icon'");
    		}
    	}

    	get icon() {
    		throw new Error("<Contact>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set icon(value) {
    		throw new Error("<Contact>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/NightSky.svelte generated by Svelte v3.48.0 */
    const file$1 = "src/components/NightSky.svelte";

    function create_fragment$1(ctx) {
    	let canvas_1;

    	const block = {
    		c: function create() {
    			canvas_1 = element("canvas");
    			attr_dev(canvas_1, "width", /*width*/ ctx[0]);
    			attr_dev(canvas_1, "height", /*height*/ ctx[1]);
    			add_location(canvas_1, file$1, 63, 0, 1709);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, canvas_1, anchor);
    			/*canvas_1_binding*/ ctx[3](canvas_1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*width*/ 1) {
    				attr_dev(canvas_1, "width", /*width*/ ctx[0]);
    			}

    			if (dirty & /*height*/ 2) {
    				attr_dev(canvas_1, "height", /*height*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(canvas_1);
    			/*canvas_1_binding*/ ctx[3](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const backgroundColor = "#030318";
    const secondColor = " #3f034f";

    function randomInt(max) {
    	return Math.floor(Math.random() * max);
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('NightSky', slots, []);
    	let { width } = $$props;
    	let { height } = $$props;
    	let canvas;
    	let stars = [];

    	class Star {
    		constructor(xi, yi, spacing) {
    			this.x = xi + randomInt(spacing);
    			this.y = yi + randomInt(spacing);
    			this.r = Math.random();
    		}

    		evolve() {
    			if (this.y === 0) {
    				this.y = height;
    			} else {
    				this.y = this.y - 1;
    			}

    			this.x = this.x + (Math.random() - 0.5) / 4;
    		}
    	}

    	onMount(() => {
    		const ctx = canvas.getContext("2d");
    		let frame = requestAnimationFrame(loop);

    		/*stars = createStars(width, height, 50);*/
    		function loop() {
    			frame = requestAnimationFrame(loop);
    			let grd = ctx.createLinearGradient(0, 0, 0, 2000);
    			grd.addColorStop(0, backgroundColor);
    			grd.addColorStop(1, secondColor);
    			ctx.fillStyle = grd;
    			ctx.fillRect(0, 0, width, height);

    			stars.forEach(function (star) {
    				ctx.beginPath();
    				ctx.fillStyle = "rgb(255, 255, 255)";
    				ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    				ctx.fill();
    				star.evolve();
    			});
    		}

    		return () => {
    			cancelAnimationFrame(frame);
    		};
    	});

    	function createStars(w, h, spacing) {
    		if (w && h) {
    			stars = [];

    			for (let x = 0; x < w; x += spacing) {
    				for (let y = 0; y < h; y += spacing) {
    					stars.push(new Star(x, y, spacing));
    				}
    			}
    		}
    	}

    	const writable_props = ['width', 'height'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<NightSky> was created with unknown prop '${key}'`);
    	});

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			canvas = $$value;
    			$$invalidate(2, canvas);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ('width' in $$props) $$invalidate(0, width = $$props.width);
    		if ('height' in $$props) $$invalidate(1, height = $$props.height);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		width,
    		height,
    		canvas,
    		backgroundColor,
    		secondColor,
    		stars,
    		Star,
    		createStars,
    		randomInt
    	});

    	$$self.$inject_state = $$props => {
    		if ('width' in $$props) $$invalidate(0, width = $$props.width);
    		if ('height' in $$props) $$invalidate(1, height = $$props.height);
    		if ('canvas' in $$props) $$invalidate(2, canvas = $$props.canvas);
    		if ('stars' in $$props) stars = $$props.stars;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*width, height*/ 3) {
    			createStars(width, height, 50);
    		}
    	};

    	return [width, height, canvas, canvas_1_binding];
    }

    class NightSky extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { width: 0, height: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "NightSky",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*width*/ ctx[0] === undefined && !('width' in props)) {
    			console.warn("<NightSky> was created without expected prop 'width'");
    		}

    		if (/*height*/ ctx[1] === undefined && !('height' in props)) {
    			console.warn("<NightSky> was created without expected prop 'height'");
    		}
    	}

    	get width() {
    		throw new Error("<NightSky>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set width(value) {
    		throw new Error("<NightSky>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get height() {
    		throw new Error("<NightSky>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set height(value) {
    		throw new Error("<NightSky>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var home={title:"François Michel",text:"Security engineer intern at  <a href='https://secutix.com' style='color: inherit'>SECUTIX</a>"};var about={title:"About me",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Arcu ac tortor dignissim convallis aenean et tortor at risus. Consequat id porta nibh venenatis cras sed felis eget. Neque volutpat ac tincidunt vitae. Eget mauris pharetra et ultrices neque ornare. Augue mauris augue neque gravida. In nisl nisi scelerisque eu ultrices. Elit duis tristique sollicitudin nibh sit. Consequat nisl vel pretium lectus quam id leo in vitae. Ut sem nulla pharetra diam sit amet nisl suscipit. Nunc sed id semper risus. Amet commodo nulla facilisi nullam vehicula ipsum a. Amet luctus venenatis lectus magna fringilla urna porttitor. Dictum sit amet justo donec enim diam. Accumsan in nisl nisi scelerisque eu. Nunc non blandit massa enim nec dui nunc. In vitae turpis massa sed elementum tempus egestas. Elementum tempus egestas sed sed. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Pretium vulputate sapien nec sagittis aliquam. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Donec massa sapien faucibus et molestie ac. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Libero id faucibus nisl tincidunt eget nullam non nisi est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque. Mauris cursus mattis molestie a iaculis. Tellus at urna condimentum mattis pellentesque. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit."};var projects={title:"Projects",entries:[{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Tweets Sentiment Analysis (NLP)",link:"https://github.com/flmichel/sentiment-classification",description:"Course Project - EPFL - Grade: 5.5/6",contribution:"Built a python Machine Learning classiﬁer performing sentiment analysis on a set of tweets. Achieved 88.2% accuracy, using a pre-trained BERT model combined with multiple pre-processing techniques. Other models were evaluated such as SVM and MLP."},{title:"Proof-of-personhood System",link:"https://github.com/dedis/popstellar",description:"Semester Project - EPFL - Grade: 6/6",contribution:"Prototyped and implemented a highly robust proof-of-presence group communication and voting app for mobile devices at the Decentralized Distributed Systems Laboratory with 9 other students."},{title:"Forest Firefighters",link:"https://github.com/cyberbotics/webots-projects/tree/master/projects/forest_firefighters",description:"Project during a summer internship at <a href='https://cyberbotics.com' >Cyberbotics</a>",contribution:"Implemented a simulation that features a small forest wildfire and a few firefighter robots: a couple of drones and legged robots equipped with cameras."},{title:"Event Platform",link:"https://github.com/flmichel/event-platform-gql",description:"Course Project - ETHZ - Grade: 6/6",contribution:"Designed and implemented a secure event management application using GraphQL Shield and TypeScript."},{title:"Game boy emulator",link:"https://github.com/flmichel/gameboj",description:"Course Project - EPFL - Grade: 5.75/6",contribution:"Develept a Nintendo Game Boy emulator in Java, during the EPFL course “Practice of object-oriented programming”."}]};var skills={title:"Skills",techincal:[{name:"Java",level:"88%"},{name:"Go",level:"88%"},{name:"Python",level:"75%"},{name:"C",level:"55%"}],languages:[{name:"French",level:"100%"},{name:"English",level:"95%"},{name:"German",level:"25%"},{name:"Japanese",level:"20%"}]};var resume={title:"Resume",link:"/resume.pdf"};var footer={title:"Get in touch",social:{title:"Social medias",websites:[{name:"linkedin",link:"https://www.linkedin.com/in/francois-michel/"},{name:"github",link:"https://github.com/flmichel/"},{name:"facebook",link:"https://www.facebook.com/francois.michel.3154"}]},information:{title:"Any question?",phone:"+41 77 485 89 65",address:"Chemin des Vignes 7, 1124 Gollion, Switerland",email:"francois.l.michel@gmail.com"}};var colors={topbar:"rgba(221, 247, 255, 1)",theme:"rgb(47, 122, 218)"};var i = {home:home,about:about,projects:projects,skills:skills,resume:resume,footer:footer,colors:colors};

    /* src/App.svelte generated by Svelte v3.48.0 */

    const { window: window_1 } = globals;
    const file = "src/App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[6] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    function get_each_context_3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[14] = list[i];
    	return child_ctx;
    }

    // (33:3) <Section segment="#home" on:click={jumpToSection}     >
    function create_default_slot_7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("<François />");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(33:3) <Section segment=\\\"#home\\\" on:click={jumpToSection}     >",
    		ctx
    	});

    	return block;
    }

    // (32:2) 
    function create_left_slot(ctx) {
    	let div;
    	let section;
    	let current;

    	section = new Section({
    			props: {
    				segment: "#home",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section.$on("click", jumpToSection);

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(section.$$.fragment);
    			attr_dev(div, "slot", "left");
    			add_location(div, file, 31, 2, 965);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(section, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const section_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				section_changes.$$scope = { dirty, ctx };
    			}

    			section.$set(section_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(section.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(section.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_left_slot.name,
    		type: "slot",
    		source: "(32:2) ",
    		ctx
    	});

    	return block;
    }

    // (38:3) <Section segment="#about" on:click={jumpToSection}     >
    function create_default_slot_6(ctx) {
    	let t_value = i.about.title + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(38:3) <Section segment=\\\"#about\\\" on:click={jumpToSection}     >",
    		ctx
    	});

    	return block;
    }

    // (41:3) <Section segment="#projects" on:click={jumpToSection}     >
    function create_default_slot_5(ctx) {
    	let t_value = i.projects.title + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(41:3) <Section segment=\\\"#projects\\\" on:click={jumpToSection}     >",
    		ctx
    	});

    	return block;
    }

    // (44:3) <Section segment="#skills" on:click={jumpToSection}     >
    function create_default_slot_4(ctx) {
    	let t_value = i.skills.title + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(44:3) <Section segment=\\\"#skills\\\" on:click={jumpToSection}     >",
    		ctx
    	});

    	return block;
    }

    // (48:3) <Section segment="#resume" on:click={openResume}>
    function create_default_slot_3(ctx) {
    	let t0_value = i.resume.title + " " + "";
    	let t0;
    	let t1;
    	let i_1;

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = space();
    			i_1 = element("i");
    			attr_dev(i_1, "class", "fa fa-file-pdf-o");
    			add_location(i_1, file, 50, 4, 1521);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, i_1, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(i_1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(48:3) <Section segment=\\\"#resume\\\" on:click={openResume}>",
    		ctx
    	});

    	return block;
    }

    // (37:2) 
    function create_center_slot(ctx) {
    	let div;
    	let section0;
    	let t0;
    	let section1;
    	let t1;
    	let section2;
    	let t2;
    	let section3;
    	let current;

    	section0 = new Section({
    			props: {
    				segment: "#about",
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section0.$on("click", jumpToSection);

    	section1 = new Section({
    			props: {
    				segment: "#projects",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section1.$on("click", jumpToSection);

    	section2 = new Section({
    			props: {
    				segment: "#skills",
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section2.$on("click", jumpToSection);

    	section3 = new Section({
    			props: {
    				segment: "#resume",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section3.$on("click", openResume);

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(section0.$$.fragment);
    			t0 = space();
    			create_component(section1.$$.fragment);
    			t1 = space();
    			create_component(section2.$$.fragment);
    			t2 = space();
    			create_component(section3.$$.fragment);
    			attr_dev(div, "slot", "center");
    			add_location(div, file, 36, 2, 1089);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(section0, div, null);
    			append_dev(div, t0);
    			mount_component(section1, div, null);
    			append_dev(div, t1);
    			mount_component(section2, div, null);
    			append_dev(div, t2);
    			mount_component(section3, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const section0_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				section0_changes.$$scope = { dirty, ctx };
    			}

    			section0.$set(section0_changes);
    			const section1_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				section1_changes.$$scope = { dirty, ctx };
    			}

    			section1.$set(section1_changes);
    			const section2_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				section2_changes.$$scope = { dirty, ctx };
    			}

    			section2.$set(section2_changes);
    			const section3_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				section3_changes.$$scope = { dirty, ctx };
    			}

    			section3.$set(section3_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(section0.$$.fragment, local);
    			transition_in(section1.$$.fragment, local);
    			transition_in(section2.$$.fragment, local);
    			transition_in(section3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(section0.$$.fragment, local);
    			transition_out(section1.$$.fragment, local);
    			transition_out(section2.$$.fragment, local);
    			transition_out(section3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(section0);
    			destroy_component(section1);
    			destroy_component(section2);
    			destroy_component(section3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_center_slot.name,
    		type: "slot",
    		source: "(37:2) ",
    		ctx
    	});

    	return block;
    }

    // (74:2) {#each i.projects.entries as project}
    function create_each_block_3(ctx) {
    	let card;
    	let current;
    	const card_spread_levels = [/*project*/ ctx[14], { color: i.colors.theme }];
    	let card_props = {};

    	for (let i = 0; i < card_spread_levels.length; i += 1) {
    		card_props = assign(card_props, card_spread_levels[i]);
    	}

    	card = new Card({ props: card_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const card_changes = (dirty & /*i*/ 0)
    			? get_spread_update(card_spread_levels, [get_spread_object(/*project*/ ctx[14]), { color: i.colors.theme }])
    			: {};

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3.name,
    		type: "each",
    		source: "(74:2) {#each i.projects.entries as project}",
    		ctx
    	});

    	return block;
    }

    // (84:3) {#each i.skills.techincal as skill}
    function create_each_block_2(ctx) {
    	let competence;
    	let current;
    	const competence_spread_levels = [/*skill*/ ctx[9], { color: i.colors.theme }];
    	let competence_props = {};

    	for (let i = 0; i < competence_spread_levels.length; i += 1) {
    		competence_props = assign(competence_props, competence_spread_levels[i]);
    	}

    	competence = new Competence({ props: competence_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(competence.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(competence, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const competence_changes = (dirty & /*i*/ 0)
    			? get_spread_update(competence_spread_levels, [get_spread_object(/*skill*/ ctx[9]), { color: i.colors.theme }])
    			: {};

    			competence.$set(competence_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(competence.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(competence.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(competence, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(84:3) {#each i.skills.techincal as skill}",
    		ctx
    	});

    	return block;
    }

    // (89:3) {#each i.skills.languages as skill}
    function create_each_block_1(ctx) {
    	let competence;
    	let current;
    	const competence_spread_levels = [/*skill*/ ctx[9], { color: i.colors.theme }];
    	let competence_props = {};

    	for (let i = 0; i < competence_spread_levels.length; i += 1) {
    		competence_props = assign(competence_props, competence_spread_levels[i]);
    	}

    	competence = new Competence({ props: competence_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(competence.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(competence, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const competence_changes = (dirty & /*i*/ 0)
    			? get_spread_update(competence_spread_levels, [get_spread_object(/*skill*/ ctx[9]), { color: i.colors.theme }])
    			: {};

    			competence.$set(competence_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(competence.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(competence.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(competence, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(89:3) {#each i.skills.languages as skill}",
    		ctx
    	});

    	return block;
    }

    // (103:4) {#each i.footer.social.websites as website}
    function create_each_block(ctx) {
    	let iconcircle;
    	let current;
    	const iconcircle_spread_levels = [/*website*/ ctx[6]];
    	let iconcircle_props = {};

    	for (let i = 0; i < iconcircle_spread_levels.length; i += 1) {
    		iconcircle_props = assign(iconcircle_props, iconcircle_spread_levels[i]);
    	}

    	iconcircle = new IconCircle({ props: iconcircle_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(iconcircle.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(iconcircle, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const iconcircle_changes = (dirty & /*i*/ 0)
    			? get_spread_update(iconcircle_spread_levels, [get_spread_object(/*website*/ ctx[6])])
    			: {};

    			iconcircle.$set(iconcircle_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(iconcircle.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(iconcircle.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(iconcircle, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(103:4) {#each i.footer.social.websites as website}",
    		ctx
    	});

    	return block;
    }

    // (110:4) <Contact icon="envelope"      >
    function create_default_slot_2(ctx) {
    	let a;
    	let t_value = i.footer.information.email + "";
    	let t;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", "mailto:" + i.footer.information.email);
    			attr_dev(a, "class", "svelte-1eyyo8q");
    			add_location(a, file, 110, 6, 3014);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(110:4) <Contact icon=\\\"envelope\\\"      >",
    		ctx
    	});

    	return block;
    }

    // (115:4) <Contact icon="phone">
    function create_default_slot_1(ctx) {
    	let t_value = i.footer.information.phone + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(115:4) <Contact icon=\\\"phone\\\">",
    		ctx
    	});

    	return block;
    }

    // (116:4) <Contact icon="map-marker "      >
    function create_default_slot(ctx) {
    	let t_value = i.footer.information.address + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(116:4) <Contact icon=\\\"map-marker \\\"      >",
    		ctx
    	});

    	return block;
    }

    // (152:0) {:else}
    function create_else_block_1(ctx) {
    	let style;

    	const block = {
    		c: function create() {
    			style = element("style");
    			style.textContent = "#about {\n\t\t\tgrid-template-columns: 1fr 2fr;\n\t\t\tgrid-template-rows: 0.2fr 2fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t\"title title\"\n\t\t\t\t\"profile about\";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\tgrid-template-rows: 0.3fr 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t\"social-title contact-title\"\n\t\t\t\t\"social-icons contact-info\";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 40px;\n\t\t\tpadding-right: 40px;\n\t\t}";
    			add_location(style, file, 152, 1, 3778);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, style, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(style);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(152:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (124:0) {#if mobileValue}
    function create_if_block_2(ctx) {
    	let style;

    	const block = {
    		c: function create() {
    			style = element("style");
    			style.textContent = "#about {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas:\n\t\t\t\t\"title\"\n\t\t\t\t\"profile\"\n\t\t\t\t\"about\";\n\t\t\tcolor: #004d40;\n\t\t}\n\t\t.competences {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}\n\n\t\t#footer .content {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-areas:\n\t\t\t\t\"social-title\"\n\t\t\t\t\"social-icons\"\n\t\t\t\t\"contact-title\"\n\t\t\t\t\"contact-info\";\n\t\t\tplace-items: center;\n\t\t}\n\t\tsection {\n\t\t\tpadding-left: 10px;\n\t\t\tpadding-right: 10px;\n\t\t}";
    			add_location(style, file, 124, 1, 3327);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, style, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(style);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(124:0) {#if mobileValue}",
    		ctx
    	});

    	return block;
    }

    // (194:0) {:else}
    function create_else_block(ctx) {
    	let style;

    	const block = {
    		c: function create() {
    			style = element("style");
    			style.textContent = ".cards {\n\t\t\tgrid-template-columns: repeat(1, 1fr);\n\t\t}";
    			add_location(style, file, 194, 1, 4517);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, style, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(style);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(194:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (188:18) 
    function create_if_block_1(ctx) {
    	let style;

    	const block = {
    		c: function create() {
    			style = element("style");
    			style.textContent = ".cards {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}";
    			add_location(style, file, 188, 1, 4433);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, style, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(style);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(188:18) ",
    		ctx
    	});

    	return block;
    }

    // (182:0) {#if x > 1200}
    function create_if_block(ctx) {
    	let style;

    	const block = {
    		c: function create() {
    			style = element("style");
    			style.textContent = ".cards {\n\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t}";
    			add_location(style, file, 182, 1, 4338);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, style, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(style);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(182:0) {#if x > 1200}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let div0;
    	let topbar;
    	let t0;
    	let div2;
    	let nightsky0;
    	let t1;
    	let div1;
    	let h1;
    	let t3;
    	let p0;
    	let raw_value = i.home.text + "";
    	let t4;
    	let section0;
    	let h20;
    	let t6;
    	let img;
    	let img_src_value;
    	let t7;
    	let p1;
    	let t9;
    	let section1;
    	let h21;
    	let t11;
    	let div3;
    	let t12;
    	let section2;
    	let h22;
    	let t14;
    	let div6;
    	let div4;
    	let t15;
    	let div5;
    	let t16;
    	let div11;
    	let nightsky1;
    	let t17;
    	let div10;
    	let h23;
    	let t19;
    	let div9;
    	let h30;
    	let t21;
    	let div7;
    	let t22;
    	let h31;
    	let t24;
    	let div8;
    	let contact0;
    	let t25;
    	let contact1;
    	let t26;
    	let contact2;
    	let div10_resize_listener;
    	let t27;
    	let t28;
    	let if_block1_anchor;
    	let current;
    	let mounted;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[4]);

    	topbar = new Topbar({
    			props: {
    				color: i.colors.topbar,
    				$$slots: {
    					center: [create_center_slot],
    					left: [create_left_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	nightsky0 = new NightSky({
    			props: {
    				width: /*x*/ ctx[0],
    				height: /*y*/ ctx[2]
    			},
    			$$inline: true
    		});

    	let each_value_3 = i.projects.entries;
    	validate_each_argument(each_value_3);
    	let each_blocks_3 = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks_3[i], 1, 1, () => {
    		each_blocks_3[i] = null;
    	});

    	let each_value_2 = i.skills.techincal;
    	validate_each_argument(each_value_2);
    	let each_blocks_2 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const out_1 = i => transition_out(each_blocks_2[i], 1, 1, () => {
    		each_blocks_2[i] = null;
    	});

    	let each_value_1 = i.skills.languages;
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const out_2 = i => transition_out(each_blocks_1[i], 1, 1, () => {
    		each_blocks_1[i] = null;
    	});

    	nightsky1 = new NightSky({
    			props: {
    				width: /*x*/ ctx[0],
    				height: /*footerHeight*/ ctx[3]
    			},
    			$$inline: true
    		});

    	let each_value = i.footer.social.websites;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out_3 = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	contact0 = new Contact({
    			props: {
    				icon: "envelope",
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	contact1 = new Contact({
    			props: {
    				icon: "phone",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	contact2 = new Contact({
    			props: {
    				icon: "map-marker ",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	function select_block_type(ctx, dirty) {
    		if (/*mobileValue*/ ctx[1]) return create_if_block_2;
    		return create_else_block_1;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block0 = current_block_type(ctx);

    	function select_block_type_1(ctx, dirty) {
    		if (/*x*/ ctx[0] > 1200) return create_if_block;
    		if (/*x*/ ctx[0] > 800) return create_if_block_1;
    		return create_else_block;
    	}

    	let current_block_type_1 = select_block_type_1(ctx);
    	let if_block1 = current_block_type_1(ctx);

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			create_component(topbar.$$.fragment);
    			t0 = space();
    			div2 = element("div");
    			create_component(nightsky0.$$.fragment);
    			t1 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = `${i.home.title}`;
    			t3 = space();
    			p0 = element("p");
    			t4 = space();
    			section0 = element("section");
    			h20 = element("h2");
    			h20.textContent = `${i.about.title}`;
    			t6 = space();
    			img = element("img");
    			t7 = space();
    			p1 = element("p");
    			p1.textContent = `${i.about.text}`;
    			t9 = space();
    			section1 = element("section");
    			h21 = element("h2");
    			h21.textContent = `${i.projects.title}`;
    			t11 = space();
    			div3 = element("div");

    			for (let i = 0; i < each_blocks_3.length; i += 1) {
    				each_blocks_3[i].c();
    			}

    			t12 = space();
    			section2 = element("section");
    			h22 = element("h2");
    			h22.textContent = "Skills";
    			t14 = space();
    			div6 = element("div");
    			div4 = element("div");

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].c();
    			}

    			t15 = space();
    			div5 = element("div");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t16 = space();
    			div11 = element("div");
    			create_component(nightsky1.$$.fragment);
    			t17 = space();
    			div10 = element("div");
    			h23 = element("h2");
    			h23.textContent = `${i.footer.title}`;
    			t19 = space();
    			div9 = element("div");
    			h30 = element("h3");
    			h30.textContent = `${i.footer.social.title}`;
    			t21 = space();
    			div7 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t22 = space();
    			h31 = element("h3");
    			h31.textContent = `${i.footer.information.title}`;
    			t24 = space();
    			div8 = element("div");
    			create_component(contact0.$$.fragment);
    			t25 = space();
    			create_component(contact1.$$.fragment);
    			t26 = space();
    			create_component(contact2.$$.fragment);
    			t27 = space();
    			if_block0.c();
    			t28 = space();
    			if_block1.c();
    			if_block1_anchor = empty();
    			attr_dev(div0, "id", "topbar");
    			attr_dev(div0, "class", "svelte-1eyyo8q");
    			add_location(div0, file, 29, 0, 911);
    			attr_dev(h1, "class", "svelte-1eyyo8q");
    			add_location(h1, file, 59, 2, 1667);
    			attr_dev(p0, "class", "typewriter svelte-1eyyo8q");
    			add_location(p0, file, 60, 2, 1693);
    			attr_dev(div1, "class", "text svelte-1eyyo8q");
    			add_location(div1, file, 58, 1, 1646);
    			attr_dev(div2, "id", "home");
    			attr_dev(div2, "class", "svelte-1eyyo8q");
    			add_location(div2, file, 56, 0, 1594);
    			attr_dev(h20, "class", "section-title svelte-1eyyo8q");
    			add_location(h20, file, 65, 1, 1777);
    			if (!src_url_equal(img.src, img_src_value = "profile.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "profile");
    			set_style(img, "width", "200px");
    			attr_dev(img, "class", "svelte-1eyyo8q");
    			add_location(img, file, 66, 1, 1825);
    			attr_dev(p1, "class", "svelte-1eyyo8q");
    			add_location(p1, file, 67, 1, 1886);
    			attr_dev(section0, "id", "about");
    			attr_dev(section0, "class", "svelte-1eyyo8q");
    			add_location(section0, file, 64, 0, 1755);
    			attr_dev(h21, "class", "section-title svelte-1eyyo8q");
    			add_location(h21, file, 71, 1, 1945);
    			attr_dev(div3, "class", "cards svelte-1eyyo8q");
    			add_location(div3, file, 72, 1, 1996);
    			attr_dev(section1, "id", "projects");
    			attr_dev(section1, "class", "svelte-1eyyo8q");
    			add_location(section1, file, 70, 0, 1920);
    			attr_dev(h22, "class", "section-title svelte-1eyyo8q");
    			add_location(h22, file, 80, 1, 2157);
    			attr_dev(div4, "class", "c1");
    			add_location(div4, file, 82, 2, 2224);
    			attr_dev(div5, "class", "c2");
    			add_location(div5, file, 87, 2, 2355);
    			attr_dev(div6, "class", "competences svelte-1eyyo8q");
    			add_location(div6, file, 81, 1, 2196);
    			attr_dev(section2, "id", "skills");
    			attr_dev(section2, "class", "svelte-1eyyo8q");
    			add_location(section2, file, 79, 0, 2134);
    			attr_dev(h23, "class", "section-title svelte-1eyyo8q");
    			add_location(h23, file, 98, 2, 2623);
    			attr_dev(h30, "class", "social-title svelte-1eyyo8q");
    			add_location(h30, file, 100, 3, 2698);
    			attr_dev(div7, "class", "social-icons svelte-1eyyo8q");
    			add_location(div7, file, 101, 3, 2755);
    			attr_dev(h31, "class", "contact-title svelte-1eyyo8q");
    			add_location(h31, file, 107, 3, 2889);
    			attr_dev(div8, "class", "contact-info svelte-1eyyo8q");
    			add_location(div8, file, 108, 3, 2952);
    			attr_dev(div9, "class", "content svelte-1eyyo8q");
    			add_location(div9, file, 99, 2, 2673);
    			attr_dev(div10, "class", "text svelte-1eyyo8q");
    			add_render_callback(() => /*div10_elementresize_handler*/ ctx[5].call(div10));
    			add_location(div10, file, 97, 1, 2569);
    			attr_dev(div11, "id", "footer");
    			attr_dev(div11, "class", "svelte-1eyyo8q");
    			add_location(div11, file, 95, 0, 2504);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			mount_component(topbar, div0, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(nightsky0, div2, null);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			append_dev(div1, h1);
    			append_dev(div1, t3);
    			append_dev(div1, p0);
    			p0.innerHTML = raw_value;
    			insert_dev(target, t4, anchor);
    			insert_dev(target, section0, anchor);
    			append_dev(section0, h20);
    			append_dev(section0, t6);
    			append_dev(section0, img);
    			append_dev(section0, t7);
    			append_dev(section0, p1);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, section1, anchor);
    			append_dev(section1, h21);
    			append_dev(section1, t11);
    			append_dev(section1, div3);

    			for (let i = 0; i < each_blocks_3.length; i += 1) {
    				each_blocks_3[i].m(div3, null);
    			}

    			insert_dev(target, t12, anchor);
    			insert_dev(target, section2, anchor);
    			append_dev(section2, h22);
    			append_dev(section2, t14);
    			append_dev(section2, div6);
    			append_dev(div6, div4);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].m(div4, null);
    			}

    			append_dev(div6, t15);
    			append_dev(div6, div5);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div5, null);
    			}

    			insert_dev(target, t16, anchor);
    			insert_dev(target, div11, anchor);
    			mount_component(nightsky1, div11, null);
    			append_dev(div11, t17);
    			append_dev(div11, div10);
    			append_dev(div10, h23);
    			append_dev(div10, t19);
    			append_dev(div10, div9);
    			append_dev(div9, h30);
    			append_dev(div9, t21);
    			append_dev(div9, div7);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div7, null);
    			}

    			append_dev(div9, t22);
    			append_dev(div9, h31);
    			append_dev(div9, t24);
    			append_dev(div9, div8);
    			mount_component(contact0, div8, null);
    			append_dev(div8, t25);
    			mount_component(contact1, div8, null);
    			append_dev(div8, t26);
    			mount_component(contact2, div8, null);
    			div10_resize_listener = add_resize_listener(div10, /*div10_elementresize_handler*/ ctx[5].bind(div10));
    			insert_dev(target, t27, anchor);
    			if_block0.m(target, anchor);
    			insert_dev(target, t28, anchor);
    			if_block1.m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(window_1, "resize", /*onwindowresize*/ ctx[4]);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			const topbar_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				topbar_changes.$$scope = { dirty, ctx };
    			}

    			topbar.$set(topbar_changes);
    			const nightsky0_changes = {};
    			if (dirty & /*x*/ 1) nightsky0_changes.width = /*x*/ ctx[0];
    			if (dirty & /*y*/ 4) nightsky0_changes.height = /*y*/ ctx[2];
    			nightsky0.$set(nightsky0_changes);

    			if (dirty & /*i*/ 0) {
    				each_value_3 = i.projects.entries;
    				validate_each_argument(each_value_3);
    				let i$1;

    				for (i$1 = 0; i$1 < each_value_3.length; i$1 += 1) {
    					const child_ctx = get_each_context_3(ctx, each_value_3, i$1);

    					if (each_blocks_3[i$1]) {
    						each_blocks_3[i$1].p(child_ctx, dirty);
    						transition_in(each_blocks_3[i$1], 1);
    					} else {
    						each_blocks_3[i$1] = create_each_block_3(child_ctx);
    						each_blocks_3[i$1].c();
    						transition_in(each_blocks_3[i$1], 1);
    						each_blocks_3[i$1].m(div3, null);
    					}
    				}

    				group_outros();

    				for (i$1 = each_value_3.length; i$1 < each_blocks_3.length; i$1 += 1) {
    					out(i$1);
    				}

    				check_outros();
    			}

    			if (dirty & /*i*/ 0) {
    				each_value_2 = i.skills.techincal;
    				validate_each_argument(each_value_2);
    				let i$1;

    				for (i$1 = 0; i$1 < each_value_2.length; i$1 += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i$1);

    					if (each_blocks_2[i$1]) {
    						each_blocks_2[i$1].p(child_ctx, dirty);
    						transition_in(each_blocks_2[i$1], 1);
    					} else {
    						each_blocks_2[i$1] = create_each_block_2(child_ctx);
    						each_blocks_2[i$1].c();
    						transition_in(each_blocks_2[i$1], 1);
    						each_blocks_2[i$1].m(div4, null);
    					}
    				}

    				group_outros();

    				for (i$1 = each_value_2.length; i$1 < each_blocks_2.length; i$1 += 1) {
    					out_1(i$1);
    				}

    				check_outros();
    			}

    			if (dirty & /*i*/ 0) {
    				each_value_1 = i.skills.languages;
    				validate_each_argument(each_value_1);
    				let i$1;

    				for (i$1 = 0; i$1 < each_value_1.length; i$1 += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i$1);

    					if (each_blocks_1[i$1]) {
    						each_blocks_1[i$1].p(child_ctx, dirty);
    						transition_in(each_blocks_1[i$1], 1);
    					} else {
    						each_blocks_1[i$1] = create_each_block_1(child_ctx);
    						each_blocks_1[i$1].c();
    						transition_in(each_blocks_1[i$1], 1);
    						each_blocks_1[i$1].m(div5, null);
    					}
    				}

    				group_outros();

    				for (i$1 = each_value_1.length; i$1 < each_blocks_1.length; i$1 += 1) {
    					out_2(i$1);
    				}

    				check_outros();
    			}

    			const nightsky1_changes = {};
    			if (dirty & /*x*/ 1) nightsky1_changes.width = /*x*/ ctx[0];
    			if (dirty & /*footerHeight*/ 8) nightsky1_changes.height = /*footerHeight*/ ctx[3];
    			nightsky1.$set(nightsky1_changes);

    			if (dirty & /*i*/ 0) {
    				each_value = i.footer.social.websites;
    				validate_each_argument(each_value);
    				let i$1;

    				for (i$1 = 0; i$1 < each_value.length; i$1 += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i$1);

    					if (each_blocks[i$1]) {
    						each_blocks[i$1].p(child_ctx, dirty);
    						transition_in(each_blocks[i$1], 1);
    					} else {
    						each_blocks[i$1] = create_each_block(child_ctx);
    						each_blocks[i$1].c();
    						transition_in(each_blocks[i$1], 1);
    						each_blocks[i$1].m(div7, null);
    					}
    				}

    				group_outros();

    				for (i$1 = each_value.length; i$1 < each_blocks.length; i$1 += 1) {
    					out_3(i$1);
    				}

    				check_outros();
    			}

    			const contact0_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				contact0_changes.$$scope = { dirty, ctx };
    			}

    			contact0.$set(contact0_changes);
    			const contact1_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				contact1_changes.$$scope = { dirty, ctx };
    			}

    			contact1.$set(contact1_changes);
    			const contact2_changes = {};

    			if (dirty & /*$$scope*/ 131072) {
    				contact2_changes.$$scope = { dirty, ctx };
    			}

    			contact2.$set(contact2_changes);

    			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
    				if_block0.d(1);
    				if_block0 = current_block_type(ctx);

    				if (if_block0) {
    					if_block0.c();
    					if_block0.m(t28.parentNode, t28);
    				}
    			}

    			if (current_block_type_1 !== (current_block_type_1 = select_block_type_1(ctx))) {
    				if_block1.d(1);
    				if_block1 = current_block_type_1(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(topbar.$$.fragment, local);
    			transition_in(nightsky0.$$.fragment, local);

    			for (let i = 0; i < each_value_3.length; i += 1) {
    				transition_in(each_blocks_3[i]);
    			}

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks_2[i]);
    			}

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks_1[i]);
    			}

    			transition_in(nightsky1.$$.fragment, local);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(contact0.$$.fragment, local);
    			transition_in(contact1.$$.fragment, local);
    			transition_in(contact2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(topbar.$$.fragment, local);
    			transition_out(nightsky0.$$.fragment, local);
    			each_blocks_3 = each_blocks_3.filter(Boolean);

    			for (let i = 0; i < each_blocks_3.length; i += 1) {
    				transition_out(each_blocks_3[i]);
    			}

    			each_blocks_2 = each_blocks_2.filter(Boolean);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				transition_out(each_blocks_2[i]);
    			}

    			each_blocks_1 = each_blocks_1.filter(Boolean);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				transition_out(each_blocks_1[i]);
    			}

    			transition_out(nightsky1.$$.fragment, local);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(contact0.$$.fragment, local);
    			transition_out(contact1.$$.fragment, local);
    			transition_out(contact2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			destroy_component(topbar);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div2);
    			destroy_component(nightsky0);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(section0);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(section1);
    			destroy_each(each_blocks_3, detaching);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(section2);
    			destroy_each(each_blocks_2, detaching);
    			destroy_each(each_blocks_1, detaching);
    			if (detaching) detach_dev(t16);
    			if (detaching) detach_dev(div11);
    			destroy_component(nightsky1);
    			destroy_each(each_blocks, detaching);
    			destroy_component(contact0);
    			destroy_component(contact1);
    			destroy_component(contact2);
    			div10_resize_listener();
    			if (detaching) detach_dev(t27);
    			if_block0.d(detaching);
    			if (detaching) detach_dev(t28);
    			if_block1.d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function jumpToSection(event) {
    	event.detail.section.scrollIntoView({ behavior: "smooth" });
    	window.history.replaceState({}, "", event.detail.ref);
    }

    function openResume() {
    	window.open("/resume.pdf");
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let x;
    	let y;
    	let mobileValue;
    	let footerHeight;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function onwindowresize() {
    		$$invalidate(0, x = window_1.innerWidth);
    		$$invalidate(2, y = window_1.innerHeight);
    	}

    	function div10_elementresize_handler() {
    		footerHeight = this.clientHeight;
    		$$invalidate(3, footerHeight);
    	}

    	$$self.$capture_state = () => ({
    		Section,
    		Topbar,
    		mobile,
    		Card,
    		Competence,
    		IconCircle,
    		Contact,
    		NightSky,
    		i,
    		x,
    		y,
    		mobileValue,
    		jumpToSection,
    		openResume,
    		footerHeight
    	});

    	$$self.$inject_state = $$props => {
    		if ('x' in $$props) $$invalidate(0, x = $$props.x);
    		if ('y' in $$props) $$invalidate(2, y = $$props.y);
    		if ('mobileValue' in $$props) $$invalidate(1, mobileValue = $$props.mobileValue);
    		if ('footerHeight' in $$props) $$invalidate(3, footerHeight = $$props.footerHeight);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*x*/ 1) {
    			$$invalidate(1, mobileValue = x < 800);
    		}

    		if ($$self.$$.dirty & /*mobileValue*/ 2) {
    			mobile.set(mobileValue);
    		}
    	};

    	return [x, mobileValue, y, footerHeight, onwindowresize, div10_elementresize_handler];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    var app = new App({
        target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
