 
//   const append = (renderHOC) => (WC) => {
//     const Append = (props) => {
//       const appendRender = (parentRender) => (renderProps) => {
//         return (
//           <div>
//             {parentRender(renderProps)}
//             {renderHOC(renderProps)}
//           </div>
//         );
//       };
  
//       const render = connectRender(appendRender, props.render);
  
//       return <WC {...props} render={render} />;
//     };
  
//     return Append;
//   };