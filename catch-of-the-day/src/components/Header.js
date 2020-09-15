import React, { Component } from "react";

/*  Statless Functional Components es16 & implicit return
 *  Arrow functions by default retuns value
 *  Destructed parameters as objects
 *  props doesnt need () if only one value
 *  example written below, choose one
 *
 *   const Header = props => (
 *   const Header = (props) => (
 */
const Header = ({ tagline }) => (
  <>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The </span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  </>
);

/*  Statless Functional Components es16 & implicit return
 *   Arrow functions by default retuns value
 *   props doesnt need () if only one value
 *   example written below, choose one
 *
 *     const Header = props => (
 *    const Header = (props) => (
 */
// const Header = props => (
//     <>
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The </span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{props.tagline}</span>
//         </h3>
//       </header>
//     </>
// )

/*  Statless Functional Components es16
 *   props doesnt need () if only one value
 *   example written below, choose one
 *
 *   const Header = props => {
 *    const Header = (props) => {
 */
// const Header = props => {
//   return (
//     <>
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The </span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{props.tagline}</span>
//         </h3>
//       </header>
//     </>
//   );
// }

/* Statless Functional Components basic*/
// function Header(props) {
//     return (
//       <>
//         <header className="top">
//           <h1>
//             Catch
//             <span className="ofThe">
//               <span className="of">Of</span>
//               <span className="the">The </span>
//             </span>
//             Day
//           </h1>
//           <h3 className="tagline">
//             <span>{props.tagline}</span>
//           </h3>
//         </header>
//       </>
//     );
// }

/* Classic version */
// class Header extends Component {
//   render() {
//     return (
//       <>
//         <header className="top">
//           <h1>
//             Catch
//             <span className="ofThe">
//               <span className="of">Of</span>
//               <span className="the">The </span>
//             </span>
//             Day
//           </h1>
//           <h3 className="tagline">
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//       </>
//     );
//   }
// }

export default Header;
