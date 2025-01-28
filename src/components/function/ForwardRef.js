import React from "react";

// function ForwardRef() {
//   return (
//     <div>
//       <input type="text" />
//       <button>Focus!</button>
//     </div>
//   );
// }

const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardRef;
