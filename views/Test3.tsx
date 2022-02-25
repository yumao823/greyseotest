import React, { FC } from 'react'



const Test3: FC = () => {
  
  // if (recipe == 'SPANISH') {
  //   fudge = SPANISH_FUDGE;
  //   amt = base * SPANISH_FUDGE;
  //   sugar = 2 * bottom(amt) + top(amt) * 1.17;
  // } else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
  //     fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;

  //     amt = base * fudge;
  //     sugar = 2 * bottom(amt) + top(amt) * 1.17;
  //     if (recipe == 'FRENCH') {
  //         chocolate = 7;
  //     }
  // } else {
  //     fudge = 1;
  //     amt = base;
  //     sugar = 2 * bottom(amt) + top(amt) * 1.17;
  // }

  /**
   * Below is Correct one
   */


  // switch (recipe) {
  //   case 'SPANISH': fudge = SPANISH_FUDGE; break;
  //   case 'FRENCH': fudge = FRENCH_FUDGE; chocolate = 7; break;
  //   case 'ENGLISH': fudge = ENGLISH_FUDGE; break;
  //   default fudge = 1; break;
  // }

  // amt = base * fudge;
  // sugar = 2 * bottom(amt) + top(amt) * 1.17;
 

  return (
    <h1>Please check the Answer from views/Test3.tsx</h1>
  )
}

export default Test3