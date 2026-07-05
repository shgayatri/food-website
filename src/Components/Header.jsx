import { LOGO_URL } from "../utils/contants";
 import { useState } from "react";
const Header = () => {
let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAvVBMVEX////cAAAAAADZAAD///3TAADz1tfWAAD8/PzfAADs7OzIAAAaGhqHh4fx8fGRkZHBwcELCwvmmZnT09Pb29vLy8v98vDi4uIVFRXUHR94eHgoKChHR0enp6e0tLSAgIA7OztYWFjgkY5gYGBpaWkxMTGfn59QUFD03+DwzMrlqakhISHTQj/15+fSJibceXnZhYPPMDHbU07otrbTUlPxxMTfZWXXFxbTZmbbMjPdQEDdcnLggnvjn57QRUXOcinvAAALHUlEQVR4nO1biXKqShCFAWQgyiKguCEoIkaNGjWaRf//s173YBQ1994sonlVnEqZ0RA89nSf7p4ZOS5Hjhw5cuTIkSNHjhw5cuTIkeP/CRF+EDgU9y/9PointMQD4V8IWhnHhcIAEdNfalJOK8zL09enx5eHlQQQRtPBb6QqLtezGi8IAs8rPHvgFUHawF9Ux3GsqqpRemuODPH2Dsy4Wq1qtdrz8wtg9Pgi8PJrhVP1brPpD0mjW/Is9dZEufFyyXxzUEDE8Tgej+eSoggTsCRV1aptGa1S0/TrXvW2TGnlHHOZ53n5qXCYdapZ7V4jMLQbMt3cfQCeQRp1loV4XHm/1Cr5w+h2hi10ymd4gsDCyOJlqTZarCfleZxcrHr9Yun2HnvAXOD3AD0QZKE2mgwo6hZ1+sPoNlpQKZwhLgvvLHnQLUVhA6nWGTA39Zq+cQumc6l2htXOntLd6HWymElSwltYredoVzUi+g1Ca9A5xyuz6Wq9rFBEpbBZPMgCWlaYDXDqq75vX50pTdgcvVaQgdRskH6pMp+OJCQrPRXgqVYixrW9dbBYPK3X69fXCeDt7W0KQJs+JESxpEp+uHj+KIHLCg8bzAkeia7Kk3LiYLsSWNbH8BF2Q2FW+Ojq5SMWBsICRcsZ1q9IVNNRyOP76frxGbK/jM4IoS49TMYfXA32FecjuIZfLeGp7devF1ftoprMbGUMlen8vjydvK7Xk/vCxz6IrhC/gQvwK6y17GH7WkRLPXvvhe84ja5zLFdgeXkKI7tXypBdCi1isd9faURYaC2ggpGm8Ikss5UNtWM4BFIN3dyPv1Lfsysra6AqoFUN4mRF7wC1iDJTlvjVbPkFs7Ir6QSoymUYRcXsC5ZuqGEuhfCYVP599QnoFBRAmoN6hN0MuB3BM0Gg4mfQzjU9b6P/CboGqs+gq1XTy4TfHnYD3qCyAHdbYKx/vbunj/C/jzAbXiPTEoDWcdI64G2z+FsNs8jFM3DVDgyDdpYVgG2CQBWgmpPn37uBmNTbMiRdx8zSqE0d5v6JSc03VyDg36bg5E8w/3rzsuTScIYQTtiBzr6/riNylRkvyPcQVMPsRDWEMqiyFZjOfHtZRwSN4/kRGLUeXpJcGg5RE5Ouf1IMgVHXIKpgVDWzTKVj4M9Y8XZiUKrhoonjfCbxiFisgAPBsKtnwBKgDSHhD2Re2aY52oan18Nuv+n3hmb4CeHBdLGFJhuaA2OYTaXqNMFkryAxg5Tiaz55h+nX/7ZS4jkHWkuoqycw/c1spj+EqjIe8codTU0+DUzXbPSDsK17f517h5CD1NMHiCnIHaVsYqrooTEUlmD2qBLXjaqqqv1r3ksppiLXERQZWhWvmAVRp6eyWkg+auo84vqf+W+7Z5qpJZSCpAhvlFN7WUy/3gcxfeH5x6Ourk7Ip3pNj5hByjvGUKi8gKT2s4h+5qYSJNIjheq55DOrTbRvkhQpUZzKipSRo2oYp3NZ4e/Tr9qmSz6jNFVSdI8C7j6pcpzm5XXKHsI7gZvWjlZzImI2P1O86cTsH70wqPFMp4aXL6gcAg9QQj+P0wkqNHerNxrmqD/LadMlx+3oGHLdAn5nkFC9HjzUFH57qE2o6viuGdabjZ3210MSJGztPunveFMQMKfoktTk4w1GCl+DX73LNymtAN70LjHEDmqPuMUiJCd4dJFokxQJczwteB9xWjto2+AkQcpJMMXB9EAK4YLLd/4RVnxQrq1Tk49EXTOxZ9iyaQhxQ3B9hIam6ybBDjJGmk2XnMrRmlck0Lv65WVKBwZjYJqu9g3g40MebTnMYBEpFrumW8WR2+ubuChkmMXi0HWLx1qGlb/CmJYuzpTiLWNo89O5VPPNVN1uwYzrFoaOTVwSOUXigXEJ0dHUPeuEaYdPBLV06b6PlqKEaTnNFEx3eKM2MRuaNYR5Dok75KwicLZcs6kFZtHsH6kpMC0nTPUMmLIUpSjT1IsWVB37JxjfBsw7iSyzCOKjE2AaEtOrDmHyj1MusymfkU31JJmCXB/81CMp9wNx72paz3QNKJsCrto0iQNGb2h1AszP1iGhQ0389OJdfwTWq9wpEPsHgNn2k6oVTdODSDd7KuR4A0eBBhauO5CezPPVfYj9OyhR2peP/RY2USum/HsAm71FLCj/1DoElQPUAjvEEeeDOhHStUhS8anvSR4EdcsrKxh1L6+nns9hu6eMUrMVkO7+WYsUhz7BaYaStddjI7XhukOT2HaDrbka/UM5AvWjgk2ff/kcZZjw8CRg3t+jmXI/B8QUIqercQaIEowCDaoazGERp4UktLwgrf64XPgEv83L71DaLhikLCT7Hzv0yMEioJymyWwMIQSJCzdIVIx6XG+1m9gRpqMKGmkBBE8zj3T2IlB9C9soXtgcXgtJqmZT271mxKa32m7sRuCkLitU7KgUOQe/EbmNwEvwmS0/g7XpbpSk08nhDbVqWmKoqp6OqB6857AjMRLpBAqU8S5OL41Sn63xKi/xBW4WvyTrff0s9nsMP3FUnLQfnzRbSqwb1zLZ8qdFJ3HUySlRq27Y5+/o/I3EJPnETjGTdelAT5b4IbUcUaW6V7Vaar2tedBqRl2tVccU6XRLVafb0vq20T0Vzcpd0o3rQRZEOQ8UEgsLiP4Tm7ZCq2WV2nbJaAJNp23jDrDR8ox61FJDqOu9E9NB5GP5qAXZbKCoZLfIPzp5X0d3qhaNWtTy+rTVqhqaAbFvO7at6hb1uKp+0oDSLZQnBczA2eyf0TaWeE88z2/+cIWlf+ZYlIjNPktQ7ay2TwwCNx5Ipws+X4TIjaE6kQbw0T+1/PIdaP0Id+l4Xt5wPzm+uZEV4Qk+dNTP7EiC14BbD1YQ/vEPJDW+44UVmFRrZLchSXst3FCGwH36wTYPTAqPy3CtRoabfEavmoihfKpUnwcqFFb71QyWTw6gAebp+X478stsRdwlEtg/17sZmnS32ckOFNTib1hV5OIafMoJO+GR8bGJNi5CjhcCL2zH36AKAsXzCxA52sz8gI9fQss8wBtu4y8e4Be5Aigp/4BlY8nP/NScA52PCFUbr6BVv1YA0rWkoOaL0JVd4chMC5I1CwxewC2lLx3wqWxqEE0ilBBXOYZUwnV0FABFqN3/kal49hf2NMawVxvXOdqlBVj+Ma3ipU6FfUnm/KrkazOF+WY6nXbul8xRdq6yu8EVoPYD3JAcvICGC9vlx2aF18adUU1OzlGuHrab97KGBv2rne4GqhrWROywuTSJPzIp8Lw7OuHN301Zr6h1r0cUN5HZhl2lgx4gPCQU9l+QYoP5NsUzgfyCdUm9edXz8mp3yIrmwgs7IFtbs3PQzGMZz/FahoA7JqrwAp6U+NRxhQtC0wlrjujmRWKH4WflwXgn5rTwJgl4jvuUKVw2+Otds0HLTHqLuHMns7mVR6+d+WA82KxrZxPPmOIB/+2/bpsF7D7ueWOMlx8E/KoBnpVe7U/1f0j1ZM/9atCLYXK6l87fXqQPDXlKlv/m4bWfwgpdfRcg8bK8kKT30+h/xo2Y4ra3W3pf8aOVwrzzOvubcRXpNrPPYIRmaKSUhy6nz8KpQu1xk4jaU7N04te9QyoXQaU+YikkKyc3BXXqvYbfNqqalhyXjxcfGhUPBN78a57UidpBz+z1w7puA5v7EX5f5shH5dHZMbtbQatajuFFegvddtxhieqdJqTS6U/WMzJCIgaVzTZd9VV+wcx/CGY+qKQ70075fpAUp7+T6UfNyS9lmiNHjhw5cuTIkSNHjhw5cuTIkePq+A/ZBOM0JJIVaQAAAABJRU5ErkJggg==" alt="Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/cart">Cart</a></li>
           <button className="login-btn" onClick={() => {
             setBtnName(btnName === "Login" ? "Logout" : "Login");
           }}>
             {btnName}
           </button>

        </ul>
      </div>
    </div>
  );
};
export default Header;