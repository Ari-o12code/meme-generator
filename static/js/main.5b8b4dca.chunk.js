(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),u=a(5),o=a.n(u),r=(a(16),a(18),a(6)),m=a.n(r),i=function(){return c.a.createElement("nav",{className:"nav-container"},c.a.createElement("img",{src:m.a,alt:"Troll Face"}),c.a.createElement("h3",null,"Meme Generator"),c.a.createElement("p",null,"React course - Project 3"))},f=a(1),A=a(2),l=a(3),E=function(){var e=Object(n.useState)({toptext:"",bottomtext:"",randomImage:""}),t=Object(l.a)(e,2),a=t[0],u=t[1],o=Object(n.useState)([]),r=Object(l.a)(o,2),m=r[0],i=r[1];Object(n.useEffect)(function(){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(e){return i(e.data.memes)})},[]);var E=function(e){var t=e.target,a=t.name,n=t.value;u(function(e){return Object(A.a)({},e,Object(f.a)({},a,n))})};return c.a.createElement("main",{className:"main-container"},c.a.createElement("div",{className:"form"},c.a.createElement("input",{className:"input-el",type:"text",placeholder:"Top text",name:"toptext",value:a.toptext,onChange:E}),c.a.createElement("input",{className:"input-el",type:"text",placeholder:"Bottom text",name:"bottomtext",value:a.bottomtext,onChange:E}),c.a.createElement("button",{className:"btn",onClick:function(){var e=Math.floor(Math.random()*m.length),t=m[e].url;u(function(e){return Object(A.a)({},e,{randomImage:t})})}},"Get a new meme image")),c.a.createElement("div",{className:"meme"},a.randomImage&&c.a.createElement("img",{className:"memeimg",src:a.randomImage,alt:"meme-img"}),c.a.createElement("h2",{className:"top-text"},a.toptext),c.a.createElement("h2",{className:"bottom-text"},a.bottomtext)))},b=function(){return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(E,null))},x=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,23)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,u=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),u(e),o(e)})};a(20);o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null))),x()},6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABpCAYAAAD88JerAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABk4SURBVHgB7Z05jB3F1sd7PLawZAxDRAJ4vhiQTUACiG8IAaHHI2ERkm0C1sAQsCbYEmsCfmLN3jzWECyWDL0BQYbksSACCV8geUJCjLEtgWzPvPq173/emTNV3dXLvR6P+Uvt63unu7q6Tp1TZ6vTE8VZiM2bN09PTk5ObdiwYTp8nVpcXJyamJjg2DY8hd8LfltaWpoyl04NjxwsDA+LQezv4R58HhneczD8zZ5b9sX2lWtC/wfhOeYWAooxY6JYo4C4mzZtmmGgwgBtD4O1Y0jE6WL9YfbEiRP7/vjjj0ExJqwJwm/ZsmVH+JgxBN5RnHsYhOORo0ePfliMAWeE8Oeff/4MxA2E/lv4CpFzxe+6R5j4e3///fd9xYgxNsJD7PDxt/Bgu4oREvqyyy5b/tT/L7300hV/s/+/8MILyyPVTgxHjhwpD4uffvop+5xvv/22/P8333wTbT+M0f5A/EeKEWKkhO+T2BACAl155ZXFBRdcsPxdBE4RUBAhGGw+GfgwuMvE8YRTm0wa3YN79wnu+cknnxRvvvnmqvsHzAaxv7sYEUZC+K1bt94aPvaEY6bJdQz0zTffXBKWQRahq7hP8ISFq/SdQVVbfF5xxRUrJo3ubSeOJoc4U1zK+TfddFNx3XXXZfUrB7T7xhtvlBPAYpRiv1fCB4LvCh9PFxWatyWmRLDAYMOFEL7s3MTp7um78PPPP5efIoy4VoT0XNoXgQCT4Msvvyw+/fTT8r73339/b5MA7n/ooYdWLBFhDB4JY7K/6Bm9EB6RHjr4zyJCcBEaLoGbGSBxTi4kBmPi2H56WCnAtUwY/SbT2V6r9jXhNIk0ebyo5/wXXnih+Oqrr0riP/74450nAH295ZZbVhA/KMI3HDt2bK7oEZ0IPzU1NX3q1CkIPuP/xkBA7Lvuuqt8iPfee2+FCBanalARv6kBTkFEFOeLuBL3al9tN+HMmKjnU/2TuBd4vhdffLGXCYBEgfgGOHqu6tPR05rwQazvDB+IoBVKmx5cg/L+++8XH3/8cfH888+vGgw7AazYRtzzjEgLSQcIajle/7drMwSRmOf+fStjuq9EPaIZKaYJDvqaAKz5Tz31lP1pLih7NxQ9oRXhw5r7chA/D9vfeMDnnnuuHAgLBslyxnoCkxTiM7mZECI2YALwO981KZoCrmf8hD5FfiPCB9E+FUT7B4UT7Sg4TzzxRKU5tdaA2LZLgpUm+g3JI+1fa31KWdR6D7EhtCbAk08+WS4TH330UWPup83t27fbn3rl+iywngdOPxhE/JKOSy65ZOnAgQNLJ0+eXLfHr7/+ujQ3N7f0yiuvLD366KNLN95449Lll1++dN9990Wf/Ycffli69957y/F59tlny9/eeuut8hp9b3I888wzS3bMh76Rzsjm+OBPfzi4WF/Wd2Zvm1ksSExK2WNNt5qsuE12t9bsPqQKnHT33XeXS1ObZUiWAuIc3YMx8Ou51fhfe+218m9853x9z70XXG/GZrxcH2baXs26a665ppzZbbiHWX/HHXeUHAMnVLVjuQ1O495wDt+7cDFtwUld2rAHz0GbPJN/Hr5bbte5fLblepbcYlwQ4SE6BGk6ODw4A8BDtLneDnIXonE9Irvt9XVtMz6xiUmfITgTgefne67o53yWVREe6VuMC4Hw+yFcG06Hw9tKiT4P7j+OfjCxYkTlviK+vjMBcvrjuP7fRUdsyD0xeLO2X3vttY3XdHnNuugDXO9s2lagL+gLfbpwY8BnEUyv0p634L7vvPNOqdvIP4E1lIMHHnjA6jczXZW8bMIXDQMuAg/Jw3ZRyhgg+ci7AAVpXD4FCEqMwfeZcYCI/G5jDHXgOsxmg1uLDtiYc9Iw+NKaeH1wGJMHm7gL4ei/j5F7yNqQ+1feRA5ZGbI0qux6AIHxwMX63MapQ3tE8OhLkMA7N2/evL9tulYW4YvTEbfGBKSDbb1WHgr2dAEEiCU/wH2YXZhnkbh4FEwO2+6dd94ZfVZ+axqUSkFcP1xCpjZt2vR0IHyrmH2tHT/kdgIx5Tp9Jt2v2MG5a2IK4lwAwRnErkuIIHu+r8keQ8Su3xXs+n8VDVG5xuOtKwy3n2mfe52YzoECP/jBvS+8K2iXeDrt5kqOpqD/cgcPsZ+M5KIhKkX94uIifvlp/o9G3xXWW2cTKIANzaYmGN68roDQeO1Sk4iBRWzz6bXyJveA+F988cVI4hes9UQHh5MWkY95d0OT9T4p6oOIR7zv4v9d3bOAQUTRyeFaBkvrpo32cT0P3RYEUB588MHo/ZRJo0kXCZA0Bm0xbqMA/bv++uvteA5OnDhxQ6fcfMKu1kXYNRCDK1NBHZw5ODjwcuGO5dN6pfyB00juzS4eP5wk/j627dghN3HuQXDGP49tn+eVu7YPJxIeQteHw7lifzJC9KeD82FZg2I9ueeee4q2EKeDP//8s3jppZfK9hRwufjii8vfv/766+j1zGjEGtx62223tRadcMcvv/yy/B1p8u677xZXX331qvvRF8Qo5tz3339f5IKlCC4/77zzyuUM0Mbu3acVb0lMTLJ9+/aV53z33XfL45ACfWGJ/Oyzz8r/K2mF9mjDPNfU5OTkrUH0fx64/z9VfV0h6odE36vvEN1q0XI6KPXYZs7YLFQbqUJcekWHwdF1TcA9EZ1NzTqfykTf/PpLX5ikDHAfSqRFzBriHuga9O3QoUPRZVQ6ERNffbVZS/oe6S8pWg9XafvLyl0V0bF9cZnSSSk/cl7wQH4ALWgHbrXac1tNWoNFOBW7WwPA+uwzfyx8n5RerTbhQEzFGJSIYdO6fNvKx4tN5JiE4hl0flV6FtdiGqbMQyWTML7qy7APRO9mg+gvUsQvOX6YNHlYP1qiMyjymNlcuqZQDDuW8eo1/KaA8PjHq+7tbN/yOdQnD+XOM5lsDoDEbBUhOEc5BkwUlFERVo4ixpH/+7aV1Gm5WBOuLoeQ61lSaU8TYYi0nY9SIAXBhiyJMKGooJR0VURyFTDuhTKpbJc6hSo3YohCVdUOz8k9q55VbXDPNmOCcuqvVSg3R3msU0ZpH+WZ9jnXXLtzFdGJ8tiGpTm/+uqr0UFVYsQ4JoImAyFJ9yDlpGg6+AcPHlzVDgTPzRGgL/baNqlUisdHiJN9cB3PkiI+E1gJIMNrflul7RNn96ZHLG6tzJHbb7+9k1nV9rAc22XiaWCaENweXgrFsm6qDpl0KanDc9o+SQrSZz9RUhOP8zmcCXt4ReYOQX3NIl2otCg7CcRhdIqB5xzEilKOGET9vQ9CVxG+j6WnbT/b+APE4VVLF2Oc4mJ7MPb2/ikmkO+F+279X6LmXkv432wDyhJRAzgllOqE+K9ytlgx3JeTYlSE73I4Mbrq2WEEHRC0asz4e5P8u9j9YxPGjhHSQiJ/mev9YDIBbEfgaj/wsTUn9XAxUci9UunJZwPhbZ/arNNViiTiO2dcILadPLG+SarZnD3l6y3b8TIVcBaQ9CDIFMG5IXtWKVg+CUEOB2x+mSPEuDE1ZK/aMCimUZX9vdYhG1tmnGx6YMO/PLe2flft32Os8CfU+SUAbTGmjCf313YugXvY5BF8L5jmwyok+yE8Xp4p62iw/yd3DOBdqoMcDtzUesoUrvSgMzngwdpGysYBObO6wlbMyAE+Ao0LRPWTxSaA8Lfh/vuyvhDx+ModmDgcmqJuV6r22eUkLNBZ/Oyjim+vFWgnMZD0qIOimLqmyglmJuZUMO22wfGfh2PaiqY2wDNG41om2C0S289uq1DUgSVDAR5B4dO2oE/KW5NHzIZiEbdds3yaQC5jH7LGrYuPv44muJ/t0pmSPHI9iyYbFxcX54Pc3ynCp4oPVEFuWO8SbQsbwLD9YDJ1JbrPjpHuggTSfvpxQFutVTfAQwUSYKQqGtj+2na0e9dChN+4ceP/bQghvA91I+BnGD7rOthIUVeRrAQDS3SUGHSMrqlfqb5pLx3PDvelqlH1AUUKOSyXSz9iAirbiX4wFl7qWaTEe90+w40LCwuDoObPhZvMpEqVoJgpaBGDDQp0ySiNpUXB5X0lLzJxmEDaHq2gkerZcH/up82NKLbSilWcoSj+N4Fyg1YS57EsXgjE8mWf0epVXMuSx/UxiWcVQUtoafkxiTAswXp6Xxx2HjYfzpqYNwibM+Yo8P7rttk62K/e3sV51KYt7Fbs2Mcee2zZkcJz8VvsGRQkaXq/OgcVY0YfYj4Ofkt53ap8A95Nq3NFPx3yv9hDbeDEKe34IPP3h9mwJ8zIKWYU657PbUvNbG9mNQ2vytSLxejbSA7F1qv6gRn5+uuvL3+39nYTpJIn4GyTDLkKVYUkbFxfmc2qw0PbiH2u51pt/AB1S7Lpy4BaOiXh+U/g+n8FkbJH9jrihRtUDYa0YP9bLqTNpiYVf5dfIAfcm9yBOvjEkT7W9DplDfCcrOFVCqStdVeX4Mr9BGuJ0AdfSs4sx3P8s+y5E9fDwdwQrmG9pZNwSIw4MadKjt2vjB5MEaVAqaiQnDp0lAFEGuRmqtIOA6t1T94yQYkQ+k1avgjVVHnkevpZlz2MskaiSJ3FAMHESIxD3YTXbh5/LnRhHGw/DccfWNVQkP+z1heutZI1MBaBSq1FqXAhayLrbSyWztpr973bbcFt4t4567Kyf310sk5/sIUaUoEXfPGEsHN1B8YjJ+pmn0P9ts8kXclGH43+dDg2gZaTMmxChg4FJHQTG+5LRalshzSJmkTsRkV8HZZ4VUopfa4itips+LA0ChZ/ZwJU9YOop2+zrviDAi92PN9+++1VSqNTvncVKWwdxudjN1b2iCdKLFqnz6YhR39YrkRDtkUFVIiobdu0AcFjUTJ+Y7LFiC2Orss/0DjYMLe/R2oy5VTt0FjQB8aGCeaZTX0ITF1dTEFcz8ypeijN5thMZTCruL/JQR9sThoPQnsSi21Nvth9mKRMNG9+8V3JKbkJHDaMbAnPkpaaUE3MWCV3MN6cH5u8hkarNlpMpLg+fMygIKS2LMU2HKJgYBWkth+hPOWEHD1QnLhfTPtO5aTntCllTxmugqpoo3zKqdUE3jUsL5pMsipglrHRo659pbr79HY9G8qzFMXglr/q+PHj8/acKOFV2qxq71dso4SIULfvTPZpylpIAVPNmjt+w0cKciUr9bku+tVlz1ssHpCLPvYoyv1sJvLuo0ePzvrzooQfVrA8HGbS1GAwiJ1SXHTRRSu+W6eIfMxACRu2kICFCh5g8uQUMVZx/9iuWgWKbH351EaHWB/gcG3UYBI3iVamomxVoP/cU6ZrW+klRJxXUaKD6DZpHDpB3M+HBmYYuJyIlfU12wdXfVsV9/VEkMiNLRu2QLEfEJwXtr1cDrNEjmXEqHgwz10njTTJ6hw3/v4sdypmpGwlxqlLjIND4eYhkkQHyf3xYV04EMR9lPCxB7SDJCJqrQQ2TQmOhWisZ+JMj6aEpC2CKF6yaB2URKmLWuk5UoS3LyrIWbMtvKvWei7bbv/W/W3mdAjC7Dt27Nhs1XVJwvMyPD5jBPAP62eqvHexAWbguR7Cq5S5xLHWJbu9yg8uBLZLgiQDgOss4XMUJQ+73QliyPcuJbBpLELw+oheR0Lfibp1ARNIzz0k+t66a5KEn5ycnA/rfBbnaW21+8BAapBY02yipjgxpe3jtpWGyjm5Ydo2GUUKwULotqVSeBZrJcTq2WmZ6iLiAUtFU6KDZA0c4vR8KgZtERtQrVWW42KJGQrs+CBCFewgjiNDhmVBukcToOCioPkkUv9dPnl+71Lhw/r2A9HncokO6sqdDYrEe2ZinWCg/OzlN8uhCuy0Sauu0/i7wCZm5Ga5CjyLzQWskjTahx+TAk1hgmSD4LBpVPasts5dStTHigXGih0odCjbXVktsqdz7Hg0cL0Ppi+I0Fq7m3K3ctXtNmj7NwvpPNwPG5sxalK6PAbni2j8XtrKOnd48ELnZmI59TEHTh2kiHkPnDRtvQnCQxo0f6/KxWcy2aUmdr5eVuSTQ3NhX7KU4my/H1/WjcRyruOpCtJ7AiPNBxF/VdEQrQnPzE05ZdYbmEDKi8tVGHGkxPIV+qqEZRjv721eRFxbxDj1oE2Us7MNdqMCgMNd9ehaxJYApYh3hRHzg7Zvn65d41MP2+d6u1ZgxXjXatn+fbF9+OEFpVEFMd+4lKmQW8R4Fax2HVP0zhbkrNlNtPxIkKRXots8x6DJzxYtUUf4af9eV8ETnu9dOGQcsH56bZ3KkWjy2NWJejiRCKJlAm0r60tCSm/Abu9SxbJujZ9KPaxdB5mFsVq3Z3I5sERl8FFQiTTCebiK0bKrCCnzU6jarav4N+VSLdGxKPridGAdNhMTE63FPKglfFWnLbFjb39AkXFvVRgJ6KOcKAy0CCzCtn0dia0SjV89FUzSdihB2b6Eqdu4jWNwr2cZVEXecpAU9cOYfGXHWRfFCYg5CG3FPesc9ip2OB2XlKiKkdu95nKb2ppvENTax30NbAxaDvRMENfW04tt3qCPjEOfHkafBh7EfKuXE2Rhy5YtO+qyTzls7phPwFSumc3IVW4YuWc+N89vA1JCoXLHYn+vOmI5b00P23fdX4mesXzDvos/+Xo3KwoYjQJKuqyrN+MHxg+G9qrZFwbawfHXxO5nEy6bJG3aBM0ug2+JHEsy5e85Fau6Ej0cHxQ9IbnGB3FSlsyoWxttYYGYSWd3luq7XQ+9DhBTorRmgjbbndrkvwl+z7x3CSPW2xRWroPP3QvK3HwIlY9OxAsqfJg7Mz3nkhfud4PoHCuy/VsUt7pdIP76JsUNbZtNOA3urdpA0bQ4IufFJAK/s9z5drQxwtzzcJvXj1ShSqvflqsJq6KEBQod9dsth4q7faElH0hJFQKQYpiLXMXPVuuanp4uE0VVrdu3pyINda9N14uOsOsxwTSW2vEKN3Mfr6B6sxBO7/zmiQiqXk3y7zDQM00CChq8WDkVReBkh0rDx9RignhzKJbdyyAyoXIqcAEGlomiahPEFzTIqqCdU2godz+AJpBcqrZwgs3CBTbhEtBPIm52YuOk2bhx499Jfi3GhUD43+r2fKWOtoX/Ykqhb7eJ2K7a5lV36AXIOUqb3pKNeI5tCLWvK4ntKooVhWCpLUaIKpftVFuFxRf+a5ORiiiURJCYlM9cSYoxcA/F3JsuC8rWrasNb+8lLpZr1mcb21RtXzqFv8PlTuLA3Y/UZcl2RWonzY4NGzYcrNpC1QZy3Oh9L8rYGWeAR8kg9o0TdXX5PDzBYwRVBc8YwVNVQBDtQQLs7ns9jyHK8UGhKJO0+/a1p7Jp7Vsq7Fsr9Lfc980RUPIbMOzGjK7Pk8PhluD+XTQVu20WFhcX9x0/fnyk4t0iRfhpPtu4Q3OiWB7iwLWKKoIr717x94YEHyuXW0QJHzozHYhfySGprVU8oHsF5lhgEz2bVM+sQh3BrZaulwr78mIV++kGxem1vFUGTVdUxuOrFCgexlaOEsiiRdy1Ib7MIbcHLNk3+wo0fz5EqHrDU10/UgTXHjX6qfXbJ3HUEHwhjNE/qDk0VjPNoXdRjzKoosNNB172NjqA9qxrjVd0T32STR47QBs3rdZo7oudTWEmlf/WO+loV3H22Lvk1jrBKxFsyA/qImFVNVoUXOijFMqoD5U8kQ2uqheqkKHqG3zG3Ktqw5ZsiRz/7Nvl2hVJrb6O2+uyV1QyDbNFor+p2TQK2AIJcLDeMSdvIL9p04Py8hH1see1WnwEcPWHwd26b9yKWw6SpVBS+fQCogzCxtKILRhAzlPBAe1Jt2+56BN2v7zWfjl0kLDbtm0rlwnVeZVeoWSR2IsGPeoIvuZFetGB8ECOCGm0dRAx5Mhh7Wbgsb+9ve1feWIP+9oNoPIr9lxB7erT177htxxvnSZIrLjDEGcFwYVOhAeKG182fJlw19LifcOK9h9//LEsIKAs26Zu2YSlcVYRXEgSPnDCTKr+TQwqdQIQleKicUFmnXa7QgMrPapSqVOoKYh8VhJcqCx31qYYj6/cLDetgi1tnCuxdVuHxLfa9W/GaoNE8EQYhGNf1yzXM40U4WfDx86uuzptiRMpWZZ7YvvvrC0uwlq/u9UF+kaN0jYo1gHBhRThbw0fHzC4cmKsZ5xLBBeqMnCodDzd17betYj1YJa1RZLwpFcHR05Z+BZb3efUrXXI5YvZpoQMu0xgmq1HpS0XlYURSP8JxN/D/9HUSSUe5c6VrtCLA2Iv/cnAOUFwYaLuhOBcOWhz7BWNWitQidOqd8DU4JwiuFBL+ODwmD516hQif1q/qQDxmZgA8qDJ1952swQJEOE4sGnTptlzieBCLeFBjPhAjhE5a/pcBrxDxrp6WwCupmz3obB0zU1OTs6di8S2yCK8YNf8GOQ8UfUqKVMg5nsH1iFjEzA7cPI8mxAWFxcPUZY1RMfm12J07EyjEeHB0MZ/uYgUPjwDKDkZkQ2xwzo9f65zci4aE14IE2BXGPA9YcB3FOPDIBxzcDOf/q0LfyEfrQkvkIMfiL8r/Pf/e54EgyE3f47I/mtd7hedCW9BFY2TJ0/uwPwb5u1t42cO5eoLwxfbLoTfIfCRcAy0Jm/evHnhLyKPFv8Fh0h4S/NhjpkAAAAASUVORK5CYII="},7:function(e,t,a){e.exports=a(22)}},[[7,3,2]]]);
//# sourceMappingURL=main.5b8b4dca.chunk.js.map