(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [4], { 1085: function(e, t, n) { "use strict";
            n.r(t); var r, c, i, a, s, o, l, b = n(1),
                u = n(76),
                j = n(45),
                d = n(180),
                p = n(411),
                O = n(178),
                x = n(28),
                f = n(67),
                m = n(360),
                h = n(8),
                v = n(5),
                g = n(2),
                C = n(14),
                y = n(3),
                w = n.n(y),
                k = n(13),
                S = n(9),
                I = n(6),
                P = n(43),
                A = n(141),
                E = Object(A.parseUnits)("1"),
                T = Object(A.parseUnits)("0.5"),
                D = ["sleepy", "dollop", "twinkle", "churro", "sunny"],
                R = n(0),
                N = E.add(T),
                F = N.mul(5),
                z = { isInitialized: !1, currentStep: 0, teamId: null, selectedNft: { nftAddress: null, tokenId: null }, userName: "", minimumCakeRequired: N, allowance: F },
                _ = function(e, t) { switch (t.type) {
                        case "initialize":
                            return Object(I.a)(Object(I.a)({}, e), {}, { isInitialized: !0, currentStep: t.step });
                        case "next_step":
                            return Object(I.a)(Object(I.a)({}, e), {}, { currentStep: e.currentStep + 1 });
                        case "set_team":
                            return Object(I.a)(Object(I.a)({}, e), {}, { teamId: t.teamId });
                        case "set_selected_nft":
                            return Object(I.a)(Object(I.a)({}, e), {}, { selectedNft: { tokenId: t.tokenId, nftAddress: t.nftAddress } });
                        case "set_username":
                            return Object(I.a)(Object(I.a)({}, e), {}, { userName: t.userName });
                        default:
                            return e } },
                L = Object(b.createContext)(null),
                M = function(e) { var t = e.children,
                        n = Object(b.useReducer)(_, z),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(j.c)().account;
                    Object(b.useEffect)((function() { var e = !0; return a && function() { var t = Object(k.a)(w.a.mark((function t() { var n, r; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = Object(P.b)(), t.next = 3, n.canMint(a);
                                            case 3:
                                                r = t.sent, i({ type: "initialize", step: r ? 0 : 1 }), e && i({ type: "initialize", step: r ? 0 : 1 });
                                            case 6:
                                            case "end":
                                                return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()(),
                            function() { e = !1 } }), [a, i]); var s = Object(b.useMemo)((function() { return { nextStep: function() { return i({ type: "next_step" }) }, setTeamId: function(e) { return i({ type: "set_team", teamId: e }) }, setSelectedNft: function(e, t) { return i({ type: "set_selected_nft", tokenId: e, nftAddress: t }) }, setUserName: function(e) { return i({ type: "set_username", userName: e }) } } }), [i]); return Object(R.jsx)(L.Provider, { value: Object(I.a)(Object(I.a)({}, c), {}, { actions: s }), children: t }) },
                W = v.e.div(r || (r = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Q = ["Get Starter Collectible", "Set Profile Picture", "Join Team", "Set Name"],
                U = function() { var e = Object(C.b)().t,
                        t = Object(b.useContext)(L).currentStep; return Object(R.jsxs)(W, { children: [Object(R.jsx)(g.R, { as: "h1", scale: "xxl", color: "secondary", mb: "8px", id: "profile-setup-title", children: e("Profile Setup") }), Object(R.jsx)(g.R, { as: "h2", scale: "lg", mb: "8px", children: e("Show off your stats and collectibles with your unique profile") }), Object(R.jsx)(g.Ib, { color: "textSubtle", mb: "24px", children: e("Total cost: 1.5 CAKE") }), Object(R.jsx)(g.n, { children: Q.map((function(n, r) { return Object(R.jsx)(g.Ib, { color: r <= t ? "text" : "textDisabled", children: e(n) }, n) })) })] }) },
                H = n(105),
                q = function() { var e = Object(C.b)().t; return Object(R.jsxs)("div", { children: [Object(R.jsx)(g.R, { scale: "xl", mb: "8px", children: e("Oops!") }), Object(R.jsx)(g.Ib, { as: "p", mb: "16px", children: e("Please connect your wallet to continue") }), Object(R.jsx)(H.a, {})] }) },
                V = n(764),
                B = n(46),
                Y = n(126),
                G = n(361),
                K = n(123),
                X = n(765),
                J = n(52),
                Z = ["name", "value", "isChecked", "image", "onChange", "disabled", "children"],
                $ = v.e.label(c || (c = Object(h.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" }), (function(e) { return e.isDisabled ? "0.6" : "1" })),
                ee = v.e.div(i || (i = Object(h.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),
                te = v.e.div(a || (a = Object(h.a)(["\n  margin-left: 16px;\n"]))),
                ne = v.e.div(s || (s = Object(h.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) { return e.src })),
                re = function(e) { var t = e.name,
                        n = e.value,
                        r = e.isChecked,
                        c = void 0 !== r && r,
                        i = e.image,
                        a = e.onChange,
                        s = e.disabled,
                        o = e.children,
                        l = Object(J.a)(e, Z); return Object(R.jsx)(g.t, Object(I.a)(Object(I.a)({ isSuccess: c, isDisabled: s, mb: "16px" }, l), {}, { children: Object(R.jsxs)($, { isDisabled: s, children: [Object(R.jsxs)(ee, { children: [Object(R.jsx)(g.yb, { name: t, checked: c, value: n, onChange: function(e) { return a(e.target.value) }, disabled: s, style: { flex: "none" } }), Object(R.jsx)(te, { children: o })] }), Object(R.jsx)(ne, { src: i })] }) })) },
                ce = function(e) { return Object(R.jsx)(g.p, Object(I.a)({ endIcon: Object(R.jsx)(g.f, { color: "currentColor" }) }, e)) },
                ie = function() { return Object(b.useContext)(L) },
                ae = G.a.pancake.filter((function(e) { return D.includes(e.identifier) })),
                se = function() { var e = Object(b.useState)(null),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ie(),
                        i = c.actions,
                        a = c.minimumCakeRequired,
                        s = c.allowance,
                        o = Object(j.c)().account,
                        l = Object(B.c)(),
                        u = Object(B.a)(),
                        d = Object(C.b)().t,
                        p = Object(Y.e)(),
                        O = p.balance,
                        x = p.fetchStatus === Y.a.SUCCESS && O.gte(E),
                        f = Object(K.a)().callWithGasPrice,
                        m = Object(V.a)({ onRequiresApproval: function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l.allowance(o, u.address);
                                            case 3:
                                                return t = e.sent, e.abrupt("return", t.gte(a));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return f(l, "approve", [u.address, s.toString()]) }, onConfirm: function() { return f(u, "mintNFT", [n]) }, onSuccess: function() { return i.nextStep() } }),
                        h = m.isApproving,
                        v = m.isApproved,
                        y = m.isConfirmed,
                        I = m.isConfirming,
                        P = m.handleApprove,
                        T = m.handleConfirm; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 1 }) }), Object(R.jsx)(g.R, { as: "h3", scale: "xl", mb: "24px", children: d("Get Starter Collectible") }), Object(R.jsx)(g.Ib, { as: "p", children: d("Every profile starts by making a \u201cstarter\u201d collectible (NFT).") }), Object(R.jsx)(g.Ib, { as: "p", children: d("This starter will also become your first profile picture.") }), Object(R.jsx)(g.Ib, { as: "p", mb: "24px", children: d("You can change your profile pic later if you get another approved Pancake Collectible.") }), Object(R.jsx)(g.t, { mb: "24px", children: Object(R.jsxs)(g.u, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "lg", mb: "8px", children: d("Choose your Starter!") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", children: d("Choose wisely: you can only ever make one starter collectible!") }), Object(R.jsx)(g.Ib, { as: "p", mb: "24px", color: "textSubtle", children: d("Cost: %num% CAKE", { num: Object(A.formatUnits)(E) }) }), ae.map((function(e) { return Object(R.jsx)(re, { name: "mintStarter", value: e.id, image: "/images/nfts/".concat(e.images.md), isChecked: n === e.id, onChange: function(e) { return r(Number(e)) }, disabled: h || I || y || !x, children: Object(R.jsx)(g.Ib, { bold: !0, children: e.name }) }, e.identifier) })), !x && Object(R.jsx)(g.Ib, { color: "failure", mb: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(A.formatUnits)(E) }) }), Object(R.jsx)(X.b, { isApproveDisabled: null === n || y || I || v, isApproving: h, isConfirmDisabled: !v || y || !x, isConfirming: I, onApprove: P, onConfirm: T })] }) }), Object(R.jsx)(ce, { onClick: i.nextStep, disabled: !y, children: d("Next Step") })] }) },
                oe = n(88),
                le = n(213),
                be = n(37),
                ue = n(391),
                je = function() { var e = Object(j.c)().account,
                        t = Object(f.b)(),
                        n = Object(x.c)((function(e) { return e.collectibles })),
                        r = n.isInitialized,
                        c = n.isLoading,
                        i = n.data,
                        a = Object.keys(i); return Object(b.useEffect)((function() {!r && e && t(Object(ue.b)(e)) }), [r, e, t]), { isInitialized: r, isLoading: c, tokenIds: i, nftsInWallet: G.a.pancake.filter((function(e) { return a.includes(e.identifier) })) } },
                de = n(92),
                pe = Object(v.e)(oe.a)(o || (o = Object(h.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                Oe = v.e.div(l || (l = Object(h.a)(["\n  margin-bottom: 24px;\n"]))),
                xe = function() { var e = Object(j.c)().library,
                        t = Object(b.useState)(!1),
                        n = Object(S.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(b.useState)(!1),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(b.useContext)(L),
                        u = l.selectedNft,
                        d = l.actions,
                        p = Object(C.b)().t,
                        O = je(),
                        x = O.isLoading,
                        f = O.nftsInWallet,
                        m = O.tokenIds,
                        h = Object(de.a)().toastError,
                        v = Object(K.a)().callWithGasPrice,
                        y = function() { var t = Object(k.a)(w.a.mark((function t() { var n, r; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(P.l)(u.nftAddress, e.getSigner()), t.next = 3, v(n, "approve", [Object(be.o)(), u.tokenId]);
                                        case 3:
                                            return r = t.sent, o(!0), t.next = 7, r.wait();
                                        case 7:
                                            t.sent.status ? (o(!1), c(!0)) : (h(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1));
                                        case 9:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return x || 0 !== f.length ? Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { fontSize: "20px", color: "textSubtle", bold: !0, children: p("Step %num%", { num: 2 }) }), Object(R.jsx)(g.R, { as: "h3", scale: "xl", mb: "24px", children: p("Set Profile Picture") }), Object(R.jsx)(g.t, { mb: "24px", children: Object(R.jsxs)(g.u, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "lg", mb: "8px", children: p("Choose collectible") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", children: p("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.") }), Object(R.jsxs)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: [p("Only approved Pancake Collectibles can be used."), Object(R.jsx)(pe, { to: "/collectibles", style: { marginLeft: "4px" }, children: p("See the list >") })] }), Object(R.jsx)(Oe, { children: x ? Object(R.jsx)(g.Bb, { height: "80px", mb: "16px" }) : f.map((function(e) { var t = Object(S.a)(m[e.identifier], 1)[0],
                                            n = Object(le.a)(); return Object(R.jsx)(re, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === u.tokenId, onChange: function(e) { return d.setSelectedNft(parseInt(e, 10), n) }, children: Object(R.jsx)(g.Ib, { bold: !0, children: e.name }) }, e.identifier) })) }), Object(R.jsx)(g.R, { as: "h4", scale: "lg", mb: "8px", children: p("Allow collectible to be locked") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "16px", children: p("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.") }), Object(R.jsx)(g.p, { isLoading: s, disabled: r || s || null === u.tokenId, onClick: y, endIcon: s ? Object(R.jsx)(g.i, { spin: !0, color: "currentColor" }) : void 0, id: "approveStarterCollectible", children: p("Enable") })] }) }), Object(R.jsx)(ce, { onClick: d.nextStep, disabled: null === u.tokenId || !r || s, children: p("Next Step") })] }) : Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.R, { scale: "xl", mb: "24px", children: p("Oops!") }), Object(R.jsx)(g.Ib, { bold: !0, fontSize: "20px", mb: "24px", children: p("We couldn\u2019t find any Pancake Collectibles in your wallet.") }), Object(R.jsx)(g.Ib, { as: "p", children: p("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.") })] }) },
                fe = n(891),
                me = n.n(fe),
                he = n(168),
                ve = function() { var e = ie(),
                        t = e.teamId,
                        n = e.actions,
                        r = Object(C.b)().t,
                        c = function() { var e = Object(x.c)((function(e) { return e.teams })),
                                t = e.isInitialized,
                                n = e.isLoading,
                                r = e.data,
                                c = Object(f.b)(); return Object(b.useEffect)((function() { c(Object(he.c)()) }), [c]), { teams: r, isInitialized: t, isLoading: n } }().teams,
                        i = function(e) { return n.setTeamId(parseInt(e, 10)) },
                        a = Object(b.useMemo)((function() { return me()(Object.values(c)) }), [c]); return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { fontSize: "20px", color: "textSubtle", bold: !0, children: r("Step %num%", { num: 3 }) }), Object(R.jsx)(g.R, { as: "h3", scale: "xl", mb: "24px", children: r("Join a Team") }), Object(R.jsx)(g.Ib, { as: "p", mb: "24px", children: r("It won\u2019t be possible to undo the choice you make for the foreseeable future!") }), Object(R.jsx)(g.t, { mb: "24px", children: Object(R.jsxs)(g.u, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "lg", mb: "8px", children: r("Join a Team") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: r("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!") }), a && a.map((function(e) { return Object(R.jsxs)(re, { name: "teams-selection", value: e.id, isChecked: t === e.id, image: "/images/teams/".concat(e.images.md), onChange: i, disabled: !e.isJoinable, children: [Object(R.jsx)(g.Ib, { bold: !0, children: e.name }), Object(R.jsxs)(g.P, { children: [Object(R.jsx)(g.I, { mr: "8px" }), Object(R.jsx)(g.Ib, { children: e.users.toLocaleString() })] })] }, e.name) }))] }) }), Object(R.jsx)(ce, { onClick: n.nextStep, disabled: null === t, children: r("Next Step") })] }) },
                ge = n(21),
                Ce = n(16);

            function ye(e, t) { Object(Ce.a)(2, arguments); var n = Object(ge.default)(e),
                    r = Object(ge.default)(t),
                    c = n.getTime() - r.getTime(); return c < 0 ? -1 : c > 0 ? 1 : c } var we = n(463),
                ke = n(464),
                Se = n(465);

            function Ie(e) { Object(Ce.a)(1, arguments); var t = Object(ge.default)(e); return Object(ke.default)(t).getTime() === Object(Se.default)(t).getTime() }

            function Pe(e, t) { Object(Ce.a)(2, arguments); var n, r = Object(ge.default)(e),
                    c = Object(ge.default)(t),
                    i = ye(r, c),
                    a = Math.abs(Object(we.default)(r, c)); if (a < 1) n = 0;
                else { 1 === r.getMonth() && r.getDate() > 27 && r.setDate(30), r.setMonth(r.getMonth() - i * a); var s = ye(r, c) === -i;
                    Ie(Object(ge.default)(e)) && 1 === a && 1 === ye(e, c) && (s = !1), n = i * (a - Number(s)) } return 0 === n ? 0 : n } var Ae = n(822),
                Ee = n(259),
                Te = n(407);

            function De(e) { return Object(Te.a)({}, e) } var Re = n(135),
                Ne = 1440,
                Fe = 43200;

            function ze(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(Ce.a)(2, arguments); var r = n.locale || Ee.a; if (!r.formatDistance) throw new RangeError("locale must contain formatDistance property"); var c = ye(e, t); if (isNaN(c)) throw new RangeError("Invalid time value"); var i, a, s = De(n);
                s.addSuffix = Boolean(n.addSuffix), s.comparison = c, c > 0 ? (i = Object(ge.default)(t), a = Object(ge.default)(e)) : (i = Object(ge.default)(e), a = Object(ge.default)(t)); var o, l = Object(Ae.a)(a, i),
                    b = (Object(Re.a)(a) - Object(Re.a)(i)) / 1e3,
                    u = Math.round((l - b) / 60); if (u < 2) return n.includeSeconds ? l < 5 ? r.formatDistance("lessThanXSeconds", 5, s) : l < 10 ? r.formatDistance("lessThanXSeconds", 10, s) : l < 20 ? r.formatDistance("lessThanXSeconds", 20, s) : l < 40 ? r.formatDistance("halfAMinute", null, s) : l < 60 ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", 1, s) : 0 === u ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", u, s); if (u < 45) return r.formatDistance("xMinutes", u, s); if (u < 90) return r.formatDistance("aboutXHours", 1, s); if (u < Ne) { var j = Math.round(u / 60); return r.formatDistance("aboutXHours", j, s) } if (u < 2520) return r.formatDistance("xDays", 1, s); if (u < Fe) { var d = Math.round(u / Ne); return r.formatDistance("xDays", d, s) } if (u < 86400) return o = Math.round(u / Fe), r.formatDistance("aboutXMonths", o, s); if ((o = Pe(a, i)) < 12) { var p = Math.round(u / Fe); return r.formatDistance("xMonths", p, s) } var O = o % 12,
                    x = Math.floor(o / 12); return O < 3 ? r.formatDistance("aboutXYears", x, s) : O < 9 ? r.formatDistance("overXYears", x, s) : r.formatDistance("almostXYears", x + 1, s) } var _e, Le, Me, We, Qe = n(712),
                Ue = n(94),
                He = n(193),
                qe = n(22),
                Ve = n(214),
                Be = n.n(Ve),
                Ye = n(116),
                Ge = n(96),
                Ke = function(e) { var t = e.account,
                        n = e.teamId,
                        r = e.selectedNft,
                        c = e.minimumCakeRequired,
                        i = e.allowance,
                        a = e.onDismiss,
                        s = Object(C.b)().t,
                        o = Object(B.n)(),
                        l = Object(f.b)(),
                        b = Object(de.a)().toastSuccess,
                        u = Object(B.c)(),
                        j = Object(K.a)().callWithGasPrice,
                        d = Object(V.a)({ onRequiresApproval: function() { var e = Object(k.a)(w.a.mark((function e() { var n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, u.allowance(t, o.address);
                                            case 3:
                                                return n = e.sent, e.abrupt("return", n.gte(c));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return j(u, "approve", [o.address, i.toJSON()]) }, onConfirm: function() { return j(o, "createProfile", [n, r.nftAddress, r.tokenId]) }, onSuccess: function() { var e = Object(k.a)(w.a.mark((function e(n) { var r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, l(Object(Ye.c)(t));
                                            case 3:
                                                a(), b(s("Profile created!"), Object(R.jsx)(Ge.b, { txHash: r.transactionHash }));
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        p = d.isApproving,
                        O = d.isApproved,
                        x = d.isConfirmed,
                        m = d.isConfirming,
                        h = d.handleApprove,
                        v = d.handleConfirm; return Object(R.jsxs)(g.fb, { title: s("Complete Profile"), onDismiss: a, children: [Object(R.jsx)(g.Ib, { color: "textSubtle", mb: "8px", children: s("Submitting NFT to contract and confirming User Name and Team.") }), Object(R.jsxs)(g.P, { justifyContent: "space-between", mb: "16px", children: [Object(R.jsx)(g.Ib, { children: s("Cost") }), Object(R.jsx)(g.Ib, { children: s("%num% CAKE", { num: Object(A.formatUnits)(T) }) })] }), Object(R.jsx)(X.b, { isApproveDisabled: x || m || O, isApproving: p, isConfirmDisabled: !O || x, isConfirming: m, onApprove: h, onConfirm: v })] }) };! function(e) { e.IDLE = "idle", e.CREATED = "created", e.NEW = "new" }(We || (We = {})); var Xe, Je, Ze = v.e.div(_e || (_e = Object(h.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),
                $e = Object(v.e)(g.W)(Le || (Le = Object(h.a)(["\n  padding-right: 40px;\n"]))),
                et = Object(v.e)(g.P)(Me || (Me = Object(h.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),
                tt = function() { var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ie(),
                        i = c.teamId,
                        a = c.selectedNft,
                        s = c.userName,
                        o = c.actions,
                        l = c.minimumCakeRequired,
                        u = c.allowance,
                        d = Object(C.b)().t,
                        p = Object(j.c)().account,
                        O = Object(de.a)().toastError,
                        x = Object(qe.a)().library,
                        f = Object(b.useState)(We.IDLE),
                        m = Object(S.a)(f, 2),
                        h = m[0],
                        v = m[1],
                        y = Object(b.useState)(!1),
                        I = Object(S.a)(y, 2),
                        P = I[0],
                        E = I[1],
                        D = Object(b.useState)(!1),
                        N = Object(S.a)(D, 2),
                        F = N[0],
                        z = N[1],
                        _ = Object(b.useState)(""),
                        L = Object(S.a)(_, 2),
                        M = L[0],
                        W = L[1],
                        Q = Object(Y.e)(),
                        U = Q.balance,
                        H = Q.fetchStatus === Y.a.SUCCESS && U.gte(T),
                        q = Object(g.dc)(Object(R.jsx)(Ke, { userName: s, selectedNft: a, account: p, teamId: i, minimumCakeRequired: l, allowance: u }), !1),
                        V = Object(S.a)(q, 1)[0],
                        B = h === We.CREATED,
                        G = Be()(function() { var e = Object(k.a)(w.a.mark((function e(t) { var n, r, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, z(!0), e.next = 4, fetch("".concat(Ue.a, "/api/users/valid/").concat(t));
                                        case 4:
                                            if (!(n = e.sent).ok) { e.next = 10; break }
                                            E(!0), W(""), e.next = 15; break;
                                        case 10:
                                            return e.next = 12, n.json();
                                        case 12:
                                            c = e.sent, E(!1), W(null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 15:
                                            return e.prev = 15, z(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, , 15, 18]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }(), 200),
                        K = function() { var e = Object(k.a)(w.a.mark((function e() { var t, n, r, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, z(!0), e.next = 4, Object(He.c)(x, p, s);
                                        case 4:
                                            return t = e.sent, e.next = 7, fetch("".concat(Ue.a, "/api/users/register"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: p, username: s, signature: t }) });
                                        case 7:
                                            if (!(n = e.sent).ok) { e.next = 12; break }
                                            v(We.CREATED), e.next = 16; break;
                                        case 12:
                                            return e.next = 14, n.json();
                                        case 14:
                                            c = e.sent, O(d("Error"), null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 16:
                                            e.next = 21; break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), O((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) ? e.t0.message : JSON.stringify(e.t0));
                                        case 21:
                                            return e.prev = 21, z(!1), e.finish(21);
                                        case 24:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 18, 21, 24]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(b.useEffect)((function() { p && function() { var e = Object(k.a)(w.a.mark((function e() { var t, n, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(Ue.a, "/api/users/").concat(p));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, t.ok ? (r = ze(Object(Qe.default)(n.created_at), new Date), W(d("Created %dateCreated% ago", { dateCreated: r })), o.setUserName(n.username), v(We.CREATED), E(!0)) : v(We.NEW), e.next = 13; break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), O(d("Error"), d("Unable to verify username"));
                                        case 13:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 10]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [p, v, E, W, o, O, d]), Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 4 }) }), Object(R.jsx)(g.R, { as: "h3", scale: "xl", mb: "24px", children: d("Set Your Name") }), Object(R.jsx)(g.Ib, { as: "p", mb: "24px", children: d("This name will be shown in team leaderboards and search results as long as your profile is active.") }), Object(R.jsx)(g.t, { mb: "24px", children: Object(R.jsxs)(g.u, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "lg", mb: "8px", children: d("Set Your Name") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: d("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.") }), h === We.IDLE ? Object(R.jsx)(g.Bb, { height: "40px", width: "240px" }) : Object(R.jsxs)(Ze, { children: [Object(R.jsx)($e, { onChange: function(e) { var t = e.target.value;
                                            o.setUserName(t), G(t) }, isWarning: s && !P, isSuccess: s && P, minLength: 3, maxLength: 15, disabled: B, placeholder: d("Enter your name..."), value: s }), Object(R.jsxs)(et, { children: [F && Object(R.jsx)(g.i, { spin: !0 }), !F && P && s && Object(R.jsx)(g.B, { color: "success" }), !F && !P && s && Object(R.jsx)(g.Wb, { color: "failure" })] })] }), Object(R.jsx)(g.Ib, { color: "textSubtle", fontSize: "14px", py: "4px", mb: "16px", style: { minHeight: "30px" }, children: M }), Object(R.jsx)(g.Ib, { as: "p", color: "failure", mb: "8px", children: d("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.") }), Object(R.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(R.jsxs)(g.P, { alignItems: "center", children: [Object(R.jsx)("div", { style: { flex: "none" }, children: Object(R.jsx)(g.z, { id: "checkbox", scale: "sm", checked: n, onChange: function() { return r(!n) } }) }), Object(R.jsx)(g.Ib, { ml: "8px", children: d("I understand that people can view my wallet if they know my username") })] }) }), Object(R.jsx)(g.p, { onClick: K, disabled: !P || B || F || !n, children: d("Confirm") })] }) }), Object(R.jsx)(g.p, { onClick: V, disabled: !P || !B, id: "completeProfileCreation", children: d("Complete Profile") }), !H && Object(R.jsx)(g.Ib, { color: "failure", mt: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(A.formatUnits)(T) }) })] }) },
                nt = function() { var e = Object(C.b)().t,
                        t = Object(b.useContext)(L),
                        n = t.isInitialized,
                        r = t.currentStep; return Object(j.c)().account ? n ? 0 === r ? Object(R.jsx)(se, {}) : 1 === r ? Object(R.jsx)(xe, {}) : 2 === r ? Object(R.jsx)(ve, {}) : 3 === r ? Object(R.jsx)(tt, {}) : null : Object(R.jsx)("div", { children: e("Loading...") }) : Object(R.jsx)(q, {}) },
                rt = function() { return Object(R.jsx)(M, { children: Object(R.jsxs)(d.b, { children: [Object(R.jsx)(U, {}), Object(R.jsx)(nt, {})] }) }) },
                ct = function() { var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(b.useState)(1),
                        i = Object(S.a)(c, 2),
                        a = i[0],
                        s = i[1],
                        o = Object(j.c)().account,
                        l = Object(b.useCallback)((function() { s((function(e) { return e + 1 })) }), [s]); return Object(b.useEffect)((function() { o && function() { var e = Object(k.a)(w.a.mark((function e() { var t, n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(P.j)(), e.prev = 1, e.next = 4, t.canClaim(o);
                                        case 4:
                                            n = e.sent, r(n), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 8]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [o, a, r]), { canClaim: n, checkClaimStatus: l } },
                it = function(e) { var t = e.onSuccess,
                        n = e.onDismiss,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(C.b)().t,
                        o = ct().canClaim,
                        l = Object(B.e)(),
                        u = Object(de.a)(),
                        j = u.toastSuccess,
                        d = u.toastError,
                        p = Object(K.a)().callWithGasPrice,
                        O = function() { var e = Object(k.a)(w.a.mark((function e() { var r, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p(l, "getCakeBack");
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (j(s("Success!"), Object(R.jsx)(Ge.b, { txHash: c.transactionHash })), t(), n()) : (a(!1), d(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(R.jsx)(g.fb, { title: s("Claim your Gift!"), onDismiss: n, children: Object(R.jsxs)("div", { style: { maxWidth: "640px" }, children: [Object(R.jsx)(g.Ib, { as: "p", children: s("Thank you for being a day-one user of Pancake Profiles!") }), Object(R.jsx)(g.Ib, { as: "p", mb: "8px", children: s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!") }), Object(R.jsx)(g.Ib, { as: "p", children: s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.") }), Object(R.jsx)(g.Ib, { as: "p", mb: "8px", children: s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.") }), Object(R.jsx)(g.Ib, { as: "p", mb: "24px", children: s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.") }), Object(R.jsx)(g.p, { endIcon: i ? Object(R.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, isLoading: i, onClick: O, disabled: !o, children: s("Claim Your CAKE") })] }) }) },
                at = v.e.div(Xe || (Xe = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                st = n(19);! function(e) { e.START = "start", e.CHANGE = "change", e.REMOVE = "remove", e.APPROVE = "approve" }(Je || (Je = {})); var ot, lt, bt, ut, jt, dt, pt, Ot, xt, ft, mt, ht, vt, gt, Ct, yt, wt = function(e, t) { switch (t.type) {
                        case "set_view":
                            return Object(I.a)(Object(I.a)({}, e), {}, { currentView: t.view, previousView: e.currentView });
                        case "go_previous":
                            return Object(I.a)(Object(I.a)({}, e), {}, { currentView: e.previousView, previousView: e.currentView });
                        default:
                            return e } },
                kt = function() { var e = Object(b.useReducer)(wt, { currentView: Je.START, previousView: null }),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1]; return Object(I.a)(Object(I.a)({}, n), {}, { goToStart: function() { return r({ type: "set_view", view: Je.START }) }, goToChange: function() { return r({ type: "set_view", view: Je.CHANGE }) }, goToRemove: function() { return r({ type: "set_view", view: Je.REMOVE }) }, goToApprove: function() { return r({ type: "set_view", view: Je.APPROVE }) }, goPrevious: function() { return r({ type: "go_previous" }) } }) },
                St = n(31),
                It = n(54),
                Pt = n(55),
                At = n(256),
                Et = function() { var e = Object(C.b)().t,
                        t = Object(b.useState)({ numberCakeToReactivate: It.a.BigNumber.from(0), numberCakeToRegister: It.a.BigNumber.from(0), numberCakeToUpdate: It.a.BigNumber.from(0) }),
                        n = Object(S.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(de.a)().toastError; return Object(b.useEffect)((function() {
                        (function() { var t = Object(k.a)(w.a.mark((function t() { var n, r, a, s, o, l, b, u, j; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = ["numberCakeToReactivate", "numberCakeToRegister", "numberCakeToUpdate"].map((function(e) { return { address: Object(be.o)(), name: e } })), t.next = 4, Object(Pt.b)(At, n);
                                        case 4:
                                            r = t.sent, a = Object(S.a)(r, 3), s = Object(S.a)(a[0], 1), o = s[0], l = Object(S.a)(a[1], 1), b = l[0], u = Object(S.a)(a[2], 1), j = u[0], c({ numberCakeToReactivate: o, numberCakeToRegister: b, numberCakeToUpdate: j }), t.next = 18; break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), i(e("Error"), e("Could not retrieve CAKE costs for profile"));
                                        case 18:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 15]
                                ]) }))); return function() { return t.apply(this, arguments) } })()() }), [c, i, e]), r },
                Tt = n(780),
                Dt = Object(v.e)(g.p).attrs({ variant: "secondary" })(ot || (ot = Object(h.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure })),
                Rt = v.e.div(lt || (lt = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Nt = function(e) { var t = e.goToApprove,
                        n = e.goToChange,
                        r = e.goToRemove,
                        c = e.onDismiss,
                        i = Object(b.useState)(null),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(O.b)().profile,
                        u = Et(),
                        d = u.numberCakeToUpdate,
                        p = u.numberCakeToReactivate,
                        x = l.isActive ? d : p,
                        f = Object(Y.e)(),
                        m = f.balance,
                        h = f.fetchStatus === Y.a.SUCCESS && m.gte(x),
                        v = Object(C.b)().t,
                        y = Object(j.c)().account,
                        I = Object(B.c)(),
                        P = l.isActive ? d : p; return Object(b.useEffect)((function() { y && function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, I.allowance(y, Object(be.o)());
                                        case 2:
                                            t = e.sent, o(t.lt(P));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [y, P, o, I]), l ? Object(R.jsxs)(g.P, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(R.jsx)(Rt, { children: Object(R.jsx)(Tt.a, { profile: l }) }), Object(R.jsx)(g.P, { alignItems: "center", style: { height: "48px" }, justifyContent: "center", children: Object(R.jsx)(g.Ib, { as: "p", color: "failure", children: !h && v("%minimum% CAKE required to change profile pic", { minimum: Object(St.a)(x) }) }) }), l.isActive ? Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Change Profile Pic") }), Object(R.jsx)(Dt, { width: "100%", onClick: r, children: v("Remove Profile Pic") })] }) : Object(R.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Reactivate Profile") }), Object(R.jsx)(g.p, { variant: "text", width: "100%", onClick: c, children: v("Close Window") })] }) : null },
                Ft = function(e) { var t = e.onDismiss,
                        n = Object(b.useState)(!1),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(b.useState)(!1),
                        s = Object(S.a)(a, 2),
                        o = s[0],
                        l = s[1],
                        u = Object(O.b)().profile,
                        d = Et().numberCakeToReactivate,
                        p = Object(C.b)().t,
                        x = Object(B.n)(),
                        m = Object(K.a)().callWithGasPrice,
                        h = Object(j.c)().account,
                        v = Object(de.a)(),
                        y = v.toastSuccess,
                        I = v.toastError,
                        P = Object(f.b)(),
                        A = function() { var e = Object(k.a)(w.a.mark((function e() { var n, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m(x, "pauseProfile");
                                        case 2:
                                            return n = e.sent, l(!0), e.next = 6, n.wait();
                                        case 6:
                                            if (!(r = e.sent).status) { e.next = 14; break } return e.next = 10, P(Object(Ye.c)(h));
                                        case 10:
                                            y(p("Profile Paused!"), Object(R.jsx)(Ge.b, { txHash: r.transactionHash })), t(), e.next = 16; break;
                                        case 14:
                                            I(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), l(!1);
                                        case 16:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return u ? Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { as: "p", color: "failure", mb: "24px", children: p("This will suspend your profile and send your Collectible back to your wallet") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: p("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: p("Cost to reactivate in the future: %cost% CAKE", { cost: Object(St.a)(d) }) }), Object(R.jsx)("label", { htmlFor: "acknowledgement", style: { cursor: "pointer", display: "block", marginBottom: "24px" }, children: Object(R.jsxs)(g.P, { alignItems: "center", children: [Object(R.jsx)(g.z, { id: "acknowledgement", checked: c, onChange: function() { return i(!c) }, scale: "sm" }), Object(R.jsx)(g.Ib, { ml: "8px", children: p("I understand") })] }) }), Object(R.jsx)(g.p, { width: "100%", isLoading: o, endIcon: o ? Object(R.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: !c || o, onClick: A, mb: "8px", children: p("Confirm") }), Object(R.jsx)(g.p, { variant: "text", width: "100%", onClick: t, children: p("Close Window") })] }) : null },
                zt = function(e) { var t = e.onDismiss,
                        n = Object(b.useState)({ tokenId: null, nftAddress: null }),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(C.b)().t,
                        s = je(),
                        o = s.isLoading,
                        l = s.tokenIds,
                        u = s.nftsInWallet,
                        d = Object(f.b)(),
                        p = Object(O.b)().profile,
                        x = Object(B.n)(),
                        m = Object(j.c)(),
                        h = m.account,
                        v = m.library,
                        y = Object(de.a)().toastSuccess,
                        I = Object(K.a)().callWithGasPrice,
                        A = Object(V.a)({ onApprove: function() { var e = Object(P.l)(c.nftAddress, v.getSigner()); return I(e, "approve", [Object(be.o)(), c.tokenId]) }, onConfirm: function() { return p.isActive ? I(x, "updateProfile", [c.nftAddress, c.tokenId]) : I(x, "reactivateProfile", [c.nftAddress, c.tokenId]) }, onSuccess: function() { var e = Object(k.a)(w.a.mark((function e(n) { var r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, d(Object(Ye.c)(h));
                                            case 3:
                                                y(a("Profile Updated!"), Object(R.jsx)(Ge.b, { txHash: r.transactionHash })), t();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        E = A.isApproving,
                        T = A.isApproved,
                        D = A.isConfirmed,
                        N = A.isConfirming,
                        F = A.handleApprove,
                        z = A.handleConfirm; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: a("Choose a new Collectible to use as your profile pic.") }), o ? Object(R.jsx)(g.Bb, { height: "80px", mb: "16px" }) : u.map((function(e) { var t = Object(S.a)(l[e.identifier], 1)[0]; return Object(R.jsx)(re, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === c.tokenId, onChange: function(e) { i({ tokenId: Number(e), nftAddress: Object(le.a)() }) }, disabled: E || N || D, children: Object(R.jsx)(g.Ib, { bold: !0, children: e.name }) }, e.identifier) })), !o && 0 === u.length && Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "16px", children: a("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!") }), Object(R.jsx)(g.Ib, { as: "p", color: "textSubtle", mb: "24px", children: a("Make sure you have a Pancake Collectible in your wallet and try again!") })] }), Object(R.jsx)(X.b, { isApproveDisabled: D || N || T || null === c.tokenId, isApproving: E, isConfirmDisabled: !T || D || null === c.tokenId, isConfirming: N, onApprove: F, onConfirm: z }), Object(R.jsx)(g.p, { variant: "text", width: "100%", onClick: t, disabled: E || N, children: a("Close Window") })] }) },
                _t = function(e) { var t = e.goToChange,
                        n = e.onDismiss,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(O.b)().profile,
                        o = Object(C.b)().t,
                        l = Et(),
                        u = l.numberCakeToUpdate,
                        j = l.numberCakeToReactivate,
                        d = Object(B.c)(),
                        p = Object(de.a)().toastError,
                        x = s.isActive ? u : j,
                        f = function() { var e = Object(k.a)(w.a.mark((function e() { var n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.approve(Object(be.o)(), x.mul(2).toString());
                                        case 2:
                                            return n = e.sent, a(!0), e.next = 6, n.wait();
                                        case 6:
                                            e.sent.status ? t() : (p(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return s ? Object(R.jsxs)(g.P, { flexDirection: "column", children: [Object(R.jsxs)(g.P, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(R.jsx)(g.Ib, { children: s.isActive ? o("Cost to update:") : o("Cost to reactivate:") }), Object(R.jsxs)(g.Ib, { children: [Object(St.a)(x), " CAKE"] })] }), Object(R.jsx)(g.p, { disabled: i, isLoading: i, endIcon: i ? Object(R.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, width: "100%", mb: "8px", onClick: f, children: o("Enable") }), Object(R.jsx)(g.p, { variant: "text", width: "100%", onClick: n, disabled: i, children: o("Close Window") })] }) : null },
                Lt = (bt = {}, Object(st.a)(bt, Je.START, "Edit Profile"), Object(st.a)(bt, Je.CHANGE, "Change Profile Pic"), Object(st.a)(bt, Je.REMOVE, "Remove Profile Pic"), Object(st.a)(bt, Je.APPROVE, "Enable CAKE"), bt),
                Mt = function(e) { var t = e.onDismiss,
                        n = kt(),
                        r = n.currentView,
                        c = n.goToChange,
                        i = n.goToRemove,
                        a = n.goToApprove,
                        s = n.goPrevious,
                        o = Object(C.b)().t,
                        l = Lt[r],
                        b = r === Je.START,
                        u = b ? null : function() { return s() }; return Object(R.jsx)(g.fb, { title: o(l), onBack: u, onDismiss: t, hideCloseButton: !b, children: Object(R.jsxs)("div", { style: { maxWidth: "400px" }, children: [r === Je.START && Object(R.jsx)(Nt, { goToApprove: a, goToChange: c, goToRemove: i, onDismiss: t }), r === Je.REMOVE && Object(R.jsx)(Ft, { onDismiss: t }), r === Je.CHANGE && Object(R.jsx)(zt, { onDismiss: t }), r === Je.APPROVE && Object(R.jsx)(_t, { goToChange: c, onDismiss: t })] }) }) },
                Wt = function() { var e = Object(C.b)().t,
                        t = ct(),
                        n = t.canClaim,
                        r = t.checkClaimStatus,
                        c = Object(g.dc)(Object(R.jsx)(it, { onSuccess: r })),
                        i = Object(S.a)(c, 1)[0],
                        a = Object(g.dc)(Object(R.jsx)(Mt, {}), !1),
                        s = Object(S.a)(a, 1)[0],
                        o = Object(O.b)().hasProfile; return Object(R.jsx)(at, { children: Object(R.jsxs)(g.P, { flexDirection: ["column", null, "row"], alignItems: ["start", null, "center"], justifyContent: "space-between", children: [Object(R.jsxs)("div", { children: [Object(R.jsx)(g.R, { as: "h1", scale: "xxl", mb: "8px", color: "secondary", children: e("Your Profile") }), Object(R.jsx)(g.R, { as: "h2", scale: "lg", mb: "16px", children: e("Check your stats and collect achievements") }), o && Object(R.jsx)(g.p, { onClick: s, children: e("Edit Profile") })] }), n && Object(R.jsx)(g.p, { variant: "tertiary", onClick: i, startIcon: Object(R.jsx)(g.vb, {}), children: e("You\u2019ve got a gift to claim!") })] }) }) },
                Qt = ["badge"],
                Ut = Object(v.e)(g.o)(ut || (ut = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ht = v.e.img(jt || (jt = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                qt = function(e) { var t = e.badge,
                        n = Object(J.a)(e, Qt); return t ? Object(R.jsx)(Ht, Object(I.a)({ src: "/images/achievements/".concat(t), alt: "achievement badge" }, n)) : Object(R.jsx)(Ut, {}) },
                Vt = ["title"],
                Bt = function(e) { var t = e.title,
                        n = Object(J.a)(e, Vt),
                        r = Object(C.b)().t; if ("string" === typeof t) return Object(R.jsx)(g.Ib, Object(I.a)(Object(I.a)({ bold: !0 }, n), {}, { children: t })); var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(R.jsx)(g.Ib, Object(I.a)(Object(I.a)({ bold: !0 }, n), {}, { children: r(c, a) })) },
                Yt = ["description"],
                Gt = Object(v.e)(g.Ib).attrs({ as: "p", fontSize: "14px" })(dt || (dt = Object(h.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Kt = function(e) { var t = e.description,
                        n = Object(J.a)(e, Yt),
                        r = Object(C.b)().t; if (!t) return null; if ("string" === typeof t) return Object(R.jsx)(g.Ib, Object(I.a)(Object(I.a)({ as: "p", color: "textSubtle", fontSize: "14px" }, n), {}, { children: t })); var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(R.jsx)(Gt, Object(I.a)(Object(I.a)({ color: "textSubtle" }, n), {}, { children: r(c, a) })) },
                Xt = Object(v.e)(g.P)(pt || (pt = Object(h.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),
                Jt = function(e) { var t = e.achievement; return Object(R.jsxs)(g.P, { children: [Object(R.jsx)(qt, { badge: t.badge }), Object(R.jsxs)(Xt, { children: [Object(R.jsx)(Bt, { title: t.title }), Object(R.jsx)(Kt, { description: t.description })] }), Object(R.jsxs)(g.P, { alignItems: "center", children: [Object(R.jsx)(g.wb, { width: "18px", color: "textSubtle", mr: "4px" }), Object(R.jsx)(g.Ib, { color: "textSubtle", children: t.points.toLocaleString() })] })] }) },
                Zt = v.e.div(Ot || (Ot = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                $t = function() { var e = Object(C.b)().t,
                        t = Object(x.c)((function(e) { return e.achievements.data })); return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(Zt, { children: t.map((function(e) { return Object(R.jsx)(Jt, { achievement: e }, e.id) })) }), 0 === t.length && Object(R.jsx)(g.P, { alignItems: "center", justifyContent: "center", style: { height: "64px" }, children: Object(R.jsx)(g.R, { as: "h5", scale: "md", color: "textDisabled", children: e("No achievements yet!") }) })] }) },
                en = n(133),
                tn = n(333),
                nn = v.e.div(xt || (xt = Object(h.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                rn = ["points"],
                cn = function(e) { var t = e.points,
                        n = Object(J.a)(e, rn),
                        r = Object(C.b)().t,
                        c = t.toLocaleString(); return Object(R.jsxs)(g.P, Object(I.a)(Object(I.a)({ alignItems: "center" }, n), {}, { children: [Object(R.jsx)(g.wb, { mr: "4px", color: "textSubtle" }), Object(R.jsx)(g.Ib, { color: "textSubtle", children: r("%num% points", { num: c }) })] })) },
                an = Object(v.e)(g.P)(ft || (ft = Object(h.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                sn = v.e.div(mt || (mt = Object(h.a)(["\n  flex: 1;\n"]))),
                on = Object(v.e)(g.P)(ht || (ht = Object(h.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                ln = function(e) { var t = e.achievement,
                        n = e.onCollectSuccess,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(C.b)().t,
                        o = Object(B.m)(),
                        l = Object(de.a)(),
                        u = l.toastError,
                        j = l.toastSuccess,
                        d = Object(K.a)().callWithGasPrice,
                        p = function() { var e = Object(k.a)(w.a.mark((function e() { var r, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d(o, "getPoints", [t.address]);
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (a(!1), n(t), j(s("Points Collected!"), Object(R.jsx)(Ge.b, { txHash: c.transactionHash }))) : (u(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(R.jsxs)(an, { children: [Object(R.jsx)(qt, { badge: t.badge }), Object(R.jsxs)(on, { children: [Object(R.jsxs)(sn, { children: [Object(R.jsx)(Bt, { title: t.title }), Object(R.jsx)(Kt, { description: t.description })] }), Object(R.jsx)(cn, { points: t.points, px: [0, null, null, "32px"], mb: ["16px", null, null, 0] }), Object(R.jsx)(nn, { children: Object(R.jsx)(g.p, { onClick: p, isLoading: i, endIcon: i ? Object(R.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: i, variant: "secondary", children: s("Collect") }) })] })] }) },
                bn = function() { var e = Object(b.useState)([]),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(C.b)().t,
                        i = Object(f.b)(),
                        a = Object(O.b)().profile,
                        s = Object(j.c)().account;
                    Object(b.useEffect)((function() { s && function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(tn.c)(s);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [s, i, r]); var o = function(e) { i(Object(m.a)(e)), i(Object(Ye.a)(e.points)), r((function(t) { return t.filter((function(t) { return t.id !== e.id })) })) }; if (!(null === a || void 0 === a ? void 0 : a.isActive)) return null; if (0 === n.length) return null; var l = Object(en.sumBy)(n, "points"); return Object(R.jsxs)(g.t, { isActive: !0, mb: "32px", children: [Object(R.jsx)(g.w, { children: Object(R.jsx)(g.P, { flexDirection: ["column", null, "row"], justifyContent: ["start", null, "space-between"], children: Object(R.jsxs)(g.P, { alignItems: "center", mb: ["16px", null, 0], children: [Object(R.jsx)(g.wb, { width: "32px", mr: "8px" }), Object(R.jsx)(g.R, { scale: "lg", children: c("%num% Points to Collect", { num: l }) })] }) }) }), Object(R.jsx)(g.u, { children: n.map((function(e) { return Object(R.jsx)(ln, { achievement: e, onCollectSuccess: o }, e.address) })) })] }) },
                un = function(e) { var t = e.children,
                        n = Object(C.b)().t; return Object(R.jsxs)(g.P, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(R.jsx)(g.o, { width: "72px", height: "72px" }), Object(R.jsx)(g.R, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] }) },
                jn = function(e) { var t = e.activeIndex,
                        n = void 0 === t ? 0 : t,
                        r = Object(C.b)().t; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.P, { mb: "24px", children: Object(R.jsx)(oe.a, { to: "/teams", children: Object(R.jsxs)(g.P, { alignItems: "center", children: [Object(R.jsx)(g.D, { color: "primary" }), Object(R.jsx)(g.Ib, { color: "primary", children: r("Teams Overview") })] }) }) }), Object(R.jsx)(g.P, { mb: "24px", justifyContent: "center", children: Object(R.jsxs)(g.q, { activeIndex: n, variant: "subtle", scale: "sm", children: [Object(R.jsx)(g.r, { as: oe.a, to: "/profile/tasks", children: r("Task Center") }), Object(R.jsx)(g.r, { as: oe.a, to: "/profile", children: r("Public Profile") })] }) })] }) },
                dn = function() { var e = Object(C.b)().t; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(jn, {}), Object(R.jsx)(bn, {}), Object(R.jsxs)(g.t, { mb: "32px", children: [Object(R.jsx)(g.w, { children: Object(R.jsx)(g.P, { alignItems: "center", justifyContent: "space-between", children: Object(R.jsxs)("div", { children: [Object(R.jsx)(g.R, { scale: "lg", mb: "8px", children: e("Achievements") }), Object(R.jsx)(g.Ib, { as: "p", children: e("Earn more points for completing larger quests!") })] }) }) }), Object(R.jsx)(g.u, { children: Object(R.jsx)($t, {}) })] }), Object(R.jsxs)(g.t, { mb: "32px", children: [Object(R.jsx)(g.w, { children: Object(R.jsx)(g.P, { alignItems: "center", justifyContent: "space-between", children: Object(R.jsxs)("div", { children: [Object(R.jsx)(g.R, { scale: "lg", mb: "8px", children: e("Task Center") }), Object(R.jsx)(g.Ib, { as: "p", children: e("Earn points by completing regular tasks!") }), Object(R.jsx)(g.Ib, { as: "p", children: e("Collecting points for these tasks makes them available again.") })] }) }) }), Object(R.jsx)(g.u, { children: Object(R.jsx)(un, {}) })] })] }) },
                pn = n(48),
                On = n(38),
                xn = Object(v.e)(g.w)(vt || (vt = Object(h.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                fn = v.e.img(gt || (gt = Object(h.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))),
                mn = function(e) { var t = e.nft; return Object(R.jsxs)("div", { children: [Object(R.jsx)(fn, { src: "/images/nfts/".concat(t.images.lg) }), Object(R.jsx)(g.Ib, { bold: !0, mb: "8px", children: t.name }), Object(R.jsx)(g.Ib, { as: "p", fontSize: "12px", color: "textSubtle", children: t.description })] }) },
                hn = v.e.div(Ct || (Ct = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                vn = function() { var e = Object(C.b)().t,
                        t = je().nftsInWallet; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "md", mb: "8px", children: e("Pancake Collectibles") }), Object(R.jsx)(g.Ib, { as: "p", children: e("Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.") }), Object(R.jsx)(g.Ib, { as: "p", children: e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.") }), t.length > 0 && Object(R.jsx)(hn, { children: t.map((function(e) { return Object(R.jsx)(mn, { nft: e }, e.identifier) })) }), 0 === t.length && Object(R.jsx)(g.P, { justifyContent: "center", p: "32px", children: Object(R.jsx)(g.Ib, { fontSize: "20px", bold: !0, color: "textDisabled", children: e("No NFTs Found") }) }), Object(R.jsxs)(g.P, { alignItems: "center", justifyContent: "flex-end", children: [Object(R.jsx)(oe.a, { to: "/collectibles", children: e("See all approved Pancake Collectibles") }), Object(R.jsx)(g.E, {})] })] }) },
                gn = Object(v.e)(g.Ib)(yt || (yt = Object(h.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            gn.defaultProps = { p: "24px" }; var Cn, yn, wn, kn, Sn, In, Pn, An, En, Tn = gn,
                Dn = ["icon", "title", "subtitle", "isDisabled"],
                Rn = function(e) { var t = e.icon,
                        n = e.title,
                        r = e.subtitle,
                        c = e.isDisabled,
                        i = void 0 !== c && c,
                        a = Object(J.a)(e, Dn); return Object(R.jsx)(Tn, Object(I.a)(Object(I.a)({}, a), {}, { children: Object(R.jsxs)(g.P, { alignItems: "start", children: [Object(R.jsx)(t, { width: "44px", mr: "24px", color: i ? "textDisabled" : "currentColor" }), Object(R.jsxs)("div", { children: [Object(R.jsx)(g.R, { as: "h3", scale: "xl", color: i ? "textDisabled" : "text", children: n }), Object(R.jsx)(g.Ib, { textTransform: "uppercase", color: i ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: r })] })] }) })) },
                Nn = v.e.div(Cn || (Cn = Object(h.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Fn = v.e.div(yn || (yn = Object(h.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), Nn),
                zn = v.e.div(wn || (wn = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                _n = function(e) { var t = e.profile,
                        n = Object(g.dc)(Object(R.jsx)(Mt, {}), !1),
                        r = Object(S.a)(n, 1)[0]; return Object(R.jsxs)(Fn, { onClick: r, children: [Object(R.jsx)(zn, { children: Object(R.jsx)(Tt.a, { profile: t }) }), Object(R.jsx)(Nn, {})] }) },
                Ln = v.e.div(kn || (kn = Object(h.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Mn = Object(v.e)(g.R)(Sn || (Sn = Object(h.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Wn = v.e.div(In || (In = Object(h.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))),
                Qn = Object(v.e)(g.Ib)(Pn || (Pn = Object(h.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Un = Object(v.e)(g.X)(An || (An = Object(h.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Hn = v.e.div(En || (En = Object(h.a)(["\n  margin-bottom: 40px;\n"]))),
                qn = function() { var e = Object(j.c)().account,
                        t = Object(O.b)().profile,
                        n = Object(pn.r)(),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(C.b)().t; if (!e) return Object(R.jsx)(q, {}); var s = t.username,
                        o = t.team,
                        l = t.isActive,
                        b = t.points,
                        u = c ? g.Tb : g.Ub; return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(jn, { activeIndex: 1 }), Object(R.jsx)("div", { children: Object(R.jsxs)(g.t, { children: [Object(R.jsxs)(xn, { children: [Object(R.jsxs)(g.P, { alignItems: ["start", null, "center"], flexDirection: ["column", null, "row"], children: [Object(R.jsx)(_n, { profile: t }), Object(R.jsxs)(Ln, { children: [Object(R.jsxs)(g.P, { alignItems: "center", children: [Object(R.jsxs)(Mn, { children: ["@", c ? s : s.replace(/./g, "*")] }), Object(R.jsx)(u, { ml: "4px", onClick: function() { i(!c) }, cursor: "pointer" })] }), Object(R.jsx)(g.P, { alignItems: "center", children: Object(R.jsxs)(Un, { href: Object(On.e)(e, "address"), color: "text", external: !0, children: [e, Object(R.jsx)(g.pb, { ml: "4px" })] }) }), Object(R.jsx)(Qn, { bold: !0, children: o.name })] })] }), Object(R.jsx)(Wn, { children: l ? Object(R.jsx)(g.Hb, { startIcon: Object(R.jsx)(g.A, { width: "18px" }), outline: !0, children: a("Active") }) : Object(R.jsx)(g.Hb, { variant: "failure", startIcon: Object(R.jsx)(g.l, { width: "18px" }), outline: !0, children: a("Paused") }) })] }), Object(R.jsxs)(g.u, { children: [Object(R.jsx)(Rn, { icon: g.wb, title: b, subtitle: a("Points"), mb: "24px" }), Object(R.jsxs)(Hn, { children: [Object(R.jsx)(g.R, { as: "h4", scale: "md", mb: "16px", children: a("Achievements") }), Object(R.jsx)($t, {})] }), Object(R.jsx)(vn, {})] })] }) })] }) };
            t.default = function() { var e = Object(O.b)(),
                    t = e.isInitialized,
                    n = e.isLoading,
                    r = e.hasProfile,
                    c = Object(j.c)().account; return function() { var e = Object(j.c)().account,
                        t = Object(f.b)();
                    Object(b.useEffect)((function() { e && t(Object(m.c)(e)) }), [e, t]) }(), !t || n ? Object(R.jsx)(p.a, {}) : c && !r ? Object(R.jsx)(d.b, { children: Object(R.jsx)(rt, {}) }) : Object(R.jsxs)(d.b, { children: [Object(R.jsx)(Wt, {}), Object(R.jsx)(u.b, { exact: !0, path: "/profile", children: Object(R.jsx)(qn, {}) }), Object(R.jsx)(u.b, { path: "/profile/tasks", children: Object(R.jsx)(dn, {}) })] }) } }, 764: function(e, t, n) { "use strict"; var r = n(3),
                c = n.n(r),
                i = n(13),
                a = n(9),
                s = n(6),
                o = n(1),
                l = n(133),
                b = n(45),
                u = n(92),
                j = n(14),
                d = { approvalState: "idle", confirmState: "idle" },
                p = function(e, t) { switch (t.type) {
                        case "requires_approval":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e } };
            t.a = function(e) { var t = e.onApprove,
                    n = e.onConfirm,
                    r = e.onRequiresApproval,
                    s = e.onSuccess,
                    O = void 0 === s ? l.noop : s,
                    x = e.onApproveSuccess,
                    f = void 0 === x ? l.noop : x,
                    m = Object(j.b)().t,
                    h = Object(b.c)().account,
                    v = Object(o.useReducer)(p, d),
                    g = Object(a.a)(v, 2),
                    C = g[0],
                    y = g[1],
                    w = Object(o.useRef)(r),
                    k = Object(u.a)().toastError; return Object(o.useEffect)((function() { h && w.current && w.current().then((function(e) { e && y({ type: "requires_approval" }) })) }), [h, w, y]), { isApproving: "loading" === C.approvalState, isApproved: "success" === C.approvalState, isConfirming: "loading" === C.confirmState, isConfirmed: "success" === C.confirmState, handleApprove: function() { var e = Object(i.a)(c.a.mark((function e() { var n, r; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, y({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (r = e.sent).status && (y({ type: "approve_receipt" }), f({ state: C, receipt: r })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), y({ type: "approve_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }(), handleConfirm: function() { var e = Object(i.a)(c.a.mark((function e() { var t, r; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return y({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (r = e.sent).status && (y({ type: "confirm_receipt" }), O({ state: C, receipt: r })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), y({ type: "confirm_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }() } } }, 765: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return s })); var r, c, i, a, s, o = n(8),
                l = (n(1), n(5)),
                b = n(2),
                u = n(14),
                j = n(0);! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(s || (s = {})); var d = l.e.div(r || (r = Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = Object(l.e)(b.p)(c || (c = Object(o.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = { width: "24px", color: "textDisabled" },
                x = Object(l.e)(b.E).attrs(O)(i || (i = Object(o.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(l.e)(b.C).attrs(O)(a || (a = Object(o.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(j.jsx)(b.i, { spin: !0, color: "currentColor" });
            t.b = function(e) { var t = e.isApproveDisabled,
                    n = e.isApproving,
                    r = e.isConfirming,
                    c = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    o = e.buttonArrangement,
                    l = void 0 === o ? s.ROW : o,
                    O = e.confirmLabel,
                    h = e.confirmId,
                    v = Object(u.b)().t,
                    g = null !== O && void 0 !== O ? O : v("Confirm"); return l === s.ROW ? Object(j.jsxs)(d, { children: [Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { disabled: t, onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(j.jsxs)(b.P, { justifyContent: "center", children: [Object(j.jsx)(x, {}), Object(j.jsx)(f, {})] }), Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: c, isLoading: r, endIcon: r ? m : void 0, children: r ? v("Confirming") : g }) })] }) : Object(j.jsx)(j.Fragment, { children: t ? Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: c, isLoading: r, endIcon: r ? m : void 0, children: r ? v("Confirming") : g }) }) : Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) }) } }, 780: function(e, t, n) { "use strict"; var r, c, i, a = n(8),
                s = (n(1), n(2)),
                o = n(5),
                l = n(0),
                b = o.e.img(r || (r = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                u = o.e.div(c || (c = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(o.e)(s.nb)(i || (i = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, r = e.profile; return Object(l.jsxs)(u, { bg: "/images/nfts/".concat(null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!r.isActive && Object(l.jsx)(j, {}), Object(l.jsx)(b, { src: "/images/teams/".concat(r.team.images.alt), alt: r.team.name })] }) } }, 781: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })); var r = n(21),
                c = n(16);

            function i(e, t) { Object(c.a)(2, arguments); var n = Object(r.default)(e),
                    i = Object(r.default)(t); return n.getTime() - i.getTime() } }, 822: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })); var r = n(781),
                c = n(16);

            function i(e, t) { Object(c.a)(2, arguments); var n = Object(r.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) } }, 823: function(e, t, n) { var r = n(459);
            e.exports = function(e, t) { var n = -1,
                    c = e.length,
                    i = c - 1; for (t = void 0 === t ? c : t; ++n < t;) { var a = r(n, i),
                        s = e[a];
                    e[a] = e[n], e[n] = s } return e.length = t, e } }, 891: function(e, t, n) { var r = n(892),
                c = n(893),
                i = n(99);
            e.exports = function(e) { return (i(e) ? r : c)(e) } }, 892: function(e, t, n) { var r = n(461),
                c = n(823);
            e.exports = function(e) { return c(r(e)) } }, 893: function(e, t, n) { var r = n(823),
                c = n(460);
            e.exports = function(e) { return r(c(e)) } } }
]);
//# sourceMappingURL=4.367fbb63.chunk.js.map