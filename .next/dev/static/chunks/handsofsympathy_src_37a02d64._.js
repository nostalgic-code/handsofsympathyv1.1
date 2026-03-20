(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/handsofsympathy/src/hooks/useLenis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLenis",
    ()=>useLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function useLenis() {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLenis.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.4,
                easing: {
                    "useLenis.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["useLenis.useEffect"],
                orientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 0.85,
                touchMultiplier: 1.5
            });
            lenisRef.current = lenis;
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            const ticker = {
                "useLenis.useEffect.ticker": (time)=>lenis.raf(time * 1000)
            }["useLenis.useEffect.ticker"];
            __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(ticker);
            __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            return ({
                "useLenis.useEffect": ()=>{
                    lenis.destroy();
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(ticker);
                }
            })["useLenis.useEffect"];
        }
    }["useLenis.useEffect"], []);
    return lenisRef;
}
_s(useLenis, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/handsofsympathy/src/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const AudioButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/handsofsympathy/src/components/AudioButton.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/handsofsympathy/src/components/AudioButton.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AudioButton;
const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Why It Works',
        href: '/why-it-works'
    }
];
function Nav({ isReady }) {
    _s();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!isReady || !navRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(navRef.current, {
                y: -70,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
        }
    }["Nav.useEffect"], [
        isReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                start: 'top -60',
                onEnter: {
                    "Nav.useEffect": ()=>{
                        navRef.current?.classList.add('nav-scrolled', 'nav-shrunk');
                    }
                }["Nav.useEffect"],
                onLeaveBack: {
                    "Nav.useEffect": ()=>{
                        navRef.current?.classList.remove('nav-scrolled', 'nav-shrunk');
                    }
                }["Nav.useEffect"]
            });
            return ({
                "Nav.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Nav.useEffect": (t)=>t.kill()
                    }["Nav.useEffect"])
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        className: "nav-wrap",
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-backdrop",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/",
                className: "nav-logo",
                onClick: (e)=>{
                    e.preventDefault();
                    router.push('/');
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-emblem",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "logo-heart"
                        }, void 0, false, {
                            fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "logo-name",
                        children: "Hands of Sympathy"
                    }, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-pill-wrap",
                role: "tablist",
                "aria-label": "Site pages",
                children: NAV_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        "aria-selected": pathname === item.href,
                        className: `nav-pill-btn${pathname === item.href ? ' is-active' : ''}`,
                        onClick: ()=>router.push(item.href),
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioButton, {}, void 0, false, {
                    fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/handsofsympathy/src/components/Nav.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Nav, "cJRnBLCp+bzsSFfG5Ui+k2wDVi0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Nav;
var _c, _c1;
__turbopack_context__.k.register(_c, "AudioButton");
__turbopack_context__.k.register(_c1, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/handsofsympathy/src/components/CallDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CallDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CallDrawer() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chip, setChip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CallDrawer.useCallback[openDrawer]": ()=>{
            setOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }["CallDrawer.useCallback[openDrawer]"], []);
    const closeDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CallDrawer.useCallback[closeDrawer]": ()=>{
            setOpen(false);
            document.body.style.overflow = '';
        }
    }["CallDrawer.useCallback[closeDrawer]"], []);
    // Expose openDrawer globally so other components can trigger it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallDrawer.useEffect": ()=>{
            window.__openCallDrawer = openDrawer;
            return ({
                "CallDrawer.useEffect": ()=>{
                    delete window.__openCallDrawer;
                }
            })["CallDrawer.useEffect"];
        }
    }["CallDrawer.useEffect"], [
        openDrawer
    ]);
    // Keyboard close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallDrawer.useEffect": ()=>{
            const onKey = {
                "CallDrawer.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') closeDrawer();
                }
            }["CallDrawer.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "CallDrawer.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["CallDrawer.useEffect"];
        }
    }["CallDrawer.useEffect"], [
        closeDrawer
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('#drawer-success > *', {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out'
        });
    };
    const chips = [
        'Morning (9–12)',
        'Afternoon (12–5)',
        'Evening (5–7)',
        'Flexible'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "call-fab",
                onClick: openDrawer,
                "aria-label": "Request a call back",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fab-pulse",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Request a Call"
                    }, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `drawer-backdrop${open ? ' is-open' : ''}`,
                onClick: closeDrawer,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `drawer-panel${open ? ' is-open' : ''}`,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Request a call back",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawer-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "drawer-eyebrow",
                                        children: "Take the first step"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "drawer-title",
                                        children: [
                                            "Request a ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "call back"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 63,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "drawer-close",
                                onClick: closeDrawer,
                                "aria-label": "Close drawer",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "drawer-body",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "field-label",
                                                children: "First Name"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "field-input",
                                                type: "text",
                                                placeholder: "Your name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "field-label",
                                                children: "Last Name"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "field-input",
                                                type: "text",
                                                placeholder: "Family name"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "field-input",
                                        type: "email",
                                        placeholder: "your@email.com",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "field-input",
                                        type: "tel",
                                        placeholder: "+44 7xxx xxxxxx"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Area of Concern"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field-select",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select a service..."
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "General Mental Health Support"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Anxiety & Stress"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Depression"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "PTSD Treatment"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Neurodevelopmental Assessment"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Psychometric Testing"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Family Workshop"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "1:1 CBT Sessions"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Preferred Time for Call"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "time-chips",
                                        children: chips.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `time-chip${chip === c ? ' is-selected' : ''}`,
                                                onClick: ()=>setChip(c),
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-label",
                                        children: "Brief Message (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "field-textarea",
                                        rows: 3,
                                        placeholder: "Tell us a little about what you're looking for..."
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-notice",
                                children: "All information is kept strictly confidential in accordance with GDPR and our professional ethics guidelines. We will never share your details."
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-claret w-full justify-center py-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submit Request →"
                                }, void 0, false, {
                                    fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "drawer-success",
                        className: "flex-1 flex flex-col items-center justify-center text-center p-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-18 h-18 rounded-full mb-8 flex items-center justify-center",
                                style: {
                                    border: '1.5px solid var(--claret)',
                                    width: 72,
                                    height: 72
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--claret)',
                                        fontSize: '1.5rem'
                                    },
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display mb-4",
                                style: {
                                    fontSize: '2.5rem',
                                    color: 'var(--fg)',
                                    fontFamily: 'var(--font-cormorant)'
                                },
                                children: "Thank you"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.88rem',
                                    color: 'var(--muted)',
                                    lineHeight: 1.75,
                                    maxWidth: 280
                                },
                                children: "We've received your request and will call you within 24 hours. You're taking a courageous step."
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/components/CallDrawer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CallDrawer, "Fx4hTw0Xovnvg+94LZiuXowWD3w=");
_c = CallDrawer;
var _c;
__turbopack_context__.k.register(_c, "CallDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/handsofsympathy/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const SERVICES = [
    'CBT Therapy',
    'Autism Assessments',
    'Family Workshops',
    '1:1 Sessions',
    'Psychometric Testing'
];
const LEGAL = [
    'Privacy Policy',
    'GDPR Statement',
    'Complaints Procedure',
    'Referrals'
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-16 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            background: 'var(--cream)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                        lineNumber: 13,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'var(--font-cormorant)',
                                            fontSize: '1.25rem',
                                            color: 'var(--cream-light)'
                                        },
                                        children: "Hands of Sympathy"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.8rem',
                                    color: 'rgba(232,216,197,0.38)',
                                    lineHeight: 1.8,
                                    maxWidth: '20rem',
                                    marginBottom: '2rem'
                                },
                                children: "A dedicated mental health service delivering compassionate, evidence-based interventions in Birmingham and across the NHS."
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    'BABCP',
                                    'NMC',
                                    'NHS',
                                    'CAMHS'
                                ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "footer-badge",
                                        children: b
                                    }, b, false, {
                                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(232,216,197,0.25)',
                                    marginBottom: '1.5rem'
                                },
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: SERVICES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            style: {
                                                fontSize: '0.82rem',
                                                color: 'rgba(232,216,197,0.42)',
                                                textDecoration: 'none',
                                                transition: 'color .3s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--cream-light)',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(232,216,197,0.42)',
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    }, s, false, {
                                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(232,216,197,0.25)',
                                    marginBottom: '1.5rem'
                                },
                                children: "Information"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: LEGAL.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            style: {
                                                fontSize: '0.82rem',
                                                color: 'rgba(232,216,197,0.42)',
                                                textDecoration: 'none',
                                                transition: 'color .3s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--cream-light)',
                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(232,216,197,0.42)',
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    }, s, false, {
                                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8",
                style: {
                    borderTop: '1px solid rgba(232,216,197,0.07)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.65rem',
                            color: 'rgba(232,216,197,0.2)'
                        },
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Hands of Sympathy. Birmingham, UK. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontSize: '0.88rem',
                            color: 'rgba(232,216,197,0.15)'
                        },
                        children: '"A shared experience calls for a shared solution."'
                    }, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/handsofsympathy/src/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/handsofsympathy/src/app/about/AboutPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/src/hooks/useLenis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/src/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$CallDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/src/components/CallDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/src/components/Footer.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const CustomCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/handsofsympathy/src/components/CustomCursor.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/handsofsympathy/src/components/CustomCursor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CustomCursor;
__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CREDENTIALS = [
    {
        abbr: 'BABCP',
        full: 'British Association for Behavioural & Cognitive Psychotherapies'
    },
    {
        abbr: 'NMC',
        full: 'Nursing and Midwifery Council Registration'
    },
    {
        abbr: 'ACT',
        full: 'Acceptance and Commitment Therapy'
    },
    {
        abbr: 'CFT',
        full: 'Compassion-Focused Therapy'
    },
    {
        abbr: 'NET',
        full: 'Narrative Exposure Therapy for PTSD'
    }
];
const VALUES = [
    {
        num: '01',
        title: 'Personalized',
        desc: 'We tailor every intervention to your unique needs, personality, and circumstances. No two journeys are the same — nor should treatment be.'
    },
    {
        num: '02',
        title: 'Cultural',
        desc: 'We adapt our approach based on your background, preferences, and lived experiences. Culturally sensitive care is foundational, not optional.'
    },
    {
        num: '03',
        title: 'Evidence-Based',
        desc: 'Every technique is grounded in scientific research and proven therapeutic frameworks — CBT, ACT, and CFT — for measurable, lasting outcomes.'
    }
];
function AboutPage() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const portraitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutPage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AboutPage.useEffect.ctx": ()=>{
                    // Hero lines
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.about-hero .rl-inner', {
                        y: 0,
                        stagger: 0.13,
                        duration: 1.3,
                        ease: 'power4.out',
                        delay: 0.3
                    });
                    // Portrait clip-path reveal
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: portraitRef.current,
                        start: 'top 75%',
                        once: true,
                        onEnter: {
                            "AboutPage.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(portraitRef.current, {
                                    clipPath: 'inset(0 0% 0 0)',
                                    duration: 1.4,
                                    ease: 'power4.inOut'
                                })
                        }["AboutPage.useEffect.ctx"]
                    });
                    // Bio paragraphs
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.felix-bio p', {
                        opacity: 0,
                        y: 24,
                        stagger: 0.12,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.felix-bio',
                            start: 'top 78%',
                            once: true
                        }
                    });
                    // Section reveals
                    document.querySelectorAll('.about-reveal .rl-inner').forEach({
                        "AboutPage.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: el.closest('.reveal-line'),
                                start: 'top 82%',
                                once: true,
                                onEnter: {
                                    "AboutPage.useEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                                            y: 0,
                                            duration: 1.1,
                                            ease: 'power4.out'
                                        })
                                }["AboutPage.useEffect.ctx"]
                            });
                        }
                    }["AboutPage.useEffect.ctx"]);
                    // Value cards
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.value-card', {
                        opacity: 0,
                        y: 40,
                        stagger: 0.12,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '#about-values',
                            start: 'top 78%',
                            once: true
                        }
                    });
                    // Credentials
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.credential-pill', {
                        opacity: 0,
                        y: 16,
                        stagger: 0.07,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.creds-row',
                            start: 'top 85%',
                            once: true
                        }
                    });
                }
            }["AboutPage.useEffect.ctx"], pageRef);
            return ({
                "AboutPage.useEffect": ()=>ctx.revert()
            })["AboutPage.useEffect"];
        }
    }["AboutPage.useEffect"], []);
    const openDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AboutPage.useCallback[openDrawer]": ()=>{
            window.__openCallDrawer?.();
        }
    }["AboutPage.useCallback[openDrawer]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain-overlay",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomCursor, {}, void 0, false, {
                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isReady: true
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$CallDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: pageRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "about-hero relative min-h-[70vh] flex items-end overflow-hidden",
                        style: {
                            padding: '10rem 3.5rem 6rem',
                            background: 'var(--bg)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    right: '2rem',
                                    bottom: '-2rem',
                                    fontFamily: 'var(--font-cormorant)',
                                    fontSize: '30vw',
                                    fontWeight: 300,
                                    fontStyle: 'italic',
                                    color: 'rgba(127,23,52,0.04)',
                                    lineHeight: 1,
                                    pointerEvents: 'none',
                                    userSelect: 'none'
                                },
                                children: "14"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-tag mb-6",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rl-inner text-display-xl",
                                            style: {
                                                color: 'var(--fg)'
                                            },
                                            children: "Who"
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                            lineNumber: 99,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rl-inner text-display-xl",
                                            style: {
                                                color: 'var(--claret)',
                                                fontStyle: 'italic'
                                            },
                                            children: "we are"
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: '6rem 3.5rem',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '6rem',
                            alignItems: 'start'
                        },
                        className: "flex-col md:flex-row flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: portraitRef,
                                        className: "portrait-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 120,
                                                            height: 120,
                                                            borderRadius: '50%',
                                                            border: '1.5px solid rgba(232,216,197,0.2)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: 70,
                                                                height: 70,
                                                                borderRadius: '50%',
                                                                border: '1px solid rgba(232,216,197,0.15)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'var(--font-cormorant)',
                                                                    fontSize: '3rem',
                                                                    fontStyle: 'italic',
                                                                    color: 'rgba(232,216,197,0.5)'
                                                                },
                                                                children: "F"
                                                            }, void 0, false, {
                                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: '1.5rem',
                                                            right: '1.5rem',
                                                            width: '1.5rem',
                                                            height: '1.5rem',
                                                            border: '1px solid rgba(232,216,197,0.2)',
                                                            transform: 'rotate(45deg)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    padding: '2rem',
                                                    background: 'linear-gradient(to top,rgba(90,16,37,0.9),transparent)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'var(--font-cormorant)',
                                                            fontSize: '1.75rem',
                                                            color: 'var(--cream-light)'
                                                        },
                                                        children: "Felix"
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.62rem',
                                                            letterSpacing: '0.2em',
                                                            textTransform: 'uppercase',
                                                            color: 'rgba(232,216,197,0.55)',
                                                            marginTop: '0.25rem'
                                                        },
                                                        children: "Cognitive Behavioural Therapist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: '-1.5rem',
                                            right: '-1.75rem',
                                            background: 'var(--claret)',
                                            padding: '1.25rem 1.75rem',
                                            maxWidth: 170,
                                            zIndex: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.55rem',
                                                    letterSpacing: '0.15em',
                                                    textTransform: 'uppercase',
                                                    color: 'rgba(232,216,197,0.65)',
                                                    marginBottom: '0.35rem'
                                                },
                                                children: "Registered"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'var(--font-cormorant)',
                                                    fontSize: '1rem',
                                                    color: 'var(--cream-light)',
                                                    lineHeight: 1.3
                                                },
                                                children: [
                                                    "BABCP & NMC",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 143
                                                    }, this),
                                                    "Accredited"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-line about-reveal",
                                        style: {
                                            marginBottom: '0.25rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rl-inner",
                                            style: {
                                                fontFamily: 'var(--font-cormorant)',
                                                fontSize: 'clamp(2rem,4vw,4.5rem)',
                                                lineHeight: 0.95,
                                                letterSpacing: '-0.015em',
                                                color: 'var(--fg)'
                                            },
                                            children: "A dedicated"
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-line about-reveal",
                                        style: {
                                            marginBottom: '2.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rl-inner",
                                            style: {
                                                fontFamily: 'var(--font-cormorant)',
                                                fontSize: 'clamp(2rem,4vw,4.5rem)',
                                                lineHeight: 0.95,
                                                letterSpacing: '-0.015em',
                                                color: 'var(--claret)',
                                                fontStyle: 'italic'
                                            },
                                            children: "clinician"
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "felix-bio",
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.25rem',
                                            maxWidth: '30rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.88rem',
                                                    color: 'var(--muted)',
                                                    lineHeight: 1.9
                                                },
                                                children: "I am a Cognitive Behavioural Therapist (CBT) with full BABCP accreditation and NMC registration. For over 14 years, I have dedicated my work to promoting the mental well-being of people and improving their understanding of their mental health conditions and needs."
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.88rem',
                                                    color: 'var(--muted)',
                                                    lineHeight: 1.9
                                                },
                                                children: "I have completed Acceptance and Commitment Therapy (ACT) and Compassion-Focused Therapy (CFT) — particularly valuable when working with patients experiencing psychological difficulties from long-term health conditions like Chronic Fatigue Syndrome, Chronic Pain, and Functional Neurological Disorder."
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.88rem',
                                                    color: 'var(--muted)',
                                                    lineHeight: 1.9
                                                },
                                                children: "I have also completed Narrative Exposure Therapy (NET) for PTSD. I currently work as a CBT therapist in private practice in Birmingham and in the NHS. My partner, a clinical Registered Mental Health Nurse within CAMHS, joins me in supporting young people with neurodevelopmental concerns and their Educational Healthcare Plans."
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '2.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.6rem',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    color: 'rgba(107,107,107,0.45)',
                                                    marginBottom: '1rem'
                                                },
                                                children: "Qualifications & Accreditations"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "creds-row flex flex-wrap gap-2",
                                                children: CREDENTIALS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "credential-pill",
                                                                children: c.abbr
                                                            }, void 0, false, {
                                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    bottom: '100%',
                                                                    left: 0,
                                                                    marginBottom: '0.5rem',
                                                                    background: 'var(--fg)',
                                                                    color: 'var(--bg)',
                                                                    fontSize: '0.65rem',
                                                                    padding: '0.5rem 0.75rem',
                                                                    whiteSpace: 'nowrap',
                                                                    opacity: 0,
                                                                    transition: 'opacity .2s',
                                                                    pointerEvents: 'none',
                                                                    zIndex: 10
                                                                },
                                                                className: "group-hover:opacity-100",
                                                                children: c.full
                                                            }, void 0, false, {
                                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, c.abbr, true, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '2rem',
                                            paddingTop: '2rem',
                                            borderTop: '1px solid var(--border)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    border: '1.5px solid rgba(127,23,52,0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'var(--claret)',
                                                    flexShrink: 0
                                                },
                                                children: "◎"
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.6rem',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.12em',
                                                            color: 'rgba(107,107,107,0.4)'
                                                        },
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.88rem',
                                                            color: 'var(--fg)',
                                                            fontWeight: 500
                                                        },
                                                        children: "Birmingham & NHS Nationwide"
                                                    }, void 0, false, {
                                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about-values",
                        style: {
                            padding: '6rem 3.5rem',
                            background: 'var(--cream-light)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-tag mb-6",
                                children: "Our Approach"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal-line about-reveal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rl-inner text-display-lg",
                                    children: "Every person is unique."
                                }, void 0, false, {
                                    fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                    lineNumber: 199,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal-line about-reveal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rl-inner text-display-lg",
                                    style: {
                                        fontStyle: 'italic',
                                        color: 'var(--claret)'
                                    },
                                    children: "So is our care."
                                }, void 0, false, {
                                    fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-12 mt-16",
                                children: VALUES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "value-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'var(--font-cormorant)',
                                                    fontSize: '3.5rem',
                                                    color: 'rgba(127,23,52,0.1)',
                                                    fontWeight: 300,
                                                    lineHeight: 1,
                                                    marginBottom: '1rem'
                                                },
                                                children: v.num
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: 'var(--font-cormorant)',
                                                    fontSize: '1.5rem',
                                                    color: 'var(--fg)',
                                                    marginBottom: '0.6rem'
                                                },
                                                children: v.title
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.8rem',
                                                    color: 'var(--muted)',
                                                    lineHeight: 1.75
                                                },
                                                children: v.desc
                                            }, void 0, false, {
                                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, v.num, true, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: '6rem 3.5rem',
                            background: 'var(--claret)',
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    right: '-3rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontFamily: 'var(--font-cormorant)',
                                    fontSize: '18rem',
                                    fontStyle: 'italic',
                                    color: 'rgba(255,255,255,0.03)',
                                    lineHeight: 1,
                                    pointerEvents: 'none'
                                },
                                children: "Together"
                            }, void 0, false, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'var(--font-cormorant)',
                                            fontSize: 'clamp(2rem,4vw,3.5rem)',
                                            color: 'var(--cream-light)',
                                            fontStyle: 'italic',
                                            fontWeight: 300,
                                            lineHeight: 1.25,
                                            maxWidth: '32rem'
                                        },
                                        children: '"When you join Hands of Sympathy, you become part of a recovery-focused community."'
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-ghost-light",
                                        onClick: openDrawer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Begin Your Journey →"
                                        }, void 0, false, {
                                            fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/handsofsympathy/src/app/about/AboutPage.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AboutPage, "LW0MmW18I7IaEE9uNmbV0ocIsv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c1 = AboutPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomCursor");
__turbopack_context__.k.register(_c1, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=handsofsympathy_src_37a02d64._.js.map