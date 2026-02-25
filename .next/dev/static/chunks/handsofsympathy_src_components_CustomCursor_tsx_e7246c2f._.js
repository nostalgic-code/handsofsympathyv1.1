(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/handsofsympathy/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/handsofsympathy/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const dot = dotRef.current;
            const ring = ringRef.current;
            if (!dot || !ring) return;
            let mx = 0, my = 0, rx = 0, ry = 0;
            const onMove = {
                "CustomCursor.useEffect.onMove": (e)=>{
                    mx = e.clientX;
                    my = e.clientY;
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dot, {
                        x: mx,
                        y: my,
                        duration: 0.08,
                        ease: 'power2.out'
                    });
                }
            }["CustomCursor.useEffect.onMove"];
            const animRing = {
                "CustomCursor.useEffect.animRing": ()=>{
                    rx += (mx - rx) * 0.08;
                    ry += (my - ry) * 0.08;
                    __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(ring, {
                        x: rx,
                        y: ry
                    });
                    requestAnimationFrame(animRing);
                }
            }["CustomCursor.useEffect.animRing"];
            animRing();
            window.addEventListener('mousemove', onMove);
            const addHover = {
                "CustomCursor.useEffect.addHover": ()=>ring.classList.add('is-hovering')
            }["CustomCursor.useEffect.addHover"];
            const removeHover = {
                "CustomCursor.useEffect.removeHover": ()=>ring.classList.remove('is-hovering')
            }["CustomCursor.useEffect.removeHover"];
            const attach = {
                "CustomCursor.useEffect.attach": ()=>{
                    document.querySelectorAll('a,button,[data-hover]').forEach({
                        "CustomCursor.useEffect.attach": (el)=>{
                            el.removeEventListener('mouseenter', addHover);
                            el.removeEventListener('mouseleave', removeHover);
                            el.addEventListener('mouseenter', addHover);
                            el.addEventListener('mouseleave', removeHover);
                        }
                    }["CustomCursor.useEffect.attach"]);
                }
            }["CustomCursor.useEffect.attach"];
            attach();
            const obs = new MutationObserver(attach);
            obs.observe(document.body, {
                subtree: true,
                childList: true
            });
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', onMove);
                    obs.disconnect();
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "cursor-dot",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/CustomCursor.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$handsofsympathy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "cursor-ring",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/handsofsympathy/src/components/CustomCursor.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "2fNvfCAqhzAXAJQ0ree4LU3uDAY=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/handsofsympathy/src/components/CustomCursor.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/handsofsympathy/src/components/CustomCursor.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=handsofsympathy_src_components_CustomCursor_tsx_e7246c2f._.js.map